# ITO HIROAKI Portfolio

伊藤寛晃（Frontend Engineer）のポートフォリオサイトです。
Web制作物・Webアプリ制作物・実務経験・スキル・問い合わせフォームを1ページに集約した、Next.js App Router製のシングルページポートフォリオです。

---

## 技術スタック

| カテゴリ | 使用技術 |
|---|---|
| フレームワーク | Next.js 16.1 (App Router) |
| ランタイム / 言語 | React 19.2 / TypeScript 5 |
| スタイリング | Tailwind CSS v4 + DaisyUI 5 + `globals.css` |
| フォント | Google Fonts (Inter) via `next/font` |
| データベース | Firebase Firestore（問い合わせ内容の保存） |
| メール送信 | Resend（管理者通知 + ユーザー自動返信） |
| 画像 | `next/image` + `public/assets/img` |
| デプロイ | Vercel |

---

## 主なセクション（`/`）

トップページで以下のセクションを縦積み表示しています。

| セクション | 役割 |
|---|---|
| Hero | 名前＋キービジュアル（PC/SP 切替） |
| Services | 提供可能なサービスの紹介 |
| Skills | カテゴリ別のスキル一覧 |
| Works - App | Webアプリ制作物（最大9件、詳細ページへのリンクあり） |
| Works - Website | Web制作物（コーディング実績） |
| Work Experience | 実務経験一覧 |
| About | プロフィール |
| Contact | 問い合わせフォーム（Firestore 保存 + Resend 自動返信） |

### 個別ページ

| パス | 内容 |
|---|---|
| `/worksApp` | Webアプリ制作物の一覧ページ |
| `/worksApp/[id]` | Webアプリ制作物の詳細ページ |
| `/works/[id]` | Web制作物の詳細ページ |
| `/work-experience` | 実務経験の一覧ページ |
| `POST /api/contact` | Resend によるメール送信 API |

---

## ディレクトリ構成

```
src/app/
├── api/
│   └── contact/route.ts     # Resend でメール送信する API Route
├── components/              # UI コンポーネント
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── ServiceCard.tsx
│   ├── SkillCard.tsx
│   ├── WorksList.tsx
│   ├── WorksAppList.tsx
│   ├── WorkExperienceList.tsx
│   └── ContactForm.tsx
├── data/                    # コンテンツデータ（TypeScript 配列）
│   ├── services.ts
│   ├── skills.ts
│   ├── works.ts
│   ├── worksApp.ts
│   └── workExperience.ts
├── firebase/
│   └── firebase.ts          # Firebase 初期化
├── work-experience/page.tsx
├── works/[id]/              # Web制作物 詳細ページ
├── worksApp/                # Webアプリ一覧・詳細ページ
├── globals.css              # グローバルスタイル
├── layout.tsx               # ルートレイアウト（Header/Footer 配置）
└── page.tsx                 # トップページ
```

---

## セットアップ

### 1. パッケージインストール

```bash
npm install
```

### 2. 環境変数の設定

プロジェクトルートに `.env.local` を作成し、以下を設定してください。

```
# Firebase（Firestore への問い合わせ保存に使用）
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Resend（問い合わせメール送信に使用）
RESEND_API_KEY=
FROM_EMAIL=          # 例: onboarding@resend.dev
ADMIN_EMAIL=         # 管理者（自分）の受信メールアドレス
```

### 3. 開発サーバー起動

```bash
npm run dev
```

`http://localhost:3000` にアクセスして確認します。

### 4. 本番ビルド

```bash
npm run build
npm run start
```

---

## デプロイ

本サイトは**Vercel**にデプロイしています。

- `main`ブランチへのプッシュで自動デプロイ（Vercelのデフォルト挙動）
- 環境変数（Firebase一式・`RESEND_API_KEY` / `FROM_EMAIL` / `ADMIN_EMAIL`）は、Vercelのプロジェクト設定 **Settings → Environment Variables** に登録しておく必要があります
- `.env.local`はローカル専用のためリポジトリにはコミットしません

---

## 問い合わせフロー

1. ユーザーが `ContactForm` を送信
2. クライアント側で **Firestore（`contacts` コレクション）** に内容を保存
3. 同時に`POST /api/contact`を呼び出し、**Resend**で2通送信
   - 管理者宛：問い合わせ内容の通知
   - ユーザー宛：自動返信
4. いずれかの段階で失敗した場合はフォーム上に状態別のメッセージを表示

---

## コンテンツ更新

掲載内容は `src/app/data/` 配下の TypeScript ファイルを編集するだけで更新できます。

| ファイル | 内容 |
|---|---|
| `data/services.ts` | Services セクションの項目 |
| `data/skills.ts` | Skills セクションのカテゴリと項目 |
| `data/works.ts` | Web制作物（コーディング実績） |
| `data/worksApp.ts` | Webアプリ制作物 |
| `data/workExperience.ts` | 実務経験 |

画像は `public/assets/img/` に配置し、データファイル側からパス指定で参照します。

---

## その他

- 検索エンジンには非公開です（`layout.tsx`で`robots: { index: false, follow: false }`を指定）。
- スタイルは Tailwind v4 / DaisyUI と `globals.css` を併用しています。
- 本リポジトリは個人ポートフォリオ用のため、コンテンツ・画像の再利用はご遠慮ください。

---

📖 **今何をしたか（初心者向け解説）**

**このファイル／作業は何？**
このプロジェクトのREADME（使い方説明書）です。GitHubやエディターでリポジトリを開いた人が最初に読むドキュメントです。

**何をしたか？**
プロジェクト全体（`package.json`、`src/app/`配下のページ・コンポーネント・データ、APIルート、レイアウト）を確認したうえで、実際の構成に合わせてREADMEを丸ごと書き直しました。

**なぜ必要か？**
以前のREADMEは構成が簡素で、実際のページ（`/worksApp`や`/work-experience`など）や問い合わせフォームの動き（Firestore保存 + Resendメール送信の2段構え）が伝わりませんでした。後から見返した時や他の人が読んだ時に、全体像を正しく掴めるように整理する必要がありました。

**次に何が起きるか？**
このまま使えます。今後ページや機能を追加・変更した際は、「主なセクション」「ディレクトリ構成」「コンテンツ更新」の表を更新すれば常に最新の状態を保てます。
