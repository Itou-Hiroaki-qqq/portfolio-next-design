"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
    interface Window {
        turnstile?: {
            render: (el: HTMLElement, options: Record<string, unknown>) => string;
            reset: (widgetId?: string) => void;
            remove: (widgetId: string) => void;
        };
    }
}

type Props = {
    /** 確認が通るとトークンが渡される。期限切れ・エラー時は null */
    onToken: (token: string | null) => void;
    /** この値が変わるたびにウィジェットをリセットする（トークンは1回しか使えないため） */
    resetKey?: number;
};

/** Cloudflare Turnstile（ボット対策）のウィジェット */
export default function TurnstileWidget({ onToken, resetKey = 0 }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    const renderWidget = () => {
        if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => onToken(token),
            "expired-callback": () => onToken(null),
            "error-callback": () => onToken(null),
        });
    };

    useEffect(() => {
        renderWidget();
        return () => {
            if (widgetIdRef.current && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
            }
            widgetIdRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (resetKey > 0 && widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
            onToken(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resetKey]);

    if (!siteKey) {
        return (
            <p className="mb-6 text-sm text-red-500">
                ボット対策の設定が見つかりません。管理者にご連絡ください。
            </p>
        );
    }

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onReady={renderWidget}
            />
            <div ref={containerRef} className="mb-6" />
        </>
    );
}
