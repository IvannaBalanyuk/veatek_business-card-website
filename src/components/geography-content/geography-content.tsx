import styles from "./geography-content.module.css";
import PinCaption from "../pin-caption/pin-caption";
import { MAP_IMAGES, ALT_VALUES} from "../../utils/constants";

const GeographyContent = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.map}
        src={MAP_IMAGES.map}
        alt={ALT_VALUES.map}
      />
      <div className={`${styles.wrapper_captions}`}>
        <PinCaption icon={MAP_IMAGES.pinRed}>
          <p className={`${styles.text} text text_type_main-s`}>
            - "Лофт квартал" и&nbsp;инновационный центр "Сколково"
          </p>
          <p className={`${styles.text} text text_type_main-s`}>
            - Сбер-Рублево-Архангельское
          </p>
          <p className={`${styles.text} text text_type_main-s`}>
            - ЦКАД-3,4
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinYellow}>
          <p className={`${styles.text} text text_type_main-s`}>
            - Кампус мирового&nbsp;уровня в&nbsp;Мурманске
          </p>
          <p className={`${styles.text} text text_type_main-s`}>
            - Центры детского&nbsp;отдыха и&nbsp;образования
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinOrange}>
          <p className={`${styles.text} text text_type_main-s`}>
            Комплексное развитие территории в&nbsp;Калининграде
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinBlue}>
          <p className={`${styles.text} text text_type_main-s`}>
            Обход Тольятти
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinGreen}>
          <p className={`${styles.text} text text_type_main-s`}>
            Многопрофильные медицинские центры "Медскан"
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinPurple}>
          <p className={`${styles.text} text text_type_main-s`}>
            Скдадские комплексы "Wildberries"
          </p>
        </PinCaption>
      </div>
    </div>
  );
};

export default GeographyContent;
