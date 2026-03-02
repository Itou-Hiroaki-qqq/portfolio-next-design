import { workExperiencesSorted } from "../data/workExperience";

export default function WorkExperiencePage() {
    return (
        <section className="work-experience s-wrapper">
            <h2 className="section_title">Work Experience</h2>
            <div className="work-experience_zone">

                <ul className="work-experience_list">
                    {workExperiencesSorted.map((item) => (
                        <li className="work-experience_item" key={item.id}>
                            <p className="work-experience_date">
                                {item.date}
                            </p>
                            <p className="work-experience_text">
                                {item.content}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
