// components/BotpressChat.tsx
"use client";

import Script from "next/script";

export default function BotpressChat() {
    return (
        <>
            <Script
                src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"
                strategy="afterInteractive"
            />
            <Script
                src="https://files.bpcontent.cloud/2025/07/16/15/20250716155644-MH80SNP6.js"
                strategy="afterInteractive"
            />
        </>
    );
}
