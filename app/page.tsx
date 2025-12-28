"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!url) return;
    setLoading(true);
    setMarkdown("");
    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.content) {
        setMarkdown(data.content);
      } else {
        alert("Error / エラー: " + (data.error || "Failed to convert / 変換に失敗しました"));
      }
    } catch (err) {
      alert("Network Error / 通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-12 text-slate-900">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-black text-blue-600 mb-3">URLtoMD</h1>
          <p className="text-slate-600 text-lg font-medium">Convert Web URLs to AI-friendly Markdown</p>
          <p className="text-slate-400 text-sm">WebサイトをAIが読みやすいMarkdownに一瞬で変換</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <input
            type="url"
            placeholder="Paste URL here / URLを貼り付けてください"
            className="flex-1 rounded-lg border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
          <button
            onClick={handleConvert}
            disabled={loading || !url}
            className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-md hover:bg-blue-700 active:scale-95 transition-all disabled:bg-slate-400 whitespace-nowrap"
          >
            {loading ? "Converting..." : "Convert / 変換"}
          </button>
        </div>

        {markdown && (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="font-bold text-slate-700">Results / 抽出結果</h2>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(markdown);
                  alert("Copied to clipboard! / クリップボードにコピーしました！");
                }}
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-colors shadow-sm"
              >
                Copy
              </button>
            </div>
            <textarea
              className="h-[500px] w-full rounded-xl border border-slate-200 bg-white p-6 font-mono text-sm leading-relaxed shadow-inner outline-none focus:ring-2 focus:ring-blue-500"
              value={markdown}
              readOnly
            />
          </div>
        )}
      </div>
    </main>
  );
}