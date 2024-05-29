import styles from "./lead-content.module.css";
import { IMAGES, ALT_VALUES} from "../../utils/constants";


const LeadContent = () => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.wrapper_img} ${styles.wrapper_img_three}`}>
        <li>
          <img
            className={styles.image}
            src={IMAGES.collection1}
            alt={ALT_VALUES.recreationCenter}
          /></li>
        <li>
          <img
            className={styles.image}
            src={IMAGES.collection2}
            alt={ALT_VALUES.campus}
          /></li>
        <li>
          <img
            className={styles.image}
            src={IMAGES.collection3}
            alt={ALT_VALUES.someImage}
          /></li>
      </ul>
      <ul className={`${styles.wrapper_img} ${styles.wrapper_img_four}`}>
        <img
          className={styles.image}
          src={IMAGES.collection4}
          alt={ALT_VALUES.skolkovo}
        />
        <img
          className={styles.image}
          src={IMAGES.collection5}
          alt={ALT_VALUES.someImage}
        />
        <img
          className={styles.image}
          src={IMAGES.collection6}
          alt={ALT_VALUES.someImage}
        />
        <img
          className={styles.image}
          src={IMAGES.collection7}
          alt={ALT_VALUES.someImage}
        />
      </ul>
      <div className={`${styles.text_wrapper} pt-20`}>
        <h1 className={`${styles.logo_text} text`}>
          Веатек
        </h1>
        <h2 className={`${styles.text} text text_type_main-l`}>
          федеральный&nbsp;оператор инфраструктурных&nbsp;проектов
        </h2>
      </div>
    </div>
  );
};

export default LeadContent;
