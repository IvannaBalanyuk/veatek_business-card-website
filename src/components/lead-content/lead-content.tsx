import { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./lead-content.module.css";
import { RootState } from "../../services/store";
import { LOGOS, ALT_VALUES } from "../../utils/constants";
import GridImageCollection from "../grid-image-collection/grid-image-collection";

const LeadContent = () => {
  const { lang } = useSelector((state: RootState) => state.lang);

  const titleContent = useMemo(() => {
    if (lang === "EN") {
      return (
        <h2 className={`${styles.title} text text_type_bold`}>
          федеральный&nbsp;оператор инфраструктурных&nbsp;проектов
        </h2>
      );
    } else {
      return <></>;
    }
  }, [lang]);

  return (
    <div className={`${styles.container} container`}>
      <GridImageCollection />
      <div className={`${styles.title_wrapper} container`}>
        <div className={styles.logo}>
          <img
            className={styles.image}
            src={lang === "EN" ? LOGOS.logoVeatek : LOGOS.logoVeatekEn}
            alt={ALT_VALUES.someImage}
          />
        </div>
        {titleContent}
      </div>
    </div>
  );
};

export default LeadContent;
