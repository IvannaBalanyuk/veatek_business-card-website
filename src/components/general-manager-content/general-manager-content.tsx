import { FC } from "react";
import styles from "./general-manager-content.module.css";
import GeneralManagerCard from "../general-manager-card/general-manager-card";
import { TGMInfo } from "../../utils/types";

type TProps = {
  sectionContent: TGMInfo[];
};

const GeneralManagerContent: FC<TProps> = ({ sectionContent }) => {
  return (
    <ul className={`${styles.container} container list`}>
      {sectionContent.map((item, index) => {
        return <GeneralManagerCard data={item} key={index} />;
      })}
    </ul>
  );
};

export default GeneralManagerContent;
