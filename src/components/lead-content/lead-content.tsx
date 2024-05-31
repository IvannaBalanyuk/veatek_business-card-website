import styles from "./lead-content.module.css";
import { IMAGES, LOGOS, ALT_VALUES } from "../../utils/constants";


const LeadContent = () => {
  return (
    <div className={`container container_type_flex-column w-full`}>
      <ul className={`${styles.list} ${styles.list_first} container container_type_grid cg-4`}>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection1}
            alt={ALT_VALUES.recreationCenter}
          />
        </li>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection2}
            alt={ALT_VALUES.campus}
          />
        </li>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection3}
            alt={ALT_VALUES.someImage}
          />
        </li>
      </ul>
      <ul className={`${styles.list} ${styles.list_second} container container_type_grid cg-4 pt-4`}>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection4}
            alt={ALT_VALUES.skolkovo}
          />
        </li>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection5}
            alt={ALT_VALUES.someImage}
          />
        </li>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection6}
            alt={ALT_VALUES.someImage}
          />
        </li>
        <li>
          <img
            className={`image`}
            src={IMAGES.collection7}
            alt={ALT_VALUES.someImage}
          />
        </li>
      </ul>
      <div className={`${styles.wrapper} container container_type_flex-row w-full cg-10 pt-10`}>
        <img
          className={`${styles.logo} image`}
          src={LOGOS.logoVeatek}
          alt={ALT_VALUES.someImage}
        />
        <h2 className={`text text_type_main-l max-w-13`}>
          федеральный&nbsp;оператор инфраструктурных&nbsp;проектов
        </h2>
      </div>
    </div>
  );
};

export default LeadContent;
