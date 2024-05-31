import React, { FC, useState, useRef } from "react";
import styles from "./app.module.css";
import TabsPanel from "../tabs-panel/tabs-panel";
import Section from "../section/section";
import LeadContent from "../lead-content/lead-content";
import ContactsContent from "../contacts-content/contacts-content";
import AboutCompanyContent from "../about-company-content/about-company-content";
import GeographyContent from "../geography-content/geography-content";

const App: FC = () => {
  const [current, setCurrent] = useState("aboutCompany");

  const containerRef = useRef<HTMLUListElement>(null);
  const aboutCompanyRef = useRef<HTMLDivElement>(null);
  const completedProjectsRef = useRef<HTMLDivElement>(null);
  const currentProjectsRef = useRef<HTMLDivElement>(null);
  const geographyRef = useRef<HTMLDivElement>(null);
  const generalManagerRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const refs: {
    aboutCompany: React.RefObject<HTMLDivElement>;
    completedProjects: React.RefObject<HTMLDivElement>;
    currentProjects: React.RefObject<HTMLDivElement>;
    geography: React.RefObject<HTMLDivElement>;
    generalManager: React.RefObject<HTMLDivElement>;
    contacts: React.RefObject<HTMLDivElement>;
  } = {
    aboutCompany: aboutCompanyRef,
    completedProjects: completedProjectsRef,
    currentProjects: currentProjectsRef,
    geography: geographyRef,
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
    if (refs.completedProjects && refs.completedProjects.current && containerScroll) {
      completedProjectsScroll =
        refs.completedProjects.current.getBoundingClientRect().top - containerScroll;
    }

    let currentProjectsScroll;
    if (refs.currentProjects && refs.currentProjects.current && containerScroll) {
      currentProjectsScroll =
        refs.currentProjects.current.getBoundingClientRect().top - containerScroll;
    }

    let geographyScroll;
    if (refs.geography && refs.geography.current && containerScroll) {
      geographyScroll =
        refs.geography.current.getBoundingClientRect().top - containerScroll;
    }

    let generalManagerScroll;
    if (refs.generalManager && refs.generalManager.current && containerScroll) {
      generalManagerScroll =
        refs.generalManager.current.getBoundingClientRect().top - containerScroll;
    }

    let contactsScroll;
    if (refs.contacts && refs.contacts.current && containerScroll) {
      contactsScroll =
        refs.contacts.current.getBoundingClientRect().top - containerScroll;
    }

    const maxOffset = -30;

    if (aboutCompanyScroll && aboutCompanyScroll <= 0 && aboutCompanyScroll > maxOffset) {
      setCurrent("aboutCompany");
    } else if (completedProjectsScroll && completedProjectsScroll <= 0 && completedProjectsScroll > maxOffset) {
      setCurrent("completedProjects");
    } else if (currentProjectsScroll && currentProjectsScroll <= 0 && currentProjectsScroll > maxOffset) {
      setCurrent("currentProjects");
    } else if (geographyScroll && geographyScroll <= 0 && geographyScroll > maxOffset) {
      setCurrent("geography");
    } else if (generalManagerScroll && generalManagerScroll <= 0 && generalManagerScroll > maxOffset) {
      setCurrent("generalManager");
    } else if (contactsScroll && contactsScroll <= 0 && contactsScroll > maxOffset) {
      setCurrent("contacts");
    }
  };

  return (
    <div className={`${styles.app} container container_type_flex-column`}>
      <TabsPanel refs={refs} current={current} setCurrent={setCurrent} />
      <div className={`${styles.container} container container_type_flex-column pt-5`}>
        <ul
          className={`${styles.list} container container_type_flex-column rg-10 pr-4 custom-scroll`}
          onScroll={handleScroll}
          ref={containerRef}
        >
          <Section>
            <LeadContent />
          </Section>
          <Section
            sectionTitle="Веатек - это:"
            sectionRef={refs.aboutCompany}
          >
            <AboutCompanyContent />
          </Section>
          <Section
            sectionTitle="Крупнейшие реализованные проекты"
            sectionRef={refs.completedProjects}
          />
          <Section
            sectionTitle="Портфель проектов 2024"
            sectionRef={refs.currentProjects}
          />
          <Section
            sectionTitle="География проектов"
            sectionRef={refs.geography}
          >
            <GeographyContent />
          </Section>
          <Section
            sectionTitle="Савченко Алексей Сергеевич"
            sectionSubtitle="Генеральный директор"
            sectionRef={refs.generalManager}
          />
          <Section
            sectionTitle="Контакты"
            sectionRef={refs.contacts}
          >
            <ContactsContent />
          </Section>
        </ul>
      </div>
    </div>
  );
};

export default App;
