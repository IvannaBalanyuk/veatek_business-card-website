import { FC } from 'react';
import styles from './current-projects-card.module.css';
import ListItem from '../list-item/list-item';
import { TCurrentProjectsInfo } from '../../utils/data';

type TProps = {
  cardData: TCurrentProjectsInfo;
};

const CurrentProjectsCard: FC<TProps> = ({ cardData }) => {
  return (
    <div className={`container container_type_flex-column`}>
      <div className={`container container_type_flex-column rg-3 h-9 bg-gradient_type_medium`}>
        <img
          className={`image h-5`}
          src={cardData.image.src}
          alt={cardData.image.alt || 'Изображение'}
        />
        <div className={`container container_type_flex-column rg-3`}>
          <h3 className={`container container_type_flex-row text text_type_main-l`}>
            {cardData.title}
          </h3>
          {cardData.titleExtra &&
            <div className={`container container_type_flex-row flex-wrap`}>
              {cardData.titleExtra.map(item => {
                return (
                  <ListItem extraClass='w-5'>
                    <span className={`text text_type_main-s`}>
                      {item}
                    </span>
                  </ListItem>
                )
              })}
            </div>
          }
        </div>
      </div>
      <div className={`container container_type_flex-column`}>
        <div className={`${styles.wrapper} container container_type_flex-row cg-4 h-3 pt-1 pb-1`}>
          <div className={`${styles.wrapper} container container_type_flex-row cg-2 w-5`}>
            <img
            src={cardData.role.category.icon}
            alt=''
            className={`${styles.image} image`}
            />
            <span className={`text text_type_main-s`}>
              {cardData.role.category.text}
            </span>
          </div>
          <div className={`container container_type_flex-column`}>
            {cardData.role.contentList && cardData.role.contentList.map(item => {
              return (
                <ListItem icon={item.icon}>
                  <span className={`text text_type_main-s`}>
                    {item.text}
                  </span>
                </ListItem>
              )
            })}
          </div>
        </div>
        <div className={`${styles.wrapper} container container_type_flex-row cg-4 pt-1 pb-1 bg-gradient_type_medium`}>
          <div className={`${styles.wrapper} container container_type_flex-row cg-2 w-5`}>
            <img
            src={cardData.area.category.icon}
            alt=''
            className={`${styles.image} image`}
            />
            <span className={`text text_type_main-s`}>
              {cardData.area.category.text}
            </span>
          </div>
          {cardData.area.content && (
            <span className={`text text_type_main-m-bold`}>
              {cardData.area.content}
            </span>
          )}
        </div>
        {cardData.period && (
          <div className={`${styles.wrapper} container container_type_flex-row cg-4 pt-1 pb-1`}>
            <div className={`${styles.wrapper} container container_type_flex-row cg-2 w-5`}>
              <img
              src={cardData.period.category.icon}
              alt=''
              className={`${styles.image} image`}
              />
              <span className={`text text_type_main-s`}>
                {cardData.period.category.text}
              </span>
            </div>
            {cardData.period.content && (
              <span className={`text text_type_main-m-bold`}>
                {cardData.period.content}
              </span>
            )}
          </div>
        )}
        {cardData.investment && (
          <div className={`${styles.wrapper} container container_type_flex-row cg-4 pt-1 pb-1 bg-gradient_type_medium`}>
            <div className={`${styles.wrapper} container container_type_flex-row cg-2 w-5`}>
              <img
              src={cardData.investment.category.icon}
              alt=''
              className={`${styles.image} image`}
              />
              <span className={`text text_type_main-s`}>
                {cardData.investment.category.text}
              </span>
            </div>
            {cardData.investment.content && (
              <span className={`text text_type_main-m-bold`}>
                {cardData.investment.content}
              </span>
            )}
          </div>
        )}
        <div className={`${styles.wrapper} container container_type_flex-row cg-4 pt-1 pb-1`}>
            <div className={`${styles.wrapper} container container_type_flex-row cg-2 w-5`}>
              <img
              src={cardData.cost.category.icon}
              alt=''
              className={`${styles.image} image`}
              />
              <span className={`text text_type_main-s`}>
                {cardData.cost.category.text}
              </span>
            </div>
            {cardData.cost.content && (
              <span className={`text text_type_main-m-bold`}>
                {cardData.cost.content}
              </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default CurrentProjectsCard;
