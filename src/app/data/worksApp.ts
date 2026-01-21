export type WorkApp = {
    id: string;
    title: string;
    category: string;
    introduction: string;
    role: string;
    tools: string;
    period?: {
        task: string;
        duration: string;
    }[];
    description: {
        dt: string;
        dd: string;
    }[];
    github?: string;
    imageMain: string;
};

export const worksApp: WorkApp[] = [
    {
        id: "sakutto-task",
        title: "さくっとタスク",
        category: "WebApp ｜ 自主制作",
        introduction: "カレンダーとタスクリストが一体化したタスク管理アプリ。繰り返しタスクや記念日設定、通知設定の他に、予定表の画像やPDFを読み込みタスク化する機能も備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Neon / supabaseAuth / vercel / GeminiAPI /cron-job.org",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "3日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "12日" }
        ],
        description: [
            { dt: "制作概要", dd: "カレンダーとタスクリストが一体化したタスク管理Webアプリ。日々のタスクを効率的に管理し、指定時刻にメール通知を送信することで、タスクの見逃しを防ぐことを目的として開発した。繰り返しタスクや記念日管理など、実用的な機能を備えている。" },
            { dt: "アプリの特徴", dd: "カレンダー形式でタスクを視覚的に管理でき、日次・週次・月次・年次など柔軟な繰り返し設定に対応。AI（Gemini API）を活用し、予定表の画像やPDFから自動的にイベントを抽出してタスク化する機能を実装。localStorageを使ったキャッシュ機能により、初期表示を高速化し、バックグラウンドで最新データを更新する仕組みを構築した。" },
            { dt: "コーディング", dd: "Next.js（App Router）とTypeScriptを用いてコンポーネント設計を行い、Supabaseで認証、Neon Database（PostgreSQL）でデータ管理を実装。Gemini APIによる画像解析、Resendを使ったメール通知、cron-job.orgによる定期実行など、複数の外部サービスを統合。状態管理とキャッシュ戦略を工夫し、パフォーマンスとユーザー体験の両立を意識した。" },
            { dt: "工夫点", dd: "localStorageキャッシュとバックグラウンド更新を組み合わせることで、初期表示を即座に行いつつ最新データを反映する仕組みを実現。AIによる予定表読み込み機能では、抽出結果の手動編集・追加・削除が可能なUIを用意し、実用性を重視。通知の重複送信を防ぐロジックや、時間入力の補完機能（「900」→「9:00?」）など、細かなUX改善も行った。" },
            {
                dt: "デモURL",
                dd: '<a href="https://sakutto-task.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://sakutto-task.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sakutto-task",
        imageMain: "/assets/img/worksApp_sakutto-task.png"
    },
    {
        id: "ouchi-zaiko-next",
        title: "おうちで在庫くん",
        category: "WebApp ｜ 自主制作",
        introduction: "家庭内の日用品・食材などの在庫を管理するアプリ。在庫の数量管理に加え、数量が少ない商品を自動的に上位表示する機能も備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / / TailwindCSS / TypeScript / Firebase / vercel",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "6日" }
        ],
        description: [
            { dt: "制作概要", dd: "家庭内の日用品・食材などの在庫を管理し、買い忘れや重複購入を防ぐことを目的とした在庫管理Webアプリ。実際の生活シーンでの使用を想定し、スマートフォンでの操作性を重視して設計・実装した。" },
            { dt: "アプリの特徴", dd: "在庫の数量管理に加え、数量が少ない商品を自動的に上位表示することで、今「買うべきもの」が直感的に分かるUIを実現している。また、家族など複数ユーザーで在庫を共有できる仕組みを構築した。" },
            { dt: "コーディング", dd: "Next.js（App Router）とTypeScriptを用いてコンポーネント設計を行い、Firebase AuthenticationとFirestoreを組み合わせて認証・データ管理を実装した。状態管理はContextとカスタムHooksで整理し、保守性を意識した構成を心がけた。" },
            { dt: "工夫点", dd: "実際に運用しながらUIや並び順ロジックを改善し、「数量が少ないものほど上位に表示する」など実用性を高めた。権限管理や共有解除時のエラー対策、スマホ操作時のUX改善など、実務を想定した細かな調整も行った。" },
            {
                dt: "デモURL",
                dd: '<a href="https://ouchi-zaiko-next.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ouchi-zaiko-next.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/ouchi-zaiko-next",
        imageMain: "/assets/img/worksApp_ouchi-zaiko.png"
    },
    {
        id: "loto6-check",
        title: "ロト6速攻チェック",
        category: "WebApp ｜ 自主制作",
        introduction: "ロト6の購入番号と当選番号を照合し、当選状況を瞬時に確認できるアプリ。当選番号は自動的に更新され、目視による当選番号確認のミスを防ぐことができる。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Neon / supabaseAuth / vercel / Railway / cron-job.org",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "4日" }
        ],
        description: [
            { dt: "制作概要", dd: "ロト6の購入番号と当選番号を照合し、当選状況を瞬時に確認できるWebアプリ。公式サイトから最新の当選情報を自動取得してデータベースに格納し、ユーザーが登録した番号との照合結果を期間指定で確認できる機能を実装した。" },
            { dt: "アプリの特徴", dd: "過去のCSVデータを一括インポートできるほか、Puppeteerを使った自動スクレイピングにより毎週2回（火曜・金曜の朝）に最新の当選情報を自動更新する仕組みを構築。フロントエンドとバックエンドをVercelとRailwayに分離し、重い処理でも安定動作する設計にした。" },
            { dt: "コーディング", dd: "Next.js（App Router）とTypeScriptで構築し、Neon（PostgreSQL）で当選データを管理。Supabase Authenticationでユーザー認証を実装した。スクレイピング機能は別プロジェクト（loto6-auto-update）として分離し、cron-job.orgで定期実行。DaisyUIとTailwindCSSでシンプルなUIを実現した。" },
            { dt: "工夫点", dd: "日付のタイムゾーン問題やUI表示の細かな調整など、実際の動作確認を通じて改善を重ねた。データベースのUPSERT処理で重複登録を防ぎ、エラーハンドリングとロギングを充実させて運用時のトラブルを最小化。フロントエンドと自動更新処理を完全に分離することで、それぞれの最適な環境でデプロイできる柔軟性を持たせた。" },
            {
                dt: "デモURL",
                dd: '<a href="https://loto6-check.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://loto6-check.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/loto6-check",
        imageMain: "/assets/img/worksApp_loto6-check.png"
    },
    {
        id: "seiri-renraku-next",
        title: "整理して連絡くん",
        category: "WebApp ｜ 自主制作",
        introduction: "習い事などの連絡内容を、日付順に自動整理して見やすく表示するアプリ。連絡文を貼り付けるだけで、日付情報や種別（試合・練習など）、持ち物などをAIで自動的に解析し、分類してカード表示することができる。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TailwindCSS / TypeScript / Firebase / GeminiAPI / vercel",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "3日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "14日" }
        ],
        description: [
            { dt: "制作概要", dd: "習い事などの連絡内容を、日付順に自動整理して見やすく表示するWebアプリ。保護者間の情報伝達を効率化する目的で開発し、スマートフォンでの実用性を重視して構築した。" },
            { dt: "アプリの特徴", dd: "連絡文を貼り付けるだけで、日付情報や種別（試合・練習など）を自動で解析し、過去・未来に分類してカード表示する。Google Gemini APIを活用し、文脈から適切な情報を抽出する仕組みを構築した。" },
            { dt: "コーディング", dd: "Next.js（App Router）とTypeScriptで設計し、Firebase Authentication（匿名ログイン）とCloud Functionsを導入。Gemini APIの呼び出しをfetch経由で行い、状態管理にはzustandを採用して構成を整理した。" },
            { dt: "工夫点", dd: "Gemini APIとの連携をCloud Functionsにより安全に行い、非同期処理やエラーハンドリングも丁寧に設計。また、TailwindCSSとDaisyUIを使って、スマホでの視認性・操作性を意識したUIを実装した。" },
            {
                dt: "デモURL",
                dd: '<a href="https://seiri-renraku-next.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://seiri-renraku-next.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/seiri-renraku-next",
        imageMain: "/assets/img/worksApp_seiri-renraku-next.png"
    },
    {
        id: "recipe-search-next",
        title: "簡単レシピ検索",
        category: "WebApp ｜ 自主制作",
        introduction: "食材を入力すると、すぐに作れるレシピを探すことができるアプリ。気に入ったレシピはお気に入り登録していつでも見返すことができる機能を備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TailwindCSS / TypeScript / supabase / 楽天API / vercel",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "10日" }
        ],
        description: [
            { dt: "制作概要", dd: "冷蔵庫にある食材から、すぐに作れるレシピを探したいという日常的な課題を解決するために制作したレシピ検索Webアプリ。楽天レシピAPIを活用し、食材名を入力するだけで関連レシピを一覧表示できる仕組みを構築した。" },
            { dt: "アプリの特徴", dd: "食材名の表記ゆれ（カタカナ・ひらがな）を吸収する検索ロジックを実装し、ユーザーが直感的に検索できるUIを実現している。また、ログイン機能とお気に入り機能を備え、ユーザーごとにレシピを保存・管理できる点が特徴。" },
            { dt: "コーディング", dd: "Next.js（App Router）とTypeScriptを用いて構築し、API通信はServer Actions/Route Handlersで整理した。認証にはNextAuthを採用し、Supabase（PostgreSQL）とPrismaを組み合わせてユーザー管理・お気に入りデータの永続化を実装している。" },
            { dt: "工夫点", dd: "ローカル開発と本番環境の差異やDB移行を想定し、環境変数管理やORM設計を丁寧に行った。お気に入りの重複登録防止やユーザー単位でのデータ分離など、実務を意識した仕様を段階的に追加しながら完成度を高めた。" },
            {
                dt: "デモURL",
                dd: '<a href="https://recipe-search-next.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://recipe-search-next.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/recipe-search-next",
        imageMain: "/assets/img/worksApp_recipe-search-next.png"
    },
    {
        id: "genki-meigen-app",
        title: "元気がでる偉人の言葉アプリ",
        category: "WebApp ｜ 自主制作",
        introduction: "偉人や著名人の名言をランダムに表示するアプリ。気に入った言葉はお気に入り登録していつでも見返すことができる機能を備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / Vue.js / TypeScript / firebase / さくらレンタルサーバー",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "5日" }
        ],
        description: [
            { dt: "制作概要", dd: "日常の中で前向きな気持ちになれることを目的に、偉人や著名人の名言をランダムに表示するWebアプリを制作した。シンプルな操作で直感的に使えることを重視し、ログイン機能とお気に入り保存機能を備えた実用的なアプリとして設計している。" },
            { dt: "アプリの特徴", dd: "「降臨」ボタンを押すことで名言がランダムに表示され、気に入った言葉はお気に入りとして保存できる。Firebase Authentication によるユーザー認証を行い、ユーザーごとにお気に入りリストを分離して管理する仕組みを実装した。" },
            { dt: "コーディング", dd: "Vue.js（Composition API）とTypeScriptを用いてコンポーネント設計を行い、Vue Router による画面遷移とルートガードで認証制御を実装した。Firestore を用いたお気に入りデータはリアルタイム同期（onSnapshot）に対応し、状態管理をシンプルに保つ構成を意識した。" },
            { dt: "工夫点", dd: "名言表示時にフェードインアニメーションを加えることで、厳かで印象に残る演出を行った。また、サブディレクトリ配信（さくらレンタルサーバー）に対応するため、Vite の base 設定や画像パスの扱い、SPA用 .htaccess の設定など、本番公開を意識した調整を行っている。" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/app/genki-meigen-app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/app/genki-meigen-app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/genki-meigen-app",
        imageMain: "/assets/img/worksApp_genki-meigen-app.png"
    },
    {
        id: "ouchi-zaiko-larabel",
        title: "おうちで在庫くん",
        category: "WebApp ｜ 自主制作",
        introduction: "家庭内の日用品・食材などの在庫を管理するアプリ。在庫の数量管理に加え、数量が少ない商品を自動的に上位表示する機能も備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / PHP / Laravel / supabase / Fly.io / docker",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "10日" }
        ],
        description: [
            { dt: "制作概要", dd: "家庭内の日用品・食材などの在庫を管理するWebアプリ。生活の中での使いやすさを重視し、スマホからの操作性を意識した設計で開発。主にLaravelを用いたサーバーサイド実装を行った。" },
            { dt: "アプリの特徴", dd: "ジャンルごとに在庫を整理し、数量管理や次回購入リストなどの機能を実装。タブ表示やアラート制御など、ユーザーの使いやすさを意識したUI設計を反映。共有機能を通じて複数人での利用にも対応。" },
            { dt: "コーディング", dd: "Laravel（MVC構成）でユーザー認証、ジャンル・アイテムCRUD、購入リスト管理などを実装。BladeテンプレートとAlpine.jsでインタラクティブなUIを構築し、状態保持やタブ遷移などにも対応した。" },
            { dt: "工夫点", dd: "ジャンル間でのタブ状態をlocalStorageで保持することで、操作後もタブ位置が維持されるUXを実現。アラート表示の出し分けや共有ユーザー視点での表示変更など、細かな仕様調整を丁寧に対応した。" },
            {
                dt: "デモURL",
                dd: '<a href="https://ouchi-inventory.fly.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ouchi-inventory.fly.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/ouchi-inventory",
        imageMain: "/assets/img/worksApp_ouchi-zaiko-php.png"
    },
    {
        id: "meigen-app-next",
        title: "元気がでる偉人の言葉アプリ",
        category: "WebApp ｜ 自主制作",
        introduction: "偉人や著名人の名言をランダムに表示するアプリ。気に入った言葉はお気に入り登録していつでも見返すことができる機能を備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / firebase / vercel",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "7日" }
        ],
        description: [
            { dt: "制作概要", dd: "偉人の名言をランダム表示し、気に入った言葉をお気に入りとして保存できるWebアプリ。日常の中で前向きな言葉に触れられる体験を目的に、シンプルで直感的なUIを意識して設計・実装した。" },
            { dt: "アプリの特徴", dd: "名言をランダムで表示する機能に加え、Firebase Authentication を用いたユーザー認証を実装し、ログインユーザーごとにお気に入り名言を管理できる。シンプルな操作で名言の追加・削除が可能。" },
            { dt: "コーディング", dd: "Next.js（App Router）とTypeScriptを用いて実装し、Firebase AuthenticationとFirestoreによる認証・データ管理を構築。カスタムHooksや状態管理を整理し、UIコンポーネントの再利用性と保守性を意識した設計を行った。" },
            { dt: "工夫点", dd: "過去にVue.jsで作成した既存アプリをNext.jsへ移行し、レイアウトやアニメーションを忠実に再現した。Firestoreのセキュリティルール設計や未ログイン時のリダイレクト制御など、実運用を想定した認証・保護設計にも注力した。" },
            {
                dt: "デモURL",
                dd: '<a href="https://meigen-app-next.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://meigen-app-next.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/meigen-app-next",
        imageMain: "/assets/img/worksApp_meigen-app-next.png"
    },
];

// ↓テンプレ
// {
//         id: "★★★",
//         title: "★★★",
//         category: "WebApp ｜ 自主制作",
//         introduction: "★★★",
//         role: "Direction / Design / Coding",
//         tools: "★Figma / React / Next.js / TypeScript / Firebase",
//         period: [
//             { task: "企画・ワイヤーフレーム", duration: "★日" },
//             { task: "デザイン", duration: "★日" },
//             { task: "コーディング", duration: "★日" }
//         ],
//         description: [
//             { dt: "制作概要", dd: "★★★" },
//             { dt: "アプリの特徴", dd: "★★★" },
//             { dt: "コーディング", dd: "★★★" },
//             { dt: "工夫点", dd: "★★★" },
//             {
//                 dt: "デモURL",
//                 dd: '<a href="★★★" target="_blank" rel="noopener noreferrer" class="link-hover">★★★</a>'
//             }
//         ],
//         github: "★★★",
//         imageMain: "/assets/img/★★★"
//     },
