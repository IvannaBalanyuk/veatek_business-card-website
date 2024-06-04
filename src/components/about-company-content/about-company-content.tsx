import styles from "./about-company-content.module.css";
import AboutCompanyCard from "../about-company-card/about-company-card";
import { ABOUT_COMPANY_INFO_A, ABOUT_COMPANY_INFO_B } from "../../utils/data";

const AboutCompanyContent = () => {
  return (
    <div className={`${styles.container} container`}>
      <ul className={`${styles.cards_wrapper} container list`}>
        <div className={`${styles.wrapper} container`}>
          <AboutCompanyCard icons={ABOUT_COMPANY_INFO_A[0].icons}>
            {ABOUT_COMPANY_INFO_A[0].content}
          </AboutCompanyCard>
          <AboutCompanyCard icons={ABOUT_COMPANY_INFO_A[1].icons}>
            {ABOUT_COMPANY_INFO_A[1].content}
          </AboutCompanyCard>
        </div>
        <AboutCompanyCard icons={ABOUT_COMPANY_INFO_A[2].icons}>
          {ABOUT_COMPANY_INFO_A[2].content}
        </AboutCompanyCard>
      </ul>
      <ul className={`${styles.cards_wrapper} container list`}>
        <div className={`${styles.wrapper} container`}>
          <AboutCompanyCard icons={ABOUT_COMPANY_INFO_B[0].icons}>
            {ABOUT_COMPANY_INFO_B[0].content}
          </AboutCompanyCard>
          <AboutCompanyCard icons={ABOUT_COMPANY_INFO_B[1].icons}>
            {ABOUT_COMPANY_INFO_B[1].content}
          </AboutCompanyCard>
        </div>
        <AboutCompanyCard icons={ABOUT_COMPANY_INFO_B[2].icons}>
          {ABOUT_COMPANY_INFO_B[2].content}
        </AboutCompanyCard>
      </ul>
    </div>
  );
};

export default AboutCompanyContent;
