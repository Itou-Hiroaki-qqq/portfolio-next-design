# ITO HIROAKI Portfolio

伊藤寛晃のポートフォリオサイトです。

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 + DaisyUI |
| データベース | Firebase Firestore |
| メール送信 | Resend |
| デプロイ | （任意） |

## 機能

- **Works - Website**: コーディング制作物の一覧・詳細ページ
- **Works - App**: Webアプリ制作物の一覧・詳細ページ
- **Work Experience**: 実務経験一覧
- **Skills**: スキル一覧（カテゴリ別）
- **Contact**: お問い合わせフォーム（Firestore保存 + Resend自動返信）

## セットアップ

### 1. パッケージインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルをプロジェクトルートに作成し、以下を設定してください。

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
RESEND_API_KEY=
FROM_EMAIL=
ADMIN_EMAIL=
```

### 3. 開発サーバー起動

```bash
npm run dev
```

`http://localhost:3000` をブラウザで開いて確認してください。

## ディレクトリ構成

```
src/app/
├── api/contact/       # お問い合わせAPI（Resend）
├── components/        # 共通コンポーネント
├── data/              # コンテンツデータ（works, skills など）
├── firebase/          # Firebase 設定
├── work-experience/   # 実務経験ページ
├── works/[id]/        # Works詳細ページ
├── worksApp/          # Worksアプリ一覧・詳細ページ
├── globals.css        # グローバルスタイル
├── layout.tsx         # ルートレイアウト
└── page.tsx           # ホームページ
```

## コンテンツの更新方法

各データファイルを編集することでコンテンツを追加・更新できます。

| ファイル | 内容 |
|---|---|
| `src/app/data/works.ts` | Webサイト制作物 |
| `src/app/data/worksApp.ts` | アプリ制作物 |
| `src/app/data/workExperience.ts` | 実務経験 |
| `src/app/data/skills.ts` | スキル |
| `src/app/data/services.ts` | サービス内容 |

## ビルド

```bash
npm run build
npm run start
```
