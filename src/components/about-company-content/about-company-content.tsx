/* eslint-disable react/display-name */
import { FC, memo } from "react";
import styles from "./about-company-content.module.css";
import AboutCompanyCard from "../about-company-card/about-company-card";
import { TAboutCompanyInfo } from "../../utils/types";

type TProps = {
  sectionContentA: TAboutCompanyInfo[];
  sectionContentB: TAboutCompanyInfo[];
};

const AboutCompanyContent: FC<TProps> = memo(
  ({ sectionContentA, sectionContentB }: TProps) => {
    return (
      <div className={`${styles.container} container`}>
        <ul className={`${styles.cards_wrapper} container list`}>
          <div className={`${styles.wrapper} container`}>
            <AboutCompanyCard icons={sectionContentA[0].icons}>
              {sectionContentA[0].content}
            </AboutCompanyCard>
            <AboutCompanyCard icons={sectionContentA[1].icons}>
              {sectionContentA[1].content}
            </AboutCompanyCard>
          </div>
          <AboutCompanyCard icons={sectionContentA[2].icons}>
            {sectionContentA[2].content}
          </AboutCompanyCard>
        </ul>
        <ul className={`${styles.cards_wrapper} container list`}>
          <div className={`${styles.wrapper} container`}>
            <AboutCompanyCard icons={sectionContentB[0].icons}>
              {sectionContentB[0].content}
            </AboutCompanyCard>
            <AboutCompanyCard icons={sectionContentB[1].icons}>
              {sectionContentB[1].content}
            </AboutCompanyCard>
          </div>
          <AboutCompanyCard icons={sectionContentB[2].icons}>
            {sectionContentB[2].content}
          </AboutCompanyCard>
        </ul>
      </div>
    );
  }
);

export default AboutCompanyContent;
