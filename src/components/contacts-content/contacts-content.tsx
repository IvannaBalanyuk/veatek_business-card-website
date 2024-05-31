import styles from "./contacts-content.module.css";
import { IMAGES, ALT_VALUES } from "../../utils/constants";


const ContactsContent = () => {
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
      <div className={`container container_type_flex-row w-full pt-20`}>
        <p className={`text text_type_main-m-bold`}>
          ООО «Веатек»
        </p>
        <p className={`text text_type_main-m-bold`}>
          info@veatek.ru
        </p>
        <p className={`text text_type_main-m-bold`}>
          +7 (919) 968-37-03
        </p>
      </div>
    </div>
  );
};

export default ContactsContent;
