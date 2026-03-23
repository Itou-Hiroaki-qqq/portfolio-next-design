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
        id: "loto6-check-cloudflare",
        title: "ロト6チェック(Cloudflare版)",
        category: "WebApp ｜ 自主制作",
        introduction: "ロト6の購入番号を登録しておくと、当選番号と自動で照合して結果を表示するWebアプリ。当選番号は外部サービス経由で定期的に自動取得され、常に最新の状態が保たれる。PWA対応でスマホのホーム画面からも利用可能。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Cloudflare Workers / Cloudflare D1 / OpenNext / daisyUI / cron-job.org",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "4日" }
        ],
        description: [
            { dt: "制作概要", dd: "ロト6の購入番号を登録し、当選番号との照合結果（1等〜5等・はずれ）を自動判定するWebアプリ。当選番号は別サービス（Cloud Run + Puppeteer）が定期取得し、APIでCloudflare D1に同期する仕組みにより、ユーザーは常に最新の抽選結果を確認できる。期間を指定しての過去データ検索にも対応している。" },
            { dt: "アプリの特徴", dd: "ユーザーごとに複数の購入番号を登録でき、抽選日ごとにすべての番号の当選判定を一括表示する。一致した等級に応じてバッジの色やアニメーションが変わる視覚的な結果表示を実装。当選番号の自動取得は cron-job.org → Cloud Run → Cloudflare D1 の連携で月・木の抽選後に自動実行される。PWA対応により、スマホのホーム画面に追加してネイティブアプリのように利用できる。" },
            { dt: "コーディング", dd: "Next.js 15（App Router）と TypeScript で構築し、OpenNext を使って Cloudflare Workers 上にデプロイ。データベースには Cloudflare D1（SQLite）を採用し、配列データはJSON文字列として保存。認証は Web Crypto API を使った自前のJWT実装（PBKDF2によるパスワードハッシュ + HMAC-SHA256による署名）で、外部ライブラリに依存しない設計とした。UIは Tailwind CSS v4 + daisyUI 5 でレスポンシブに構築している。" },
            { dt: "工夫点", dd: "Cloudflare Workers では Node.js のネイティブモジュールが使えないため、JWT認証やパスワードハッシュを Web Crypto API のみで自前実装した。当選番号の自動取得では、みずほ銀行のAkamai WAFがCloudflare WorkersのIPを拒否する問題に直面し、別サービス（Cloud Run + Puppeteer）経由でスクレイピングしたデータをAPI経由でD1に同期する二段構成で解決した。また、環境変数の取得に process.env が使えないCloudflare Workers固有の制約にも対応し、getCloudflareContext() 経由でバインディングを取得する設計とした。" },
            {
                dt: "デモURL",
                dd: '<a href="https://loto6-check.chiteijin315.workers.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://loto6-check.chiteijin315.workers.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/loto6-check-cloudflare",
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
        id: "ai-fukushu",
        title: "AIで復習くん",
        category: "WebApp ｜ 自主制作",
        introduction: "教科書やドリルの写真をAIが解析し、その内容に基づいた問題を出題・採点・解説してくれる復習アプリ。小学1年〜中学3年の主要5教科に対応し、学習履歴からテスト対策問題を生成する機能も備えている。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Vite / TypeScript / Hono / Cloudflare Workers / Cloudflare D1 / Cloudflare R2 / Drizzle ORM / Tailwind CSS v4 / shadcn&sol;ui / zustand / GeminiAPI",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "3日" },
            { task: "デザイン", duration: "2日" },
            { task: "コーディング", duration: "9日" }
        ],
        description: [
            { dt: "制作概要", dd: "教科書やドリルをスマホで撮影するだけで、AIが内容を解析して問題を自動生成する復習Webアプリ。小学1年〜中学3年の算数/数学・英語・国語・理科・社会に対応。復習結果は学習履歴として蓄積され、教科書のページ範囲を指定してテスト対策問題を生成できる。PWA対応でスマホのホーム画面からアプリとして起動可能。" },
            { dt: "アプリの特徴", dd: "1問ずつ出題→解答確認→正誤判定の流れで、正解・不正解に応じて「もう一度似た問題」「さらに別の問題」「別のページをやる」「今日の復習を終わる」の4アクションを選択可能。複数ページにまたがっても問題数を継続カウントし、結果画面では全ページ分の正答率を円グラフで表示。テスト対策では、過去の復習で蓄積したAI解析データ（単元名・重要概念・公式・例題など）をプロンプトに活用し、範囲を絞った精度の高い出題を実現している。" },
            { dt: "コーディング", dd: "pnpm workspacesによるモノレポ構成で、フロントエンド（Vite + React 19 + TypeScript）とバックエンドAPI（Hono v4 on Cloudflare Workers）を分離。状態管理はzustandで一元化し、ページ遷移をまたぐ問題数カウントやセッション管理を実装。データベースはCloudflare D1（SQLite）+ Drizzle ORMで構築し、画像はCloudflare R2に保存。認証はJWT（jose）+ bcryptjsによる自前実装で、Gemini 2.5 Flash APIを使った画像解析・問題生成のリトライ処理やJSONパースのエラーハンドリングも組み込んでいる。" },
            { dt: "工夫点", dd: "撮影した画像の解析結果（単元名・重要概念・公式・例題）をanalysisDataとしてDB保存し、テスト対策時にページ範囲でフィルタして再利用する設計にした。復習フローでは、ページ切り替え時にanswersやwrongQuestionIdsを保持しつつimageKeysのみリセットする部分リセット機構を実装し、複数ページの復習をシームレスに繋げた。結果画面からの学習履歴登録では教科書の上下巻・ページ範囲を入力でき、後からテスト範囲として正確に指定できるようにした。UIはTailwind CSS v4 + shadcn/uiで統一し、スマホ操作に最適化したレイアウトを構築している。" },
            {
                dt: "デモURL",
                dd: '<a href="https://ai-fukushu-web.pages.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ai-fukushu-web.pages.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/ai-fukushu",
        imageMain: "/assets/img/worksApp_ai-fukushu.png"
    },
    {
        id: "sakutto-inji",
        title: "さくっと印字",
        category: "WebApp ｜ 自主制作",
        introduction: "記入用紙をスキャンして取り込み、画面上でテキストの配置位置を指定して、ブランクの実物用紙に直接印字できるWebアプリ。テンプレートの保存・複製・エクスポートにも対応し、繰り返し使う書類の印字作業を効率化する。",
        role: "Direction / Design / Coding",
        tools: "Figma / Next.js 15 / TypeScript / Tailwind CSS v4 / Cloudflare Workers / Cloudflare D1 / Cloudflare R2 / Better Auth / pdf-lib / pdfjs-dist",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "6日" }
        ],
        description: [
            { dt: "制作概要", dd: "記入用紙（払込取扱票・申請書など）をPDF/画像でスキャンし、画面上でテキストフィールドを配置して、ブランクの実物用紙に直接印字できるWebアプリ。テンプレートとして保存すれば、同じ書式の用紙に繰り返し印字でき、手書きの手間や記入ミスを削減することを目的に開発した。" },
            { dt: "アプリの特徴", dd: "キャンバス上にクリックでテキストフィールドを配置し、ドラッグで位置調整が可能。フォント（ゴシック/明朝）・サイズ・色・回転・横書き/縦書きを個別に設定できる。A4・B5・はがき・払込取扱票など主要な用紙プリセットに加え、ユーザー定義のカスタムサイズにも対応。テンプレートの複製やJSON形式でのエクスポート/インポート機能により、バックアップやテンプレート共有も可能にしている。" },
            { dt: "コーディング", dd: "Next.js 15（App Router）とTypeScriptでフロントエンドを構築し、Cloudflare Workers上にデプロイ。認証にBetter Auth、データベースにCloudflare D1（SQLite）、スキャンPDFとフォントの保存にCloudflare R2を使用。PDF表示にはpdfjs-dist、印刷用PDF生成にはpdf-libをクライアントサイドで実行し、サーバー負荷をかけない設計とした。座標系はmm（データ）・px（画面）・pt（PDF）の3系統を変換レイヤーで統一管理し、ズームや用紙回転時にも正確な位置計算を実現している。" },
            { dt: "工夫点", dd: "日本語縦書きでは句読点やカナの位置補正を1文字ずつ計算し、pdf-libの制約内で自然な縦組みを実現した。キャンバスの90°/180°/270°回転時にはクリック座標を逆回転行列で変換し、回転状態でも直感的にフィールドを配置できるようにした。テキストフィールドの操作には30段階のUndo/Redo履歴を実装し、新規フィールドは直前のフィールド設定を引き継ぐことで入力効率を向上させている。フォントはCache APIでキャッシュし、PDF生成時の帯域消費を抑えた。" },
            {
                dt: "デモURL",
                dd: '<a href="https://sakutto-inji.chiteijin315.workers.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://sakutto-inji.chiteijin315.workers.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sakutto-inji",
        imageMain: "/assets/img/worksApp_sakutto-inji.png"
    },
    {
        id: "sakutto-sakubun",
        title: "さくっと作文",
        category: "WebApp ｜ 自主制作",
        introduction: "AIが質問形式で情報を引き出し、作文作成を支援するWebアプリ。作文の自動生成・ヒント表示・手書き作文の画像添削の3モードを備え、小学1年から一般まで対象レベルに応じた出力を行う。",
        role: "Direction / Design / Coding",
        tools: "Figma / Next.js / TypeScript / Tailwind CSS v4 / Neon / supabaseAuth / vercel / GeminiAPI",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "3日" }
        ],
        description: [
            { dt: "制作概要", dd: "AIとの質疑応答を通じて作文に必要な情報を引き出し、作文の自動生成またはヒント提示を行うWebアプリ。手書き作文の画像をアップロードするとOCR・誤字脱字・ルール評価・良い点・改善点を添削する機能も備える。対象レベル（小学1年〜一般）に応じて語彙や表現を自動で切り替え、子どもでも使いやすい設計にした。" },
            { dt: "アプリの特徴", dd: "AIが1問ずつ質問し、回答をもとに指定文字数前後の作文を生成する「作文完成モード」と、書き方の手順・コツをステップ形式で提示する「ヒントモード」の2つの出力を用意。手書き作文の画像添削ではGemini Visionで文字を読み取り、誤字脱字・文字数・ルール遵守を評価する。過去に入力したテーマの履歴表示や、作文ルールの保存・呼び出し機能により繰り返し利用時の手間を軽減。音声入力にも対応し、キーボード操作が苦手なユーザーでも回答を入力できるようにした。" },
            { dt: "コーディング", dd: "Next.js 16（App Router）とTypeScriptで構築し、Gemini APIの呼び出しとDB操作はすべてServer Actionsでサーバー側に閉じ、APIキーをクライアントに露出しない設計にした。認証はSupabase Auth、ユーザーごとのテーマ履歴・保存ルールはNeon（PostgreSQL）で管理。画像添削ではクライアント側でCanvas APIによるリサイズ・圧縮を行い、Server Actionのペイロード制限内に収めている。Geminiの応答からTHOUGHTブロックを除去する後処理や、ヒント本文を◆・＜＞・・で整形して段階表示する独自パーサーも実装した" },
            { dt: "工夫点", dd: "質疑応答のフローでは、AIが「十分な情報が集まった」と判断するまで自動で質問を続け、途中でスキップや早期終了も選べる柔軟な進行にした。ヒントモードでは「ワンステップずつ表示」と「まるごと表示」を選択でき、自分のペースで確認できる。作文ルールの保存フローでは、sessionStorageで設定を退避し保存完了後に質疑応答へ自動遷移させることで、画面遷移によるコンテキスト消失を防いだ。画像添削の注意書きは対象レベルに応じてひらがな表記に切り替え、低学年の子どもが自分で読める配慮を加えた。" },
            {
                dt: "デモURL",
                dd: '<a href="https://sakutto-sakubun.vercel.app/" target="_blank" rel="noopener noreferrer" class="link-hover">https://sakutto-sakubun.vercel.app/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sakutto-sakubun",
        imageMain: "/assets/img/worksApp_sakutto-sakubun.png"
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
    {
        id: "ouchi-zaiko-cloudflare",
        title: "おうちで在庫くん (Cloudflare版)",
        category: "WebApp ｜ 自主制作",
        introduction:
            "家庭の在庫を「おうち」単位で共有・管理できるPWA対応Webアプリ。ジャンル別の在庫リスト、次回購入リスト、複数ユーザーでの共有機能を備え、スマホのホーム画面からネイティブアプリのように使える。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Cloudflare Workers / Cloudflare D1 / @opennextjs/cloudflare / Tailwind CSS v4 / DaisyUI 5",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "3日" },
        ],
        description: [
            {
                dt: "制作概要",
                dd: "家庭内の在庫をジャンル別に登録・管理し、「おうち」単位で家族やルームメイトと共有できるWebアプリ。元々 Firebase 版として開発していたものを、Cloudflare Workers + D1（SQLite）構成にフルリプレースした。認証・データベースをすべてCloudflareエッジ上で完結させることで、外部サービスへの依存を最小限に抑えた構成となっている。",
            },
            {
                dt: "アプリの特徴",
                dd: "ジャンル別のタブ切り替えで在庫を一覧表示し、数量の増減をワンタップで操作可能。各商品に「定数（目標在庫数）」を設定でき、不足分を「次回購入リスト」にワンタップで追加できる。共有設定でオーナーが他ユーザーをメールアドレスで招待し、同じ在庫データをリアルタイムに共同管理できる。PWA対応により、スマホのホーム画面に追加してネイティブアプリのように利用可能。",
            },
            {
                dt: "コーディング",
                dd: "Next.js 15（App Router）と TypeScript で構築し、@opennextjs/cloudflare で Cloudflare Workers にデプロイ。認証は Web Crypto API を用いた JWT（HMAC-SHA256）+ PBKDF2 パスワードハッシュを自前実装し、HttpOnly Cookie で管理。データベースは Cloudflare D1（SQLite）で、homes・users・genres・items のリレーショナル設計とし、次回購入リストは VIEW で実装してデータの二重管理を回避した。Service Worker は手書きで実装し、静的アセットはキャッシュファースト、APIはネットワークオンリー、ページはネットワークファーストとキャッシュ戦略を使い分けている。",
            },
            {
                dt: "工夫点",
                dd: "数量変更時にリストの並び順が変わらないよう、ジャンル切替・初回ロード時のみソートし、以降は順序を維持したまま値だけ差し替える設計にした。数量更新後のデータ再取得では loading フラグを立てずにサイレント更新し、DOM の破棄・再構築によるスクロール位置リセットを防止。Firebase から D1 への移行では、Firestore のドキュメント構造をリレーショナルスキーマに再設計し、循環参照を避けるため users.home_id を非正規化キャッシュとして扱う構成にした。ログイン後の画面遷移では router.push ではなく window.location.href を使用し、PWA 環境での soft navigation 失敗を回避している。",
            },
            {
                dt: "デモURL",
                dd: '<a href="https://ouchi-zaiko.chiteijin315.workers.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ouchi-zaiko.chiteijin315.workers.dev/</a>',
            },
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/ouchi-zaiko-cloudflare",
        imageMain: "/assets/img/worksApp_ouchi-zaiko.png",
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
        id: "sakutto-sakubun-cloudflare",
        title: "さくっと作文 (Cloudflare版)",
        category: "WebApp ｜ 自主制作",
        introduction: "AI（Gemini）と対話しながら作文を作れるWebアプリ。テーマ・文字数・学年を設定するとAIが質問を投げかけ、答えていくだけで作文が完成する。手書き作文の写真を撮って添削する機能も搭載。",
        role: "Direction / Design / Coding",
        tools: "Figma / Next.js 15 / TypeScript / Cloudflare Workers / Cloudflare D1 / Tailwind CSS v4 / Gemini API / PWA",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "2日" }
        ],
        description: [
            { dt: "制作概要", dd: "AI（Google Gemini）を活用した日本語作文支援Webアプリ。テーマ・目標文字数・対象学年を設定すると、AIが対話形式で質問を投げかけ、ユーザーが答えていくだけで作文の素材が集まり、完成文やヒントを生成できる。手書き作文の写真を撮影して添削する機能も備えており、小学1年生から一般まで幅広い対象レベルに対応している。" },
            { dt: "アプリの特徴", dd: "Q&A形式でAIが1問ずつ質問し、回答を重ねると「作文を書く」か「ヒントを見る」かを選べる構成。ヒントは一括表示とステップ表示を切り替え可能。手書き作文の画像添削では、誤字脱字・文字数・ルール遵守・良い点・改善点をJSON形式で構造化して返す。音声入力にも対応し、テーマ履歴の自動保存やカスタムルールの保存・読み込み機能で、繰り返し利用しやすい設計にしている。学年別に使用漢字を制限した出力にも対応。" },
            { dt: "コーディング", dd: "Next.js 15（App Router）と TypeScript で構築し、Cloudflare Workers（@opennextjs/cloudflare）上にデプロイ。データベースは Cloudflare D1（SQLite）を使用し、認証は JWT を Web Crypto API で自前実装した。Gemini API は Cloudflare Workers 上で @google/genai が動作しないため、fetch() による REST API 直接呼び出しで統合。パスワードハッシュも bcrypt が使えないため PBKDF2（Web Crypto API）で実装している。PWA 対応として手書きの Service Worker を導入し、ホーム画面追加・オフラインキャッシュに対応した。" },
            { dt: "工夫点", dd: "Cloudflare Workers の制約（Node.js ランタイムが使えない）に対し、JWT 認証・パスワードハッシュ・AI API 呼び出しのすべてを Web Crypto API と fetch() のみで実装した。Gemini の応答に混入する THOUGHT ブロック（推論過程）を自動除去するフィルタを設け、ユーザーに不要なテキストが表示されないようにした。画像添削では撮影画像をクライアント側で圧縮してから送信し、通信量を削減。質問フェーズでは「もりこみたいことはありますか？」の自然な会話フローを経てから終了判定に移る設計にし、情報収集の打ち切りが唐突にならないよう工夫した。" },
            {
                dt: "デモURL",
                dd: '<a href="https://sakutto-sakubun.chiteijin315.workers.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://sakutto-sakubun.chiteijin315.workers.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sakutto-sakubun-cloudflare",
        imageMain: "/assets/img/worksApp_sakutto-sakubun.png"
    },
    {
        id: "sakutto-task-cloudflare",
        title: "さくっとタスク（Cloudflare版）",
        category: "WebApp ｜ 自主制作",
        introduction: "「さくっとタスク」をVercel + Neon構成からCloudflare Workers + D1構成へフルリプレイスした移行版。認証もSupabase Authから自前JWT（Web Crypto API）に置き換え、インフラ費用ゼロで運用可能にした。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Cloudflare Workers / Cloudflare D1 / @opennextjs/cloudflare / Web Crypto API / GeminiAPI / Resend / Tailwind CSS v4 / DaisyUI v5",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "4日" }
        ],
        description: [
            { dt: "制作概要", dd: "既存の「さくっとタスク」（Vercel + Neon PostgreSQL + Supabase Auth）を、Cloudflare Workers + D1（SQLite）+ 自前JWT認証にフルリプレイスした移行プロジェクト。機能はそのままに、インフラをCloudflareエコシステムに統一することで、無料枠内での運用とエッジでの高速レスポンスを実現した。" },
            { dt: "アプリの特徴", dd: "元版の全機能（カレンダー表示・繰り返しタスク7種類・記念日管理・AI予定読込・メール通知・PWA）を維持しつつ、新機能として未完了タスクの自動引継ぎを追加。過去30日以内の未完了タスクを今日のリスト最後尾に警告マーク付きで自動表示し、タスクの取りこぼしを防ぐ。Cloudflare Cron Triggersによるサーバーレス定期実行で、外部Cronサービスへの依存も解消した。" },
            { dt: "コーディング", dd: "Next.js 15（App Router）を@opennextjs/cloudflareでCloudflare Workersにデプロイ。認証はWeb Crypto APIでPBKDF2パスワードハッシュとHMAC-SHA256によるJWT署名を自前実装し、HttpOnly Cookieで管理。DBはPostgreSQLからSQLite（D1）への変換に伴い、UUID生成・BOOLEAN型・配列型・日時型などの差異をすべてアプリ層で吸収。D1のバインドパラメータ上限（100個）に対応したバッチ処理や、Cloudflare Workers（UTC環境）での日本時間判定ロジックも実装した。" },
            { dt: "工夫点", dd: "Neon→D1へのデータ移行スクリプトを自作し、既存データ（4000行超）をSQLite形式に変換して移行。認証ではSupabase AuthのユーザーIDと自前認証のIDが異なるため、マッピングテーブルで全リレーションを正しく書き換えた。未完了タスク引継ぎ機能では、サーバーサイドで引継ぎタスクをマージして返す設計を採用し、フロント側の複雑化を回避。Optimistic更新やlocalStorageキャッシュ戦略は元版の設計を踏襲しつつ、Cloudflare環境特有の制約（D1パラメータ上限・UTC環境でのJST判定）に合わせて最適化した。" },
            {
                dt: "デモURL",
                dd: '<a href="https://sakutto-task.chiteijin315.workers.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://sakutto-task.chiteijin315.workers.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sakutto-task-cloudflare",
        imageMain: "/assets/img/worksApp_sakutto-task.png"
    },
    {
        id: "hyakunin-goromaru-cloudflare",
        title: "百人一首 -ゴロでマル覚え-（Cloudflare版）",
        category: "WebApp ｜ 自主制作",
        introduction: "百人一首をゴロ合わせで覚える学習アプリ。4首〜100首の段階的テスト、音声再生、間違えやすい問題の特訓、コンピューター対戦、復習リストなど多彩な学習モードを搭載し、PWA対応でスマホにインストールして使える。",
        role: "Direction / Design / Coding",
        tools: "Figma / React / Next.js / TypeScript / Tailwind CSS v4 / DaisyUI 5 / Cloudflare Workers / D1 / R2 / Howler.js / JWT自前実装",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "1日" },
            { task: "デザイン", duration: "1日" },
            { task: "コーディング", duration: "7日" }
        ],
        description: [
            { dt: "制作概要", dd: "百人一首100首すべてにオリジナルのゴロ合わせ（語呂合わせ）を用意し、音声と解説付きで暗記を支援する学習Webアプリ。段階的なテストで少しずつ覚え、間違えた問題は自動で復習リストに追加される仕組み。ログインすると学習進捗がサーバーに保存され、端末を変えても続きから学習できる。" },
            { dt: "アプリの特徴", dd: "4首・8首・20首・100首と段階的にテスト範囲が広がるステップアップ式の学習設計。上の句・下の句・ゴロ合わせの音声を自動再生し、耳からも記憶を定着させる。間違えやすい上の句25セット・下の句24セットを集めた特訓モード、全100首をシャッフルして出題する実践問題、3段階の難易度で対戦できるコンピューター対戦モードを搭載。実践問題と対戦モードは100首テストをクリアすると解放される進捗連動型の設計にしている。" },
            { dt: "コーディング", dd: "Next.js 15（App Router）と TypeScript でフロントエンドを構築し、Cloudflare Workers にデプロイ。データベースは Cloudflare D1（SQLite）、音声ファイルは Cloudflare R2 から配信し、Howler.js で再生を制御。認証は Web Crypto API を使った JWT の自前実装（PBKDF2 + HMAC-SHA256）で、Cookie と Bearer Token の両方に対応。百人一首の縦書き表示では、ゴロ合わせ該当箇所を赤色でハイライトする独自のテキスト処理ロジックを実装した。" },
            { dt: "工夫点", dd: "ゴロ合わせのハイライト処理では、濁点・半濁点の揺れ（が→か、べ→へ等）やスペースを含む文字列でも正確に該当範囲を特定するロジックを構築。コンピューター対戦では、難易度に応じた応答遅延（初級4秒・中級2秒・上級0.5秒）を設け、ゲーム性を持たせた。復習リストは localStorage で即時反映しつつ、テスト結果やベストスコアは API 経由で D1 に永続化する設計とし、ログインの有無に関わらず学習を始められるようにした。PWA 対応によりスマホのホーム画面から起動でき、通学中などの隙間時間での学習を想定している。" },
            {
                dt: "デモURL",
                dd: '<a href="https://hyakunin-goromaru.chiteijin315.workers.dev/" target="_blank" rel="noopener noreferrer" class="link-hover">https://hyakunin-goromaru.chiteijin315.workers.dev/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/hyakunin-goromaru-cloudflare",
        imageMain: "/assets/img/worksApp_hyakunin-goromaru.png"
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
