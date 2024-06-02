import { FC } from "react";
import { TCompletedProjectsInfo } from "../../utils/data";

type TProps = {
  cardData: TCompletedProjectsInfo;
};

const CompletedProjectsCard: FC<TProps> = ({ cardData }) => {
  return (
    <div className={`container container_type_flex-column bg-gradient_type_medium`}>
      <div className={`container container_type_flex-column h-8 rg-4`}>
        <img
          className={`image h-5`}
          src={cardData.image.src}
          alt={cardData.image.alt || 'Изображение'}
        />
        <h3 className={`container container_type_flex-row text text_type_main-l`}>
          {cardData.title}
        </h3>
      </div>
      <div className={`container container_type_flex-column rg-4`}>
        {cardData.capex && (
          <p className={`text text_type_main-m-bold`}>{cardData.capex}</p>
        )}
        {cardData.listTitle && (
          <p className={`text text_type_main-m-bold`}>{cardData.listTitle}</p>
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
