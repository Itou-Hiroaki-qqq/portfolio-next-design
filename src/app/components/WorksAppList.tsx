"use client";

import Link from "next/link";
import { worksApp, WorkApp } from "../data/worksApp";

interface WorksAppListProps {
    maxDisplay?: number;
    showViewAllLink?: boolean;
}

export default function WorksAppList({ maxDisplay, showViewAllLink = false }: WorksAppListProps) {
    const displayCount = maxDisplay ?? worksApp.length;
    const displayedWorks = worksApp.slice(0, displayCount);
    const hasMore = worksApp.length > displayCount;

    return (
        <section className={`works wrapper ${hasMore && showViewAllLink ? 'works--hasMore' : ''}`} id={maxDisplay ? "works-app" : undefined}>
            <h2 className="section_title">Works - App{maxDisplay ? "" : "一覧"}</h2>

            <div className="works_listContainer">
                <ul className="works_list">
                    {displayedWorks.map((work: WorkApp) => (
                        <li className="works_item" key={work.id}>
                            <Link href={`/worksApp/${work.id}`}>
                                <div className="works_inner">
                                    <div className="works_imgBox">
                                        <img
                                            className="works_img"
                                            src={work.imageMain}
                                            alt={work.title}
                                        />
                                    </div>
                                    <div className="works_txtZone">
                                        <h3 className="works_topic">{work.title}</h3>
                                        <p className="works_category">{work.category}</p>
                                        <p className="works_role manrope">{work.role}</p>
                                        <p className="works_tool manrope">{work.tools}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                {hasMore && showViewAllLink && (
                    <Link href="/worksApp" className="works_viewAllLink">
                        Works - App一覧へ
                    </Link>
                )}
            </div>
        </section>
    );
}
