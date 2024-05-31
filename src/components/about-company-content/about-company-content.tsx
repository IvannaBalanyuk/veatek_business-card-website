import styles from "./about-company-content.module.css";
import AboutCompanyCard from "../about-company-card/about-company-card";
import { ICONS, LOGOS } from "../../utils/constants";

const AboutCompanyContent = () => {
  return (
    <div className={`container container_type_flex-column w-full g-20`}>
      <ul className={`container container_type_flex-row flex-nowrap w-full g-15`}>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ICONS.iconFlag, alt: '' },
              { src: ICONS.iconArrows, alt: '' },
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
              { src: ICONS.iconDoc, alt: '' },
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
              { src: ICONS.iconCoins, alt: '' },
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
              { src: ICONS.iconHandshake, alt: '' },
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
      <ul className={`container container_type_flex-row flex-nowrap w-full g-15`}>
        <li>
          <AboutCompanyCard
            icons={[
              { src: ICONS.iconCase, alt: '' },
              { src: ICONS.iconSearch, alt: '' },
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
              { src: LOGOS.logoDomRF, alt: 'Логотип Дом РФ' },
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
