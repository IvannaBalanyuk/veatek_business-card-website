/* eslint-disable react/display-name */
import React, { FC, memo } from "react";
import styles from "./tabs-panel.module.css";
import Tab from "../tab/tab";

type TRefs = {
  aboutCompany: React.RefObject<HTMLDivElement>;
  completedProjects: React.RefObject<HTMLDivElement>;
  currentProjects: React.RefObject<HTMLDivElement>;
  generalManager: React.RefObject<HTMLDivElement>;
  contacts: React.RefObject<HTMLDivElement>;
};

type TProps = {
  refs: TRefs;
  current: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrent: any;
};

const TabsPanel: FC<TProps> = memo(({ refs, current, setCurrent }: TProps) => {
  return (
    <>
      <div className={`${styles.tabs_panel_desk} container`}>
        <Tab
          value="aboutCompany"
          active={current === "aboutCompany"}
          onClick={() => {
            setCurrent("aboutCompany");
            if (refs.aboutCompany && refs.aboutCompany.current) {
              refs.aboutCompany.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          О компании
        </Tab>
        <Tab
          value="completedProjects"
          active={current === "completedProjects"}
          onClick={() => {
            setCurrent("completedProjects");
            if (refs.completedProjects && refs.completedProjects.current) {
              refs.completedProjects.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Реализованные проекты
        </Tab>
        <Tab
          value="currentProjects"
          active={current === "currentProjects"}
          onClick={() => {
            setCurrent("currentProjects");
            if (refs.currentProjects && refs.currentProjects.current) {
              refs.currentProjects.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Проекты 2024
        </Tab>
        <Tab
          value="generalManager"
          active={current === "generalManager"}
          onClick={() => {
            setCurrent("generalManager");
            if (refs.generalManager && refs.generalManager.current) {
              refs.generalManager.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Генеральный директор
        </Tab>
        <Tab
          value="contacts"
          active={current === "contacts"}
          onClick={() => {
            setCurrent("contacts");
            if (refs.contacts && refs.contacts.current) {
              refs.contacts.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Контакты
        </Tab>
      </div>
      <div className={`${styles.tabs_panel_mob} container`}>
        <Tab
          value="aboutCompany"
          active={current === "aboutCompany"}
          onClick={() => {
            setCurrent("aboutCompany");
            if (refs.aboutCompany && refs.aboutCompany.current) {
              refs.aboutCompany.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          О компании
        </Tab>
        <Tab
          value="completedProjects"
          active={current === "completedProjects"}
          onClick={() => {
            setCurrent("completedProjects");
            if (refs.completedProjects && refs.completedProjects.current) {
              refs.completedProjects.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Проекты
        </Tab>
        <Tab
          value="contacts"
          active={current === "contacts"}
          onClick={() => {
            setCurrent("contacts");
            if (refs.contacts && refs.contacts.current) {
              refs.contacts.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Контакты
        </Tab>
      </div>
    </>
  );
});

export default TabsPanel;
