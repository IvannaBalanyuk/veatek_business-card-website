import styles from "./lead-content.module.css";
import { LOGOS, ALT_VALUES } from "../../utils/constants";
import GridImageCollection from "../grid-image-collection/grid-image-collection";

const LeadContent = () => {
  return (
    <div className={`${styles.container} container`}>
      <GridImageCollection/>
      <div className={`${styles.title_wrapper} container`}>
        <img
          className={`${styles.logo} image`}
          src={LOGOS.logoVeatek}
          alt={ALT_VALUES.someImage}
        />
        <h2 className={`${styles.title} text text_type_bold`}>
          федеральный&nbsp;оператор инфраструктурных&nbsp;проектов
        </h2>
      </div>
    </div>
  );
};

export default LeadContent;
