import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend クライアント
const resend = new Resend(process.env.RESEND_API_KEY);

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// 入力の上限（メール送信の悪用・巨大データの送信を防ぐ）
const MAX_NAME = 50;
const MAX_COMPANY = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 3000;
// 管理者宛メールに載せるアドレスの形式チェック（カンマ・空白・<> などを含むものは弾く）
const EMAIL_RE = /^[^\s@,;<>"']+@[^\s@,;<>"']+\.[^\s@,;<>"']+$/;

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/** Cloudflare Turnstile（ボット対策）のトークンを検証する */
async function verifyTurnstile(token: string, ip: string | null): Promise<"ok" | "fail" | "unconfigured"> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        console.error("TURNSTILE_SECRET_KEY is not set");
        return "unconfigured";
    }
    const params = new URLSearchParams({ secret, response: token });
    if (ip) params.set("remoteip", ip);

    try {
        const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body: params });
        const result = (await res.json()) as { success?: boolean };
        return result.success === true ? "ok" : "fail";
    } catch (error) {
        console.error("Turnstile verify error:", error);
        return "fail";
    }
}

function asString(value: unknown): string | null {
    return typeof value === "string" ? value : null;
}

export async function POST(req: Request) {
    try {
        let data: Record<string, unknown>;
        try {
            data = (await req.json()) as Record<string, unknown>;
        } catch {
            return NextResponse.json({ success: false, error: "invalid_request" }, { status: 400 });
        }

        const rawLastName = asString(data.lastName)?.trim();
        const rawFirstName = asString(data.firstName)?.trim();
        const rawCompany = (asString(data.company) ?? "").trim();
        const rawEmail = asString(data.email)?.trim();
        const rawMessage = asString(data.message)?.trim();
        const token = asString(data.turnstileToken);

        if (
            !rawLastName || !rawFirstName || !rawEmail || !rawMessage || !token ||
            rawLastName.length > MAX_NAME ||
            rawFirstName.length > MAX_NAME ||
            rawCompany.length > MAX_COMPANY ||
            rawEmail.length > MAX_EMAIL ||
            rawMessage.length > MAX_MESSAGE ||
            !EMAIL_RE.test(rawEmail)
        ) {
            return NextResponse.json({ success: false, error: "invalid_request" }, { status: 400 });
        }

        // ボット対策の確認（失敗したらメールは送らない）
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
        const verified = await verifyTurnstile(token, ip);
        if (verified === "unconfigured") {
            return NextResponse.json({ success: false, error: "unavailable" }, { status: 503 });
        }
        if (verified !== "ok") {
            return NextResponse.json({ success: false, error: "verification_failed" }, { status: 403 });
        }

        const lastName = escapeHtml(rawLastName);
        const firstName = escapeHtml(rawFirstName);
        const company = escapeHtml(rawCompany);
        const email = escapeHtml(rawEmail);
        const message = escapeHtml(rawMessage).replace(/\n/g, "<br>");

        // ---------- 管理者向けメール ----------
        const adminResult = await resend.emails.send({
            from: process.env.FROM_EMAIL!, // ← onboarding@resend.dev
            to: process.env.ADMIN_EMAIL!,  // ← あなたの Gmail
            replyTo: rawEmail,             // ← 「返信」で問い合わせた人に直接返信できる
            subject: "【Portfolio】新しいお問い合わせがありました",
            html: `
                <h2>新規お問い合わせ</h2>
                <p>姓: ${lastName}</p>
                <p>名: ${firstName}</p>
                <p>会社名: ${company || "(未記入)"}</p>
                <p>メール: ${email}</p>
                <p><strong>メッセージ:</strong></p>
                <p>${message}</p>
                <hr />
                <p>送信日時: ${new Date().toLocaleString("ja-JP")}</p>
            `,
        });

        // Resend は送信に失敗しても例外を投げず error を返すため、ここで確認する
        if (adminResult.error) {
            console.error("Resend admin mail error:", adminResult.error);
            return NextResponse.json({ success: false }, { status: 502 });
        }

        // 入力されたアドレスへの自動返信は行わない
        // （他人のアドレス宛に送れる機能は迷惑メールの踏み台に悪用されうるため）
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
