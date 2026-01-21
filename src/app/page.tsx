import Image from "next/image";

import { services } from "./data/services";
import { skills } from "./data/skills";
import { works } from "./data/works";

import ServiceCard from "./components/ServiceCard";
import WorkExperienceList from "./components/WorkExperienceList";
import SkillCard from "./components/SkillCard";
import WorksList from "./components/WorksList";
import WorksAppList from "./components/WorksAppList";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <main>
      <article>
        {/* Hero */}
        <div className="hero">
          <h2 className="hero_img">
            <picture>
              <source
                srcSet="/assets/img/hero_pc.jpg"
                media="(min-width: 768px)"
              />
              <img
                src="/assets/img/hero_sp.png"
                alt="ITO HIROAKI Portfolio"
              />
            </picture>
          </h2>
          <p className="hero_title-left">
            ITO<br />HIROAKI
          </p>
          <p className="hero_title-right manrope">Portfolio</p>
        </div>

        {/* Services */}
        <section className="services s-wrapper" id="services">
          <h2 className="section_title">Services</h2>
          <ul className="services_list">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        </section>

        {/* Work Experience */}
        <WorkExperienceList />

        {/* Skills */}
        <section className="skills s-wrapper" id="skills">
          <h2 className="section_title">Skills</h2>

          {skills.map((group) => (
            <div key={group.id} className="skills_jenre">
              <h3 className="skills_name">{group.category}</h3>
              <ul className="skills_list">
                {group.items.map((item, idx) => (
                  <SkillCard
                    key={item.id}
                    item={item}
                    first={idx === 0}
                  />
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Works */}
        <WorksList />

        {/* Works - App */}
        <WorksAppList maxDisplay={6} showViewAllLink={true} />

        {/* About */}
        <section className="about wrapper" id="about">
          <div className="about_zone">
            <h2 className="section_title">About</h2>
            <div className="about_group">
              <img
                className="about_img"
                src="/assets/img/about_picture.jpg"
                alt=""
              />
              <div className="about_txtZone">
                <p className="about_name">
                  伊藤 寛晃
                  <span>いとう ひろあき</span>
                </p>
                <p className="about_txt">
                  1980年生まれ。東京都出身。<br />
                  製薬会社営業、金融会社コールセンター、中学校教員を経て、デジタルハリウッドSTUDIO by
                  LIG、テックアカデミーにてWebデザインやコーディング、WordPress、Vue.js、PHPを学習。現在はReact/Next.jsを学びつつ、知人のWeb制作会社にてコーディングの実務経験を積んでいる。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <ContactForm />
      </article>
    </main>
  );
}
