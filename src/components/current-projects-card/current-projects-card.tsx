import { FC } from 'react';
import styles from './current-projects-card.module.css';
import ListItem from '../list-item/list-item';
import { TCurrentProjectsInfo } from '../../utils/types';

type TProps = {
  cardData: TCurrentProjectsInfo;
};

const CurrentProjectsCard: FC<TProps> = ({ cardData }) => {
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.heading_wrapper} container bg-gradient_type_medium`}>
        <img
          className={`${styles.image} image`}
          src={cardData.image.src}
          alt={cardData.image.alt || 'Изображение'}
        />
        <div className={`${styles.title_wrapper} container`}>
          <h3 className={`${styles.title} container text text_type_bold`}>
            {cardData.title}
          </h3>
          {cardData.titleExtra &&
            <div className={`${styles.title_extra} container text text_type_normal`}>
              {cardData.titleExtra.map(item => {
                return (
                  <ListItem extraClass='w-5'>
                    <span>{item}</span>
                  </ListItem>
                )
              })}
            </div>
          }
        </div>
      </div>
      <div className={`${styles.categories_wrapper} container`}>
        <div className={`${styles.role_category_wrapper} container`}>
          <div className={`${styles.category_name_wrapper} container text text_type_normal`}>
            <img
            src={cardData.role.category.icon}
            alt=''
            className={`${styles.icon} image`}
            />
            <span>{cardData.role.category.text}</span>
          </div>
          <div className={`${styles.role_content_wrapper} container text text_type_normal`}>
            {cardData.role.contentList && cardData.role.contentList.map(item => {
              return (
                <ListItem icon={item.icon}>
                  <span>{item.text}</span>
                </ListItem>
              )
            })}
          </div>
        </div>
        <div className={`${styles.category_wrapper} container bg-gradient_type_medium`}>
          <div className={`${styles.category_name_wrapper} container text text_type_normal`}>
            <img
            src={cardData.area.category.icon}
            alt=''
            className={`${styles.icon} image`}
            />
            <span>
              {cardData.area.category.text}
            </span>
          </div>
          {cardData.area.content && (
            <span className={`${styles.category_content} text text_type_bold`}>
              {cardData.area.content}
            </span>
          )}
        </div>
        {cardData.period && (
          <div className={`${styles.category_wrapper} container`}>
            <div className={`${styles.category_name_wrapper} container text text_type_normal`}>
              <img
              src={cardData.period.category.icon}
              alt=''
              className={`${styles.icon} image`}
              />
              <span>
                {cardData.period.category.text}
              </span>
            </div>
            {cardData.period.content && (
            <span className={`${styles.category_content} text text_type_bold`}>
                {cardData.period.content}
              </span>
            )}
          </div>
        )}
        {cardData.investment && (
          <div className={`${styles.category_wrapper} container bg-gradient_type_medium`}>
            <div className={`${styles.category_name_wrapper} container text text_type_normal`}>
              <img
              src={cardData.investment.category.icon}
              alt=''
              className={`${styles.icon} image`}
              />
              <span>
                {cardData.investment.category.text}
              </span>
            </div>
            {cardData.investment.content && (
            <span className={`${styles.category_content} text text_type_bold`}>
                {cardData.investment.content}
              </span>
            )}
          </div>
        )}
        <div className={`${styles.category_wrapper} container`}>
            <div className={`${styles.category_name_wrapper} container text text_type_normal`}>
              <img
              src={cardData.cost.category.icon}
              alt=''
              className={`${styles.icon} image`}
              />
              <span>
                {cardData.cost.category.text}
              </span>
            </div>
            {cardData.cost.content && (
            <span className={`${styles.category_content} text text_type_bold`}>
                {cardData.cost.content}
              </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default CurrentProjectsCard;
