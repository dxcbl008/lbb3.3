/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";
import { getClientConfig } from "./config/client";

export const metadata = {
    title: "老北鼻AI智能助手-lbb.ai",
    description: "您的私人ChatGPT聊天机器人。",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#fafafa" },
        { media: "(prefers-color-scheme: dark)", color: "#151515" },
    ],
    appleWebApp: {
        title: "老北鼻AI智能助手-lbb.ai",
        statusBarStyle: "default",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="config" content={JSON.stringify(getClientConfig())} />
                <link rel="manifest" href="/site.webmanifest"></link>
                <script src="/serviceWorkerRegister.js" defer></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?415448b475d5767ab10a708c6b7efd29";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`,
                    }} />
            </head>
            <body>{children}</body>
        </html>
    );
}
