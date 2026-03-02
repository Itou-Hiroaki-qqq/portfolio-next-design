import Link from "next/link";
import Image from "next/image";
import { works, Work } from "../data/works";

export default function WorksList() {
    return (
        <section className="works wrapper" id="works">
            <h2 className="section_title">Works - Website</h2>

            <ul className="works_list">
                {works.map((work: Work) => (
                    <li className="works_item" key={work.id}>
                        <Link href={`/works/${work.id}`}>
                            <div className="works_inner">
                                <div className="works_imgBox">
                                    <Image
                                        className="works_img"
                                        src={work.imageMain}
                                        alt={work.title}
                                        width={600}
                                        height={300}
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
        </section>
    );
}
