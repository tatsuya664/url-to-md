# URLtoMD

**Webサイトのノイズを排除し、AIが最も理解しやすいMarkdown形式へ一瞬で変換するツール。**

[🚀 ライブデモを見る](https://urltomd-tool.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue) ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black)

> **Note**
> **本プロジェクトの開発について**
> 初期実装や一部ロジックの検討に生成AIを活用していますが、全体の設計・要件定義・環境構築・デバッグおよび技術選定（jsdomからlinkedomへの移行等）は自身で行っています。

---

## 🚀 サービス概要
ChatGPTやClaudeなどのLLMにWebサイトの情報を読み込ませる際、広告やサイドメニューなどの「ノイズ」が精度を下げてしまう課題を解決します。
本ツールは、Webページの本文のみを抽出し、構造化されたMarkdown形式に変換。AIへのコンテキスト投入を最適化します。

### 主な機能
- **本文抽出エンジン**: `mozilla/readability` と `linkedom` を採用し、サーバーレス環境での高速な解析を実現。
- **高速変換**: HTMLを即座にMarkdownへパース。
- **ワンクリック・コピー**: AIへのペーストに特化した「AI用にコピー」機能を搭載。

## 🛠 技術スタック
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📦 セットアップ

```bash
# 1. リポジトリをクローン
git clone [https://github.com/tatsuya664/url-to-md.git](https://github.com/tatsuya664/url-to-md.git)

# 2. プロジェクトディレクトリに移動
cd url-to-md

# 3. 依存関係のインストール
npm install

# 4. 開発サーバーの起動
npm run dev