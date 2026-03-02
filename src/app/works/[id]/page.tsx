import "./worksPage.css";
import Image from "next/image";
import { Metadata } from "next";
import WorksList from "@/app/components/WorksList";
import ContactForm from "@/app/components/ContactForm";
import { works } from "@/app/data/works";

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
    const { id } = await params;
    const work = works.find((item) => item.id === id);
    if (!work) return { title: "作品が見つかりません" };
    return {
        title: `${work.title} | ITO HIROAKI Portfolio`,
        description: work.description[0]?.dd.replace(/<[^>]*>/g, "").slice(0, 120),
        openGraph: {
            title: work.title,
            description: work.description[0]?.dd.replace(/<[^>]*>/g, "").slice(0, 120),
            images: [{ url: work.imageMain }],
        },
    };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // ← Promise を await して展開する
    const workId = id; // works.ts は id: string 型なので Number にしない
    const work = works.find((item) => item.id === workId);

    if (!work) {
        return (
            <section className="s-wrapper">
                <p>作品が見つかりませんでした。</p>
            </section>
        );
    }

    return (
        <>
            <section className="work-detail s-wrapper">
                <h2 className="page-title">{work.title}</h2>

                <Image
                    src={work.imageMain}
                    alt={work.title}
                    className="work_mainImg"
                    width={1000}
                    height={700}
                    style={{ width: "100%", height: "auto" }}
                />

                <div className="ss-wrapper">

                    {/* 制作情報 */}
                    <ul className="work_info-list">

                        {work.period && work.period.length > 0 && (
                            <li className="work_info-item">
                                <h3 className="work_info-img">
                                    <Image src="/assets/img/woksPage_period.png" alt="製作期間" width={30} height={30} />
                                </h3>
                                <dl className="works_info-periodList">
                                    {work.period.map((p, index) => (
                                        <div key={index}>
                                            <dt>{p.task}</dt>
                                            <dd>{p.duration}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </li>
                        )}

                        {work.tools && (
                            <li className="work_info-item">
                                <h3 className="work_info-img">
                                    <Image src="/assets/img/woksPage_tools.png" alt="使用ツール" width={30} height={30} />
                                </h3>
                                <p className="work_info-txt">{work.tools}</p>
                            </li>
                        )}

                        {work.github && (
                            <li className="work_info-item">
                                <h3 className="work_info-img">
                                    <Image src="/assets/img/woksPage_gitHub-url.png" alt="GitHubのURL" width={30} height={30} />
                                </h3>
                                <a
                                    href={work.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-hover"
                                >
                                    {work.github}
                                </a>
                            </li>
                        )}
                    </ul>

                    {/* 詳細説明 */}
                    <dl className="work_detail-list">
                        {work.description.map((desc, index) => (
                            <div key={index}>
                                <dt>{desc.dt}</dt>
                                <dd dangerouslySetInnerHTML={{ __html: desc.dd }} />
                            </div>
                        ))}
                    </dl>

                    {work.shots && (
                        <div className="work_pageShot-zone">
                            <Image
                                className="work_pageShot-pc"
                                src={work.shots.pc}
                                alt={`${work.title} PCページショット`}
                                width={500}
                                height={4000}
                                style={{ height: "auto" }}
                            />
                            <Image
                                className="work_pageShot-sp"
                                src={work.shots.sp}
                                alt={`${work.title} SPページショット`}
                                width={200}
                                height={4000}
                                style={{ height: "auto" }}
                            />
                        </div>
                    )}
                </div>
            </section>

            <WorksList />
            <ContactForm />
        </>
    );
}
