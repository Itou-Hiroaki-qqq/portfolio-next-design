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
        id: "hyakunin-goromaru",
        title: "百人一首-ゴロでマル覚え-",
        category: "WebApp ｜ 自主制作",
        introduction: "百人一首を語呂合わせで覚える学習アプリ。上の句・下の句の学習と、4首・8首・20首の範囲テスト、まぎらわしい句に特化した問題で段階的に習得できる。音声再生とクリア状況の保存で、継続しやすい構成にしている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Neon / Supabase / Vercel / Cloudflare R2 / Howler",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "10日" }
        ],
        description: [
            {
                dt: "制作概要",
                dd: "百人一首を語呂合わせで効率的に覚えるためのWebアプリ。上の句（ひらがな）から下の句を選ぶ形式のテストと、まぎらわしい句に絞った練習で、段階的に暗記できるようにした。認証ユーザーはクリア状況を保存でき、学習リストで進捗を星マークで確認できる。"
            },
            {
                dt: "アプリの特徴",
                dd: "1～4首・5～8首など4首単位のブロックで「学習」「4首でテスト」「前回も入れて8首でテスト」を提供。20首ごとに「1～20首テスト」「21～40首テスト」などのまとめテストで習熟度を確認できる。間違えやすい問題では「その1」「その2」形式で上の句・下の句のまぎらわしい組み合わせを重点練習。語呂解説と音声（R2配信）で耳と目から覚えられる。Supabase認証とNeon DBでクリア情報を保存し、未認証でも学習・テストは利用可能。"
            },
            {
                dt: "コーディング",
                dd: "Next.js（App Router）と TypeScript で実装。句データは Neon（PostgreSQL）、認証は Supabase、音声ファイルは Cloudflare R2 で配信し、Howler で再生。API ルートで poems 取得・test-clears の取得・保存を実装し、Neon 障害時は 1～4 首のみ静的 JSON でフォールバック。Jest で lib の純粋関数と API ルートの単体テストを追加。語呂再生は非同期のため、次の問題へ進む際に前問の再生が続かないよう ref で制御している。"
            },
            {
                dt: "工夫点",
                dd: "テスト終了や画面遷移時に、読み込み中の語呂音声が後から流れないよう、playOnce で作成した Howl を Set で保持し stopAll 時に stop と unload で確実に止めるようにした。4首・8首・20首のクリア種別を testType で正しく保存し、学習リストの星表示（4首／8首／20首ブロック、間違えやすい問題のまとめテスト、両方クリア時の「間違えやすい問題」星）が一貫するよう判定を整理。"
            },
            {
                dt: "デモURL",
                dd: '<a href="https://hyakunin-goromaru.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://hyakunin-goromaru.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/hyakunin-goromaru",
        imageMain: "/assets/img/worksApp_hyakunin-goromaru.png"
    },
    {
        id: "sakutto-task",
        title: "さくっとタスク",
        category: "WebApp ｜ 自主制作",
        introduction: "カレンダーとタスクリストが一体化したタスク管理アプリ。繰り返しタスクや記念日設定、通知設定の他に、予定表の画像やPDFを読み込みタスク化する機能も備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Neon / supabaseAuth / vercel / GeminiAPI / cron-job.org",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "3日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "12日" }
        ],
        description: [
            { dt: "制作概要", dd: "カレンダーとタスクリストが一体化したタスク管理Webアプリ。日々のタスクを効率的に管理し、指定時刻にメール通知を送信することで、タスクの見逃しを防ぐことを目的として開発した。繰り返しタスクや記念日管理など、実用的な機能を備えている。" },
            { dt: "アプリの特徴", dd: "カレンダー形式でタスクを視覚的に管理でき、日次・週次・月次・年次など柔軟な繰り返し設定に対応。繰り返し予定の編集では「この予定のみ変更」と「これ以降のすべての繰り返しも変更」のスコープを選択可能。AI（Gemini API）で予定表の画像・PDFからイベントを抽出してタスク化する機能を実装。表示は React State を唯一の真実とし、localStorage は初回表示のヒントのみに使用。タスク完了は Optimistic 更新で即反映し、保存時は即座に一覧へ戻り、DB 保存はバックグラウンドで実行するよう設計している。" },
            { dt: "コーディング", dd: "Next.js（App Router）と TypeScript でコンポーネント設計を行い、Supabase で認証、Neon Database（PostgreSQL）でデータ管理を実装。Gemini API による画像解析、Resend を使ったメール通知、cron-job.org による定期実行など、複数の外部サービスを統合。タスク編集画面では認証とタスク取得を並列化し、認証後はフォームの骨組みを即表示。API 結果は差分マージせず丸ごと setState で差し替え、状態の一貫性を保つようにした。" },
            { dt: "工夫点", dd: "localStorage は初回表示・日付切り替え時の即時表示にのみ使い、表示更新時には参照しない設計にし、React State とキャッシュの二重管理を避けた。タスク追加・編集後の戻り先では、sessionStorage で「表示用の上書きリスト」を渡し、一覧に戻った直後から追加・編集内容が表示され続けるようにした（先行して返る API レスポンスで上書きされないよう制御）。完了チェックは Optimistic に State を更新し、失敗時のみロールバック。カレンダーの日付クリックと URL 同期の競合を防ぎ、別の日を選んでも意図した日が表示されるようにした。予定表読み込みでは抽出結果の手動編集・追加・削除が可能な UI と、時間入力補完（「900」→「9:00?」）など細かな UX 改善も行った。" },
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
        "id": "loto6-check",
        "title": "ロト6速攻チェック",
        "category": "WebApp ｜ 自主制作",
        "introduction": "ロト6の購入番号と当選番号を照合し、当選状況を瞬時に確認できるアプリ。当選番号は自動的に更新され、目視による当選番号確認のミスを防ぐことができる。",
        "role": "Direction / Design / Coding",
        "tools": "Figma / React / Next.js / TypeScript / Neon / supabaseAuth / vercel / Cloud Run / cron-job.org",
        "period": [
            { "task": "企画・ワイヤーフレーム", "duration": "1日" },
            { "task": "デザイン", "duration": "1日" },
            { "task": "コーディング", "duration": "4日" }
        ],
        "description": [
            { "dt": "制作概要", "dd": "ロト6の購入番号と当選番号を照合し、当選状況を瞬時に確認できるWebアプリ。公式サイトから最新の当選情報を自動取得してデータベースに格納し、ユーザーが登録した番号との照合結果を期間指定で確認できる機能を実装した。" },
            { "dt": "アプリの特徴", "dd": "過去のCSVデータを一括インポートできるほか、Puppeteerを使った自動スクレイピングにより毎週2回（火曜・金曜の朝）に最新の当選情報を自動更新する仕組みを構築。フロントエンドとバックエンドをVercelとCloud Runに分離し、重い処理でも安定動作する設計にした。" },
            { "dt": "コーディング", "dd": "Next.js（App Router）とTypeScriptで構築し、Neon（PostgreSQL）で当選データを管理。Supabase Authenticationでユーザー認証を実装した。スクレイピング機能は別プロジェクト（loto6-auto-update）として分離し、cron-job.orgで定期実行。DaisyUIとTailwindCSSでシンプルなUIを実現した。" },
            { "dt": "工夫点", "dd": "日付のタイムゾーン問題やUI表示の細かな調整など、実際の動作確認を通じて改善を重ねた。データベースのUPSERT処理で重複登録を防ぎ、エラーハンドリングとロギングを充実させて運用時のトラブルを最小化。フロントエンドと自動更新処理を完全に分離することで、それぞれの最適な環境でデプロイできる柔軟性を持たせた。" },
            {
                "dt": "デモURL",
                "dd": '<a href="https://loto6-check.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://loto6-check.vercel.app/</a>'
            }
        ],
        "github": "https://github.com/Itou-Hiroaki-qqq/loto6-check",
        "imageMain": "/assets/img/worksApp_loto6-check.png"
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
        id: "sakutto-anime-search",
        title: "さくっとアニメ検索→録画表印刷",
        category: "WebApp ｜ 自主制作",
        introduction: "Annict APIで指定シーズンのアニメ放映一覧を取得し、放映局で絞り込みながら作品を選び、選んだものだけをまとめた録画表を印刷できるWebアプリ。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Tailwind CSS / DaisyUI / Annict API / Vercel",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "5日" }
        ],
        description: [
            {
                dt: "制作概要",
                dd: "指定した西暦・シーズン（春4〜6月／夏7〜9月／秋10〜12月／冬1〜3月）のアニメ放映一覧をAnnict APIで取得し、一覧表示・放映局での絞り込み・作品選択を経て、選択分だけの録画表を専用ページで表示・印刷できるWebアプリ。企画・デザイン・実装まで一貫して担当した。"
            },
            {
                dt: "アプリの特徴",
                dd: "トップページで年とシーズンを選んで検索すると、放映開始日時順の一覧が表示される。放映局は「全国ネット＋TOKYO MX」「地方局」「その他放送」に自動分類され、チェックボックスで絞り込み可能。一覧から印刷したい作品を選択し「録画表の作成」で録画表ページへ遷移。録画表ページでは選択作品のみを印刷向けレイアウトで表示し、ブラウザの印刷機能でそのまま印刷できる。"
            },
            {
                dt: "コーディング",
                dd: "Next.js（App Router）とTypeScriptで実装。AnnictのGraphQL APIを利用する処理は src/lib/annict.ts に集約し、シーズン定義・型・ページネーション付きの作品取得を一元管理。放映局の分類は src/lib/channelCategories.ts でキーワードベースのルールとして定義。GET /api/season で年・シーズンを受け取りサーバー側でAPIを呼び、クライアントはそのJSONを表示に利用。スタイルはTailwind CSSとDaisyUIで統一した。"
            },
            {
                dt: "工夫点",
                dd: "録画表に載せる作品はトップページで選択し、sessionStorageに保存してから録画表ページへ遷移する設計にし、サーバーやDBを持たずに「選択結果の受け渡し」を実現。親ディレクトリに別プロジェクトのpackage.jsonがある環境でも正しくビルドできるよう、next.config.jsでwebpackのcontextとresolve.modulesをプロジェクトルートに固定。シーズンはAPI用スラッグ（spring/summer/autumn/winter）と表示ラベル（4〜6月など）を分離し、一覧の日時は日本時間でフォーマットして表示している。"
            },
            {
                dt: "デモURL",
                dd: '<a href="https://sakutto-anime-search.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://sakutto-anime-search.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sakutto-anime-search",
        imageMain: "/assets/img/worksApp_sakutto-anime-search.png"
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
