# GitHub Repository Search

GitHub REST APIを利用した、リポジトリ検索アプリケーションです。

キーワードや各種フィルターからリポジトリを検索し、検索結果をカード形式で表示します。

## Features

* キーワード検索
* ユーザー・言語・トピックによる絞り込み
* スター・フォーク数による絞り込み
* ページネーション
* ローディング・エラー・Empty State
* キーボード操作に対応したUI
* レスポンシブデザイン

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* GitHub REST API
* lucide-react

## Architecture

Atomic Designをベースに、UIとロジックを分離した構成にしています。

src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── hooks/
├── services/
├── types/
└── utils/

## Getting Started

```bash
npm install
npm run dev
```

本番ビルド：

```bash
npm run build
```
