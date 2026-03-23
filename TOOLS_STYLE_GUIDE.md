# Tools 表記統一ルール

worksApp.ts / works.ts の `tools` フィールドに記載するツール名の統一ルール。

---

## 基本ルール

- 区切りは ` / `（半角スペース + スラッシュ + 半角スペース）
- 正式名称の大文字小文字を使う（公式サイト準拠）
- バージョン番号は書かない（詳細は description に記載する）
- ツール・サービス・ライブラリのみ記載する。技術手法（PWA, JWT自前実装）や Web API（Web Crypto API）は書かない

---

## 記載順序

1. デザインツール（Figma）
2. フレームワーク / ライブラリ（React, Vue.js, PHP）
3. メタフレームワーク / ビルドツール（Next.js, Vite, Laravel, Hono）
4. 言語（TypeScript）
5. CSSフレームワーク（Tailwind CSS）
6. UIライブラリ（DaisyUI, shadcn/ui）
7. 状態管理（zustand）
8. ORM（Drizzle ORM, Prisma）
9. DB / バックエンド（Firebase, Neon, Cloudflare D1, Cloudflare R2）
10. 認証（Supabase Auth, Better Auth）
11. 外部API（Gemini API, Annict API, 楽天API）
12. その他ライブラリ（Howler.js, pdf-lib, Resend）
13. ホスティング / インフラ（Vercel, Cloudflare Workers, Fly.io, Cloud Run, OpenNext）
14. 外部サービス（cron-job.org）

---

## 正式な表記一覧

| カテゴリ | 正式表記 | NG例 |
|---------|---------|------|
| デザイン | `Figma` | figma |
| フレームワーク | `React` | react |
| フレームワーク | `Vue.js` | vue, Vue |
| フレームワーク | `Next.js` | NextJS, next.js, Next.js 15 |
| フレームワーク | `Vite` | vite |
| フレームワーク | `Hono` | hono |
| フレームワーク | `Laravel` | laravel |
| 言語 | `TypeScript` | typescript, TS |
| 言語 | `PHP` | php |
| CSS | `Tailwind CSS` | TailwindCSS, tailwindcss, Tailwind CSS v4 |
| UI | `DaisyUI` | daisyUI, DaisyUI 5, DaisyUI v5 |
| UI | `shadcn/ui` | shadcn&sol;ui, Shadcn |
| 状態管理 | `zustand` | Zustand |
| ORM | `Drizzle ORM` | drizzle |
| ORM | `Prisma` | prisma |
| DB | `Firebase` | firebase |
| DB | `Neon` | neon |
| DB | `Supabase` | supabase（DB利用時） |
| DB | `Cloudflare D1` | D1 |
| ストレージ | `Cloudflare R2` | R2 |
| 認証 | `Supabase Auth` | supabaseAuth, Supabase（認証利用時） |
| 認証 | `Better Auth` | better-auth |
| API | `Gemini API` | GeminiAPI, Gemini |
| API | `Annict API` | annict |
| API | `楽天API` | — |
| ライブラリ | `Howler.js` | Howler, howler |
| ライブラリ | `pdf-lib` | — |
| ライブラリ | `pdfjs-dist` | — |
| ライブラリ | `Resend` | resend |
| ホスティング | `Vercel` | vercel |
| ホスティング | `Cloudflare Workers` | CF Workers |
| ホスティング | `OpenNext` | @opennextjs/cloudflare, opennext |
| ホスティング | `Fly.io` | fly.io |
| ホスティング | `Cloud Run` | cloud run |
| ホスティング | `Docker` | docker |
| ホスティング | `さくらレンタルサーバー` | — |
| 外部サービス | `cron-job.org` | — |

---

## 記載しないもの

| 種別 | 例 | 理由 |
|------|---|------|
| 技術手法 | PWA, JWT自前実装, SSR | ツールではなく手法 |
| ブラウザAPI | Web Crypto API, Canvas API | 標準APIはツールではない |
| バージョン番号 | v4, v5, 15 | description に詳細を書く |
