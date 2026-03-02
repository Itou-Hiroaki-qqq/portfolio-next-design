export type WorkExperienceItem = {
    id: string;
    date: string;   // YYYY-MM
    content: string;
};

export const workExperiences: WorkExperienceItem[] = [
    {
        id: "arumako-companyProfile",
        date: "2025-12",
        content: "株式会社アルマコ様の就活サイト案件にて企業ページのプロフィール画面に項目追加、データベース処理追加",
    },
    {
        id: "arumako-faq",
        date: "2025-11",
        content: "株式会社アルマコ様の就活サイト案件にてFAQページを追加",
    },
];

export const workExperiencesSorted = [...workExperiences].sort((a, b) =>
    b.date.localeCompare(a.date)
);
