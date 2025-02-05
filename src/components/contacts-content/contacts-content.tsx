import styles from "./contacts-content.module.css";
import GridImageCollection from "../grid-image-collection/grid-image-collection";

const ContactsContent = () => {
  return (
    <div className={`${styles.container} container`}>
      <GridImageCollection />
      <div className={`${styles.wrapper} container`}>
        <p className={`text text_type_normal`}>ООО «Веатек»</p>
        <p className={`text text_type_normal`}>info@veatek.ru</p>
        <p className={`text text_type_normal`}>+7 (919) 968-37-03</p>
      </div>
    </div>
  );
};

export default ContactsContent;
