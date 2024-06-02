import styles from "./lead-content.module.css";
import { LOGOS, ALT_VALUES } from "../../utils/constants";
import GridImageCollection from "../grid-image-collection/grid-image-collection";

const LeadContent = () => {
  return (
    <>
      <GridImageCollection/>
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
    </>
  );
};

export default LeadContent;
