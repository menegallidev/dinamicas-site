import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const utmifyPixelScript = `
  window.pixelId = "6a876005e2fb08c2afd3ed0d";
  (function () {
    var script = document.createElement("script");
    script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    script.async = true;
    script.defer = true;
    (document.head || document.documentElement).appendChild(script);
  })();
`;

const utmifyUtmScript = `
  (function () {
    var script = document.createElement("script");
    script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-utmify-prevent-xcod-sck", "");
    script.setAttribute("data-utmify-prevent-subids", "");
    (document.head || document.documentElement).appendChild(script);
  })();
`;

export const metadata: Metadata = {
  title: "Dinamicas de Ingles",
  description:
    "Pagina de vendas para dinamicas e recursos prontos para aulas de ingles.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="utmify-pixel" strategy="afterInteractive">
          {utmifyPixelScript}
        </Script>
        <Script id="utmify-utms" strategy="afterInteractive">
          {utmifyUtmScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
