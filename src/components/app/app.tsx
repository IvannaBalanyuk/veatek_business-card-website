import React, { FC, useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./app.module.css";
import TabsPanel from "../tabs-panel/tabs-panel";
import Section from "../section/section";
import LeadContent from "../lead-content/lead-content";
import AboutCompanyContent from "../about-company-content/about-company-content";
import CompletedProjectsContent from "../completed-projects-content/completed-projects-content";
import GeographyContent from "../geography-content/geography-content";
import GeneralManagerContent from "../general-manager-content/general-manager-content";
import ContactsContent from "../contacts-content/contacts-content";
import { IMAGES, ALT_VALUES } from "../../utils/constants";
import {
  ABOUT_COMPANY_INFO_A,
  ABOUT_COMPANY_INFO_B,
  COMPLETED_PROJECTS_INFO,
  CURRENT_PROJECTS_INFO_A,
  CURRENT_PROJECTS_INFO_B,
  GEO_CAPTIONS,
  GM_INFO,
  TABS_CONTENT,
} from "../../utils/data";
import CurrentProjectsContent from "../current-projects-content/current-projects-content";
import { RootState } from "../../services/store";
import {
  ABOUT_COMPANY_INFO_EN_A,
  ABOUT_COMPANY_INFO_EN_B,
  COMPLETED_PROJECTS_INFO_EN,
  CURRENT_PROJECTS_INFO_EN_A,
  CURRENT_PROJECTS_INFO_EN_B,
  GEO_CAPTIONS_EN,
  GM_INFO_EN,
  TABS_CONTENT_EN,
} from "../../utils/dataEn";
import { ContentType } from "../../utils/types";

const App: FC = () => {
  const { lang } = useSelector((state: RootState) => state.lang);
  const [current, setCurrent] = useState("aboutCompany");

  const containerRef = useRef<HTMLUListElement>(null);
  const aboutCompanyRef = useRef<HTMLDivElement>(null);
  const completedProjectsRef = useRef<HTMLDivElement>(null);
  const currentProjectsRef = useRef<HTMLDivElement>(null);
  const generalManagerRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const refs: {
    aboutCompany: React.RefObject<HTMLDivElement>;
    completedProjects: React.RefObject<HTMLDivElement>;
    currentProjects: React.RefObject<HTMLDivElement>;
    generalManager: React.RefObject<HTMLDivElement>;
    contacts: React.RefObject<HTMLDivElement>;
  } = {
    aboutCompany: aboutCompanyRef,
    completedProjects: completedProjectsRef,
    currentProjects: currentProjectsRef,
    generalManager: generalManagerRef,
    contacts: contactsRef,
  };

  const sectionTitles = useMemo(() => {
    let titles: ContentType<string>;
    if (lang === "EN") {
      titles = {
        aboutCompany: "Веатек - это:",
        completedProjects: "Крупнейшие реализованные проекты",
        currentProjects: "Портфель проектов 2024",
        geography: "География проектов",
        generalManagerTitle: "Савченко Алексей Сергеевич",
        generalManagerSubtitle: "Генеральный директор",
        contacts: "Контакты",
      };
    } else {
      titles = {
        aboutCompany: "Veatek is:",
        completedProjects: "Largest Completed Projects",
        currentProjects: "2024 Project Portfolio",
        geography: "Project Geography",
        generalManagerTitle: "Aleksei Savchenko",
        generalManagerSubtitle: "General Director&Owner",
        contacts: "Contacts",
      };
    }

    return titles;
  }, [lang]);

  const handleScroll = () => {
    let containerScroll;
    if (containerRef && containerRef.current) {
      containerScroll = containerRef.current.getBoundingClientRect().top;
    }

    let aboutCompanyScroll;
    if (refs.aboutCompany && refs.aboutCompany.current && containerScroll) {
      aboutCompanyScroll =
        refs.aboutCompany.current.getBoundingClientRect().top - containerScroll;
    }

    let completedProjectsScroll;
    if (
      refs.completedProjects &&
      refs.completedProjects.current &&
      containerScroll
    ) {
      completedProjectsScroll =
        refs.completedProjects.current.getBoundingClientRect().top -
        containerScroll;
    }

    let currentProjectsScroll;
    if (
      refs.currentProjects &&
      refs.currentProjects.current &&
      containerScroll
    ) {
      currentProjectsScroll =
        refs.currentProjects.current.getBoundingClientRect().top -
        containerScroll;
    }

    let generalManagerScroll;
    if (refs.generalManager && refs.generalManager.current && containerScroll) {
      generalManagerScroll =
        refs.generalManager.current.getBoundingClientRect().top -
        containerScroll;
    }

    let contactsScroll;
    if (refs.contacts && refs.contacts.current && containerScroll) {
      contactsScroll =
        refs.contacts.current.getBoundingClientRect().top - containerScroll;
    }

    const maxOffset = -30;

    if (
      aboutCompanyScroll &&
      aboutCompanyScroll <= 0 &&
      aboutCompanyScroll > maxOffset
    ) {
      setCurrent("aboutCompany");
    } else if (
      completedProjectsScroll &&
      completedProjectsScroll <= 0 &&
      completedProjectsScroll > maxOffset
    ) {
      setCurrent("completedProjects");
    } else if (
      currentProjectsScroll &&
      currentProjectsScroll <= 0 &&
      currentProjectsScroll > maxOffset
    ) {
      setCurrent("currentProjects");
    } else if (
      generalManagerScroll &&
      generalManagerScroll <= 0 &&
      generalManagerScroll > maxOffset
    ) {
      setCurrent("generalManager");
    } else if (
      contactsScroll &&
      contactsScroll <= 0 &&
      contactsScroll > maxOffset
    ) {
      setCurrent("contacts");
    }
  };

  return (
    <>
      <header className={`${styles.header} container w-full`}>
        <TabsPanel
          tabsContent={lang === "RU" ? TABS_CONTENT_EN : TABS_CONTENT}
          refs={refs}
          current={current}
          setCurrent={setCurrent}
        />
      </header>
      <main className={`${styles.content} container`}>
        <ul
          className={`${styles.sections_container} container list custom-scroll`}
          onScroll={handleScroll}
          ref={containerRef}
        >
          <Section>
            <LeadContent />
          </Section>
          <Section
            sectionTitle={sectionTitles.aboutCompany}
            sectionRef={refs.aboutCompany}
          >
            <AboutCompanyContent
              sectionContentA={
                lang === "RU" ? ABOUT_COMPANY_INFO_EN_A : ABOUT_COMPANY_INFO_A
              }
              sectionContentB={
                lang === "RU" ? ABOUT_COMPANY_INFO_EN_B : ABOUT_COMPANY_INFO_B
              }
            />
          </Section>
          <Section
            sectionTitle={sectionTitles.completedProjects}
            sectionRef={refs.completedProjects}
          >
            <CompletedProjectsContent
              projectsData={
                lang === "RU"
                  ? COMPLETED_PROJECTS_INFO_EN
                  : COMPLETED_PROJECTS_INFO
              }
            />
          </Section>
          <Section
            sectionTitle={sectionTitles.currentProjects}
            sectionRef={refs.currentProjects}
          >
            <CurrentProjectsContent
              projectsData={
                lang === "RU"
                  ? CURRENT_PROJECTS_INFO_EN_A
                  : CURRENT_PROJECTS_INFO_A
              }
            />
          </Section>
          <Section sectionTitle={sectionTitles.currentProjects}>
            <CurrentProjectsContent
              projectsData={
                lang === "RU"
                  ? CURRENT_PROJECTS_INFO_EN_B
                  : CURRENT_PROJECTS_INFO_B
              }
            />
          </Section>
          <div className={`${styles.wrapper_mobile_hidden} container`}>
            <Section sectionTitle={sectionTitles.geography}>
              <GeographyContent
                sectionContent={lang === "RU" ? GEO_CAPTIONS_EN : GEO_CAPTIONS}
              />
            </Section>
          </div>
          <Section
            sectionTitle={sectionTitles.generalManagerTitle}
            sectionSubtitle={sectionTitles.generalManagerSubtitle}
            image={{
              src: IMAGES.gmPhoto,
              alt: ALT_VALUES.someImage,
            }}
            sectionRef={refs.generalManager}
          >
            <GeneralManagerContent
              sectionContent={lang === "RU" ? GM_INFO_EN : GM_INFO}
            />
          </Section>
          <Section
            sectionTitle={sectionTitles.contacts}
            sectionRef={refs.contacts}
          >
            <ContactsContent
              companyName={lang === "RU" ? "Veatek Group" : "ООО «Веатек»"}
              addresses={
                lang === "RU"
                  ? {
                      country1: "Russia:",
                      address1:
                        "121205, Moscow, Skolkovo, Kulibina str., b. 2/4",
                      country2: "Indonesia:",
                      address2:
                        "Jl. Sri Wedari №24, Tegallalang, Kecamatan Ubud, Kabupaten Gianyar Bali 80571",
                    }
                  : {
                      country1: "Россия:",
                      address1: "121205, Москва, Сколково, ул. Кулибина, 2/4",
                      country2: "Индонезия:",
                      address2:
                        "Jl. Sri Wedari №24, Tegallalang, Kecamatan Ubud, Kabupaten Gianyar Bali 80571",
                    }
              }
            />
          </Section>
        </ul>
      </main>
    </>
  );
};

export default App;
