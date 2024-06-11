import { FC } from "react";
import styles from "./current-projects-content.module.css";
import CurrentProjectsCard from "../current-projects-card/current-projects-card";
import { TCurrentProjectsInfo } from "../../utils/types";

type TProps = {
  projectsData: TCurrentProjectsInfo[];
};

const CurrentProjectsContent: FC<TProps> = ({ projectsData }) => {
  return (
    <div className={`${styles.container}`}>
      {projectsData.map((item, index) => {
        return <CurrentProjectsCard cardData={item} key={index} />;
      })}
    </div>
  );
};

export default CurrentProjectsContent;
