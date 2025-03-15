/* eslint-disable react/display-name */
import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./tabs-panel.module.css";
import { RootState } from "../../services/store";
import { setLang } from "../../services/langSlice";
import Tab from "../tab/tab";
import { ContentType } from "../../utils/types";

type TRefs = {
  aboutCompany: React.RefObject<HTMLDivElement>;
  completedProjects: React.RefObject<HTMLDivElement>;
  currentProjects: React.RefObject<HTMLDivElement>;
  generalManager: React.RefObject<HTMLDivElement>;
  contacts: React.RefObject<HTMLDivElement>;
};

type TProps = {
  tabsContent: ContentType<string>;
  refs: TRefs;
  current: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrent: any;
};

const TabsPanel: FC<TProps> = memo(
  ({ tabsContent, refs, current, setCurrent }: TProps) => {
    const dispatch = useDispatch();
    const { lang } = useSelector((state: RootState) => state.lang);

    const handleClick = () => {
      dispatch(setLang(lang === "EN" ? "RU" : "EN"));
    };

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
            {tabsContent.aboutCompany}
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
            {tabsContent.completedProjects}
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
            {tabsContent.currentProjects}
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
            {tabsContent.generalManager}
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
            {tabsContent.contacts}
          </Tab>
          <div className={styles.lang} onClick={handleClick}>
            <p className={`${styles.lang_text} text text_type_bold`}>{lang}</p>
          </div>
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
            {tabsContent.aboutCompany}
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
            {tabsContent.completedProjects}
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
            {tabsContent.contacts}
          </Tab>
          <div className={styles.lang} onClick={handleClick}>
            <p className={`${styles.lang_text} text text_type_bold`}>{lang}</p>
          </div>
        </div>
      </>
    );
  }
);

export default TabsPanel;
