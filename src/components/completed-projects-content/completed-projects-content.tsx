import { FC } from "react";
import styles from "./completed-projects-content.module.css";
import CompletedProjectsCard from "../completed-projects-card/completed-projects-card";
import { TCompletedProjectsInfo } from "../../utils/data";

type TProps = {
  projectsData: TCompletedProjectsInfo[];
};

const CompletedProjectsContent: FC<TProps> = ({ projectsData }) => {
  return (
    <div className={`${styles.container} cg-4`}>
    {projectsData.map((item) => {
      return (
        <CompletedProjectsCard cardData={item}/>
      )
    })}
    </div>
  );
};

export default CompletedProjectsContent;
