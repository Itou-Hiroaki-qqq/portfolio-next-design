export type SkillItem = {
    id: string;
    name: string;
    img: string;
    link?: string;
    text: string;
};

export type SkillGroup = {
    id: string;
    category: string;
    items: SkillItem[];
};

export const skills: SkillGroup[] = [
    {
        id: "lang",
        category: "開発言語",
        items: [
            {
                id: "html",
                name: "HTML",
                img: "/assets/img/skills_01_html.png",
                link: "https://icons8.com/icon/20909/html-5",
                text: "BEMによるクラス管理、セマンティックでアクセシビリティを考慮したマークアップを意識したコーディングが可能。"
            },
            {
                id: "css",
                name: "CSS",
                img: "/assets/img/skills_02_css.png",
                link: "https://icons8.com/icon/4d9YPiN04osD/css",
                text: "Flexbox / Grid によるレスポンシブ設計、CSS変数やアニメーションも対応可能。"
            },
            {
                id: "js",
                name: "JavaScript",
                img: "/assets/img/skills_03_JavaScript.png",
                link: "https://icons8.com/icon/PXTY4q2Sq2lG/javascript",
                text: "jQueryに依存せずにドロワー、モーダルウィンドウ、アコーディオン、タブメニューなどのUI実装が可能。"
            },
            {
                id: "tailwind",
                name: "TailwindCSS / DaisyUI",
                img: "/assets/img/skills_TailwindCSS.png",
                link: "https://icons8.com/icon/x7XMNGh2vdqA/tailwind-css",
                text: "ユーティリティクラスによる効率的なスタイル設計が可能。コンポーネント構築をDaisyUIで行い、素早いUI作成に対応可能。"
            },
            {
                id: "ts",
                name: "TypeScript",
                img: "/assets/img/skills_typescript.png",
                link: "https://icons8.com/icon/wpZmKzk11AzJ/typescript",
                text: "型定義によりバグを事前に防ぎながら、安全なコードを書くための基礎を習得。React/Next.jsと組み合わせた開発を経験。"
            },
            {
                id: "python",
                name: "Python",
                img: "/assets/img/skills_Python.png",
                link: "https://icons8.com/icon/l75OEUJkPAk4/python",
                text: "日常の定型業務を自動化できるレベルの技術。スクリプトによるファイル操作やデータ処理、簡易ツールの作成が可能。"
            }
        ]
    },
    {
        id: "library",
        category: "ライブラリー",
        items: [
            {
                id: "jquery",
                name: "jQuery",
                img: "/assets/img/skills_04_jQuery.png",
                link: "https://icons8.com/icon/HKNzD81eiiSc/jquery",
                text: "Webサイトでよく見る各種UI実装が可能。"
            },
            {
                id: "swiper",
                name: "Swiper.js",
                img: "/assets/img/skills_05_swiper.png",
                text: "レスポンシブ対応のスライダー実装が可能。"
            },
            {
                id: "gsap",
                name: "GSAP",
                img: "/assets/img/skills_06_gsap.png",
                text: "アニメーションUIの実装が可能。"
            }
        ]
    },
    {
        id: "framework",
        category: "フレームワーク／CMS",
        items: [
            {
                id: "react",
                name: "React / Next.js",
                img: "/assets/img/skills_07_react.png",
                link: "https://icons8.com/icon/asWSSTBrDlTW/react",
                text: "Firebase / Supabase のデータ管理や認証、楽天API・GeminiAPI との連携、在庫管理アプリ・検索アプリなど実際に動くアプリの構築、Vercel へのデプロイなどが可能"
            },
            {
                id: "vue",
                name: "Vue.js / Nuxt.js",
                img: "/assets/img/skills_08_vue.png",
                link: "https://icons8.com/icon/eETV3RNHVrWA/vuejs",
                text: "Firebase（Firestore / Authentication）を使ったデータ管理、楽天API・GeminiAPIの外部連携、お気に入り機能付きアプリやレシピ検索アプリなど、実用レベルのアプリを構築可能。"
            },
            {
                id: "laravel",
                name: "PHP / Laravel",
                img: "/assets/img/skills_PHP.png",
                link: "https://icons8.com/icon/plPz67QUdeWA/php",
                text: "Laravelを用いたCRUD機能の実装、ルーティング、認証、バリデーションの基本操作が可能。Supabaseと連携した在庫管理アプリを構築し、デプロイまで経験"
            },
            {
                id: "wp",
                name: "WordPress",
                img: "/assets/img/skills_09_WordPress.png",
                link: "https://icons8.com/icon/v9uZbuVoWleB/wordpress",
                text: "クラシックテーマによる自由なデザインの構築、サーバーアップロード、カスタム投稿タイプ・カスタムフィールドの実装が可能。"
            },
            {
                id: "firebase",
                name: "Firebase",
                img: "/assets/img/skills_firebase.png",
                link: "https://icons8.com/icon/87330/google-firebase-console",
                text: "Firestoreを用いたデータ管理、Authenticationによるユーザー認証、ストレージ利用など、Web アプリ構築に必要な基本機能を扱える。"
            },
            {
                id: "supabase",
                name: "Supabase",
                img: "/assets/img/skills_supabase.png",
                link: "https://icons8.com/icon/sH0rW2TvYdr9/supabase",
                text: "PostgreSQLベースのデータベース操作、API自動生成、認証機能の利用が可能。Next.jsとの連携によるアプリ開発を経験。"
            },
            {
                id: "cloudflare",
                name: "Cloudflare",
                img: "/assets/img/skills_cloudflare.png",
                link: "https://icons8.com/icon/fUGx53gD9Jof/cloudflare",
                text: "Workers によるサーバーレス実行環境、D1（SQLiteベースDB）でのデータ管理、R2 での画像・音声ファイルの保存・配信が可能。OpenNext を用いた Next.js アプリの Cloudflare へのデプロイも経験。"
            },
        ]
    },
    {
        id: "tools",
        category: "ツール",
        items: [
            {
                id: "vscode",
                name: "Visual Studio Code",
                img: "/assets/img/skills_10_vscode.png",
                link: "https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019",
                text: "エメットによる効率的コーディング、拡張機能活用、Git連携が可能。"
            },
            {
                id: "cursor",
                name: "Cursor",
                img: "/assets/img/skills_cursol.png",
                link: "https://icons8.com/icon/Kwms9QBiZhG2/cursor-ai",
                text: "コード補完やチャットによるコード生成・リファクタリングを活用し、開発スピードの向上に利用。"
            },
            {
                id: "claude-code",
                name: "Claude Code",
                img: "/assets/img/skills_claude.png",
                link: "https://icons8.com/icon/zQjzFjPpT2Ek/claude-ai",
                text: "要件定義・計画作成からコード実装・レビュー・修正まで、開発の全工程で活用。CLAUDE.mdによるプロジェクト固有のルール管理、Skills・Agent・Memory・Hookなどの機能を組み合わせた効率的な運用が可能。"
            },
            {
                id: "docker",
                name: "Docker",
                img: "/assets/img/skills_docker.png",
                link: "https://icons8.com/icon/cdYUlRaag9G9/docker",
                text: "コンテナ環境の構築、Dockerfile/docker-composeの基本的な操作が可能。実務でもローカル開発環境の構築に使用。"
            },
            {
                id: "figma",
                name: "Figma",
                img: "/assets/img/skills_11_figma.png",
                link: "https://icons8.com/icon/P5ROoX4rxKSE/figma",
                text: "デザインカンプの作成・確認が可能。"
            },
            {
                id: "xd",
                name: "Adobe XD",
                img: "/assets/img/skills_12_XD.png",
                link: "https://icons8.com/icon/4VVL78edhbW9/adobe-xd",
                text: "デザインカンプの確認が可能。"
            },
            {
                id: "git",
                name: "Git / GitHub",
                img: "/assets/img/skills_13_GitHub.png",
                link: "https://icons8.com/icon/3tC9EQumUAuq/github",
                text: "Gitを用いた基本的なバージョン管理（コミット、ブランチ作成、マージなど）が可能。GitHubを利用したコード共有やプルリクエストの作成・レビューの流れを理解している。"
            },
            {
                id: "ps",
                name: "Photoshop",
                img: "/assets/img/skills_14_photoshop.png",
                link: "https://icons8.com/icon/13677/adobe-photoshop",
                text: "WebデザインやLP制作に必要な基本操作、デザインカンプの確認が可能。"
            },
            {
                id: "ai",
                name: "Illustrator",
                img: "/assets/img/skills_15_illustrator.png",
                link: "https://icons8.com/icon/13631/adobe-illustrator",
                text: "WebデザインやLP制作に必要な基本操作が可能。"
            },
            {
                id: "slack",
                name: "Slack",
                img: "/assets/img/skills_16_slack.png",
                link: "https://icons8.com/icon/OXVeOEj6qZqX/slack",
                text: "チームコミュニケーションでの使用経験あり。"
            }
        ]
    },
    {
        id: "others",
        category: "その他のスキル",
        items: [
            {
                id: "writing",
                name: "Webライティング",
                img: "/assets/img/skills_17_WebWriting.png",
                link: "https://icons8.com/icon/8172/pen",
                text: "Writing Hacks卒業。<br>検索上位を獲得するための記事構成、タイトル、リード文、文章表現、文章展開、画像選定、SEO対策が可能。練習で運営したブログでは15記事中12記事（80％）で上位表示を達成。"
            }
        ]
    }
];
