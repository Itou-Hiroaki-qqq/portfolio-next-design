import Link from "next/link";
import { workExperiencesSorted } from "../data/workExperience";

export default function WorkExperienceList() {
    const displayItems = workExperiencesSorted.slice(0, 5);
    const hasMore = workExperiencesSorted.length > 5;

    return (
        <section className="work-experience s-wrapper" id="work-experience">
            <h2 className="section_title">Work Experience</h2>

            <div className="work-experience_box">
                <ul className="work-experience_list">
                    {displayItems.map((item) => (
                        <li className="work-experience_item" key={item.id}>
                            <span className="work-experience_dot" />
                            <p className="work-experience_date">{item.date}</p>
                            <p className="work-experience_text">{item.content}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {hasMore && (
                <div className="work-experience_more">
                    <Link href="/work-experience" className="work-experience_moreLink">
                        実務経験の詳細へ
                    </Link>
                </div>
            )}
        </section>
    );
}
