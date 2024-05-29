import styles from "./about-company-content.module.css";
import AboutCompanyCard from "../about-company-card/about-company-card";
import { ABOUT_IMAGES } from "../../utils/constants";

const AboutCompanyContent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper_cards}>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ABOUT_IMAGES.iconFlag, alt: '' },
              { src: ABOUT_IMAGES.iconArrows, alt: '' },
            ]}
          >
            <p className={`${styles.text} text text_type_main-m`}>
              <span className={`text text_type_main-m-bold`}>
                Инициатор&nbsp;
              </span>
              и&nbsp;
              <span className={`text text_type_main-m-bold`}>
                оператор полного цикла&nbsp;
              </span>
              проектов государственно-частного партнерства
            </p>
          </AboutCompanyCard>
        </li>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ABOUT_IMAGES.iconDoc, alt: '' },
            ]}
          >
            <p className={`${styles.text} text text_type_main-m`}>
              <span className={`text text_type_main-m-bold`}>
                Учредитель&nbsp;
              </span>
              в&nbsp;специальных проектных компаниях
            </p>
          </AboutCompanyCard>
        </li>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ABOUT_IMAGES.iconCoins, alt: '' },
            ]}
          >
            <p className={`${styles.text} text text_type_main-m`}>
              <span className={`text text_type_main-m-bold`}>
                Провайдер&nbsp;
              </span>
              капитала, акционерных займов и&nbsp;младшего долга
            </p>
          </AboutCompanyCard>
        </li>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ABOUT_IMAGES.iconHandshake, alt: '' },
            ]}
          >
            <p className={`${styles.text} text text_type_main-m`}>
              <span className={`text text_type_main-m-bold`}>
                Партнер&nbsp;
              </span>
              в&nbsp;операционных компаниях-застройщиках
            </p>
          </AboutCompanyCard>
        </li>
      </ul>
      <ul className={styles.wrapper_cards}>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ABOUT_IMAGES.iconCase, alt: '' },
              { src: ABOUT_IMAGES.iconSearch, alt: '' },
            ]}
          >
            <p className={`${styles.text} text text_type_main-m`}>
              Подтвержденный опыт и&nbsp;глубокая экспертиза в&nbsp;реализации проектов социальной, образовательной и&nbsp;транспортной инфраструктуры с&nbsp;государственным участием
            </p>
          </AboutCompanyCard>
        </li>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ABOUT_IMAGES.logoDomRF, alt: 'Логотип Дом РФ' },
            ]}
          >
            <p className={`${styles.text} text text_type_main-m`}>
              Использование государственных финансовых мер поддержки при&nbsp;структурировании проекта и&nbsp;привлечении финансирования
            </p>
          </AboutCompanyCard>
        </li>
      </ul>
    </div>
  );
};

export default AboutCompanyContent;
