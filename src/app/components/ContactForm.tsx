"use client";

import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
    const [form, setForm] = useState({
        lastName: "",
        firstName: "",
        company: "",
        email: "",
        confirmEmail: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "emailMismatch" | "emailFail">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.email !== form.confirmEmail) {
            setStatus("emailMismatch");
            return;
        }

        setStatus("loading");

        try {
            // ① Firestore に保存
            await addDoc(collection(db, "contacts"), {
                ...form,
                createdAt: serverTimestamp(),
            });

            // ② Resend API Route へ送信
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const result = await res.json();

            if (!result.success) {
                console.error("Resend API Error:", result);
                setStatus("emailFail");
            } else {
                setStatus("success");
            }

            // フォームを空に戻す
            setForm({
                lastName: "",
                firstName: "",
                company: "",
                email: "",
                confirmEmail: "",
                message: "",
            });

        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        }
    };

    return (
        <section className="contact s-wrapper mt-16" id="contact">
            <h2 className="section_title">Contact</h2>

            <form
                onSubmit={submitForm}
                className="
                    max-w-[600px] mx-auto mt-6 p-8 bg-white rounded-xl 
                    shadow-[0_4px_12px_rgba(0,0,0,0.08),0_-2px_8px_rgba(0,0,0,0.04)]
                "
            >
                {/* 名前 */}
                <div className="mb-6">
                    <label className="font-bold block mb-2">
                        名前
                        <span className="text-white bg-red-500 text-xs px-2 py-0.5 rounded ml-2">
                            必須
                        </span>
                    </label>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="lastName" className="text-sm">
                                姓
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="山田"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md text-base"
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="firstName" className="text-sm">
                                名
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="太郎"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md text-base"
                            />
                        </div>
                    </div>
                </div>

                {/* 会社名 */}
                <div className="mb-6">
                    <label className="font-bold block mb-1">
                        会社名
                        <span className="text-white bg-gray-500 text-xs px-2 py-0.5 rounded ml-2">
                            任意
                        </span>
                    </label>

                    <input
                        id="company"
                        type="text"
                        placeholder="会社名"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md text-base"
                    />

                    <small className="block text-sm text-gray-600 mt-1">
                        特になければ未記入で結構です。
                    </small>
                </div>

                {/* メール */}
                <div className="mb-6">
                    <label className="font-bold block mb-1">
                        メールアドレス
                        <span className="text-white bg-red-500 text-xs px-2 py-0.5 rounded ml-2">
                            必須
                        </span>
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md text-base"
                    />
                </div>

                {/* メール確認 */}
                <div className="mb-6">
                    <label className="font-bold block mb-1">
                        確認のため再度ご入力ください
                    </label>

                    <input
                        id="confirmEmail"
                        type="email"
                        placeholder="mail@example.com"
                        value={form.confirmEmail}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md text-base"
                    />
                </div>

                {/* メッセージ */}
                <div className="mb-6">
                    <label className="font-bold block mb-1">
                        お問い合わせ内容
                        <span className="text-white bg-red-500 text-xs px-2 py-0.5 rounded ml-2">
                            必須
                        </span>
                    </label>

                    <textarea
                        id="message"
                        rows={6}
                        placeholder="お問い合わせ内容を入力してください"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md text-base resize-y"
                    />
                </div>

                {/* フィードバックメッセージ */}
                {status === "emailMismatch" && (
                    <p className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        メールアドレスが一致しません。再度ご確認ください。
                    </p>
                )}
                {status === "success" && (
                    <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                        送信が完了しました！後ほどご連絡いたします。
                    </p>
                )}
                {status === "emailFail" && (
                    <p className="mb-4 p-3 bg-yellow-100 text-yellow-700 rounded-md text-sm">
                        内容は受け付けましたが、メール通知の送信に失敗しました。
                    </p>
                )}
                {status === "error" && (
                    <p className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        送信に失敗しました。しばらくしてから再度お試しください。
                    </p>
                )}

                {/* 送信ボタン */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                        w-full py-3 text-white font-bold rounded-md
                        bg-blue-500 hover:bg-blue-600 transition
                        disabled:opacity-60 disabled:cursor-not-allowed
                    "
                >
                    {status === "loading" ? "送信中..." : "送信"}
                </button>
            </form>
        </section>
    );
}
