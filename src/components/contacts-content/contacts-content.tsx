import styles from "./contacts-content.module.css";
import GridImageCollection from "../grid-image-collection/grid-image-collection";


const ContactsContent = () => {
  return (
    <div className={`container container_type_flex-column w-full`}>
      <GridImageCollection/>
      <div className={`${styles.container} container container_type_flex-row w-full pt-20`}>
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
