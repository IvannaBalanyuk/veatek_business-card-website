import styles from "./general-manager-content.module.css";
import GeneralManagerCard from "../general-manager-card/general-manager-card";
import { GM_INFO } from "../../utils/data";

const GeneralManagerContent = () => {
  return (
    <ul className={`${styles.container} container list`}>
      {GM_INFO.map((item, index) => {
        return <GeneralManagerCard data={item} key={index} />;
      })}
    </ul>
  );
};

export default GeneralManagerContent;
