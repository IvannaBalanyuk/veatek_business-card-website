import { FC } from "react";
import styles from "./completed-projects-card.module.css"
import { TCompletedProjectsInfo } from "../../utils/types";

type TProps = {
  cardData: TCompletedProjectsInfo;
};

const CompletedProjectsCard: FC<TProps> = ({ cardData }) => {
  return (
    <div className={`${styles.container} container bg-gradient_type_medium`}>
      <div className={`${styles.heading_wrapper} container`}>
        <img
          className={`${styles.image} image`}
          src={cardData.image.src}
          alt={cardData.image.alt || 'Изображение'}
        />
        <h3 className={`${styles.title_wrapper} container text text_type_bold`}>
          {cardData.title}
        </h3>
      </div>
      <div className={`${styles.content_wrapper} container`}>
        {cardData.capex && (
          <p className={`${styles.subtitle} text text_type_bold`}>{cardData.capex}</p>
        )}
        {cardData.listTitle && (
          <p className={`${styles.subtitle} text text_type_bold`}>{cardData.listTitle}</p>
        )}
        {cardData.list && cardData.list.map(item => {
          return item;
        })}
        {cardData.content && cardData.content.map(item => {
          return item;
        })}
      </div>
    </div>
  );
};

export default CompletedProjectsCard;
