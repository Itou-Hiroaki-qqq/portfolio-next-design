export type Service = {
    id: number;
    imageSp: string;
    imagePc: string;
    alt: string;
    title: string;
    description: string; // HTML を含む
};

export const services: Service[] = [
    {
        id: 0,
        imageSp: "/assets/img/services_00_automation_sp.png",
        imagePc: "/assets/img/services_00_automation_pc.png",
        alt: "業務自動化",
        title: "業務効率化・自動化サポート",
        description: `PythonやGoogle Apps Scriptを活用し、日々の定型業務を自動化できる。<br>
        Excelやスプレッドシートへのデータ入力・集計の自動化、レポートやプレゼン資料の自動生成、メール送信の一括処理、Webサイトからの情報収集（スクレイピング）などに対応可能。`,
    },
    {
        id: 1,
        imageSp: "/assets/img/services_02_WebApp_sp.png",
        imagePc: "/assets/img/services_02_WebApp_pc.png",
        alt: "Webアプリ開発",
        title: "Webアプリケーション開発",
        description: `データベース構築やユーザー認証、AIを活用した画像解析・文章生成などの機能を組み込んだ、実用的なWebアプリを開発できる。<br>
        AI復習アプリ、タスク管理、在庫管理、レシピ検索、用紙印字ツール、AI作文支援など多様なジャンルで制作実績があり、スマホのホーム画面からアプリとして使えるPWA対応も可能。`,
    },
    {
        id: 2,
        imageSp: "/assets/img/services_01_coding_sp.png",
        imagePc: "/assets/img/services_01_coding_pc.png",
        alt: "コーディング",
        title: "Webサイト制作",
        description: `コーポレートサイトなどの複数ページサイトやランディングページのコーディングができる。<br>
        PC／タブレット／スマートフォンのレスポンシブ対応可。<br>
        カルーセルやアコーディオンメニューなど各種UIの実装にも柔軟に対応できる。`,
    },
    {
        id: 3,
        imageSp: "/assets/img/services_03_WordPress_sp.png",
        imagePc: "/assets/img/services_03_WordPress_pc.png",
        alt: "WordPress",
        title: "WordPressの導入",
        description: `WordPressによるWebサイト作成が可能。<br>
        クラシックテーマによる実装にも対応しており、要望に沿ったデザインを実現できる。<br>
        ブログやニュースなど、自身で更新できる機能の実装も可能。`,
    },
    {
        id: 4,
        imageSp: "/assets/img/services_04_WebWriting_sp.png",
        imagePc: "/assets/img/services_04_WebWriting_pc.png",
        alt: "Webライティング",
        title: "Web記事の作成",
        description: `オウンドメディアなどでのWeb記事を作成できる。<br>
        ターゲットとなる検索ワードに基づく競合調査、付加価値のある情報の創出、SEO対策に対応可能。<br>
        読者の知りたい情報に基づく構成、コンバージョンを意識した文章展開ができる。`,
    },
    // コーディング、WordPress、ライティングの画像はどこからもってきたか忘れてしまった。そのためアプリ画像はGPTで作成
];
