import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend クライアント
const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const lastName = escapeHtml(String(data.lastName ?? ""));
        const firstName = escapeHtml(String(data.firstName ?? ""));
        const company = escapeHtml(String(data.company ?? ""));
        const email = escapeHtml(String(data.email ?? ""));
        const message = escapeHtml(String(data.message ?? "")).replace(/\n/g, "<br>");

        // ---------- 管理者向けメール ----------
        const adminSend = await resend.emails.send({
            from: process.env.FROM_EMAIL!, // ← onboarding@resend.dev
            to: process.env.ADMIN_EMAIL!,  // ← あなたの Gmail
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

        // ---------- ユーザー向け自動返信 ----------
        const userSend = await resend.emails.send({
            from: process.env.FROM_EMAIL!,
            to: data.email,
            subject: "お問い合わせありがとうございます",
            html: `
                <p>${lastName} ${firstName} 様</p>
                <p>お問い合わせいただきありがとうございました。</p>
                <p>以下の内容で受け付けました。</p>

                <hr />
                <p><strong>お問い合わせ内容:</strong></p>
                <p>${message}</p>
                <hr />

                <p>担当者より後ほどご連絡いたしますので、今しばらくお待ちください。</p>
            `,
        });

        return NextResponse.json({
            success: true,
            adminSend,
            userSend,
        });

    } catch (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json(
            { success: false, error },
            { status: 500 }
        );
    }
}
