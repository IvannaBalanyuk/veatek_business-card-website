import React, { FC, useState, useRef } from "react";
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
  COMPLETED_PROJECTS_INFO,
  CURRENT_PROJECTS_INFO_A,
  CURRENT_PROJECTS_INFO_B,
} from "../../utils/data";
import CurrentProjectsContent from "../current-projects-content/current-projects-content";

const App: FC = () => {
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
        <TabsPanel refs={refs} current={current} setCurrent={setCurrent} />
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
          <Section sectionTitle="Веатек - это:" sectionRef={refs.aboutCompany}>
            <AboutCompanyContent />
          </Section>
          <Section
            sectionTitle="Крупнейшие реализованные проекты"
            sectionRef={refs.completedProjects}
          >
            <CompletedProjectsContent projectsData={COMPLETED_PROJECTS_INFO} />
          </Section>
          <Section
            sectionTitle="Портфель проектов 2024"
            sectionRef={refs.currentProjects}
          >
            <CurrentProjectsContent projectsData={CURRENT_PROJECTS_INFO_A} />
          </Section>
          <Section sectionTitle="Портфель проектов 2024">
            <CurrentProjectsContent projectsData={CURRENT_PROJECTS_INFO_B} />
          </Section>
          <div className={`${styles.wrapper_mobile_hidden} container`}>
            <Section sectionTitle="География проектов">
              <GeographyContent />
            </Section>
          </div>
          <Section
            sectionTitle="Савченко Алексей Сергеевич"
            sectionSubtitle="Генеральный директор"
            image={{
              src: IMAGES.gmPhoto,
              alt: ALT_VALUES.someImage,
            }}
            sectionRef={refs.generalManager}
          >
            <GeneralManagerContent />
          </Section>
          <Section sectionTitle="Контакты" sectionRef={refs.contacts}>
            <ContactsContent />
          </Section>
        </ul>
      </main>
    </>
  );
};

export default App;
