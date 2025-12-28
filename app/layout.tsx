import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URLtoMD | Convert Web URL to Markdown for AI",
  description: "WebサイトをAI用Markdownに一瞬で変換。Convert Web URLs to clean Markdown for AI (ChatGPT/Claude/Gemini).",
  keywords: ["URLtoMD", "URL to Markdown", "AI Markdown", "ChatGPT", "Claude", "RAG", "Markdown変換", "本文抽出"],
  verification: {
    google: "Taj3YFPakjSrUdzb41Ca6VwJ9JR5Sd4lLI4JEY9ZJsQ",
  },
  authors: [{ name: "Tatsuya Kawashima" }],
  openGraph: {
    title: "URLtoMD | AI-friendly Markdown Converter",
    description: "WebサイトをAI用Markdownに一瞬で変換。Extract clean Markdown from any URL for AI.",
    type: "website",
    url: "https://urltomd-tool.vercel.app/", 
    siteName: "URLtoMD",
  },
  twitter: {
    card: "summary_large_image",
    title: "URLtoMD",
    description: "WebサイトをAI用Markdownに一瞬で変換 / Convert Web URLs to AI-friendly Markdown",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}