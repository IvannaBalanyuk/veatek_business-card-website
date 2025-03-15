import { FC } from "react";
import styles from "./contacts-content.module.css";
import GridImageCollection from "../grid-image-collection/grid-image-collection";
import { ContentType } from "../../utils/types";

type TProps = {
  companyName: string;
  addresses: ContentType<string>;
};

const ContactsContent: FC<TProps> = ({ companyName, addresses }) => {
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.wrapper} container`}>
        <p className={`text text_type_normal`}>{companyName}</p>
        <p className={`text text_type_normal`}>info@veatek.ru</p>
        <p className={`text text_type_normal`}>+7 (495) 748-92-71</p>
      </div>
      <GridImageCollection />
      <div className={`${styles.wrapper} container`}>
        <div className={`${styles.address} container`}>
          <p className={`text text_type_bold`}>{addresses.country1}</p>
          <p className={`text text_type_normal`}>{addresses.address1}</p>
        </div>
        <div className={`${styles.address} container`}>
          <p className={`text text_type_bold`}>{addresses.country2}</p>
          <p className={`text text_type_normal`}>{addresses.address2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsContent;
