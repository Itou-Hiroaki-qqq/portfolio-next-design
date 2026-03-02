import Image from "next/image";

type SkillItem = {
    id: string;
    name: string;
    img: string;
    text: string; 
    link?: string;
};

export default function SkillCard({
    item,
    first = false,
}: {
    item: SkillItem;
    first?: boolean;
}) {
    return (
        <li className={`skills_item ${first ? "skills_item--top" : ""}`}>
            <div className="skills_item-imgZone">
                <p className="skills_item-name">{item.name}</p>

                {item.link ? (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image className="skills_item-img" src={item.img} alt={item.name} width={75} height={75} />
                    </a>
                ) : (
                    <div>
                        <Image className="skills_item-img" src={item.img} alt={item.name} width={75} height={75} />
                    </div>
                )}
            </div>

            <p
                className="skills_item-txt"
                dangerouslySetInnerHTML={{ __html: item.text }}
            />
        </li>
    );
}
