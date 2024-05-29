import React from "react";
import styles from "./contacts-content.module.css";
import { IMAGES, ALT_VALUES } from "../../utils/constants";


const ContactsContent = () => {
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
        <p className={`${styles.text} text text_type_main-m-bold`}>
          ООО «Веатек»
        </p>
        <p className={`${styles.text} text text_type_main-m-bold`}>
          info@veatek.ru
        </p>
        <p className={`${styles.text} text text_type_main-m-bold`}>
          +7 (919) 968-37-03
        </p>
      </div>
    </div>
  );
};

export default ContactsContent;
