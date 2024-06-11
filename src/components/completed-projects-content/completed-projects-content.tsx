import { FC } from "react";
import styles from "./completed-projects-content.module.css";
import CompletedProjectsCard from "../completed-projects-card/completed-projects-card";
import { TCompletedProjectsInfo } from "../../utils/types";

type TProps = {
  projectsData: TCompletedProjectsInfo[];
};

const CompletedProjectsContent: FC<TProps> = ({ projectsData }) => {
  return (
    <div className={`${styles.container} container`}>
      {projectsData.map((item, index) => {
        return <CompletedProjectsCard cardData={item} key={index} />;
      })}
    </div>
  );
};

export default CompletedProjectsContent;
