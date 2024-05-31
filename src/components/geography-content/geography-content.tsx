import styles from "./geography-content.module.css";
import PinCaption from "../pin-caption/pin-caption";
import ListItem from "../list-item/list-item";
import { MAP_IMAGES, ALT_VALUES } from "../../utils/constants";

const GeographyContent = () => {
  return (
    <div className={`${styles.container} container container_type_flex-column`}>
      <img
        className={`${styles.map} image`}
        src={MAP_IMAGES.map}
        alt={ALT_VALUES.map}
      />
      <div className={`container container_type_flex-row flex-nowrap cg-5 text text_type_main-s`}>
        <PinCaption icon={MAP_IMAGES.pinRed}>
          <ListItem markColor="white">
            "Лофт квартал" и&nbsp;инновационный центр "Сколково"
          </ListItem>
          <ListItem markColor="white">
            Сбер-Рублево-Архангельское
          </ListItem>
          <ListItem markColor="white">
            ЦКАД-3,4
          </ListItem>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinYellow}>
          <ListItem markColor="white">
            Кампус мирового&nbsp;уровня в&nbsp;Мурманске
          </ListItem>
          <ListItem markColor="white">
            Центры детского&nbsp;отдыха и&nbsp;образования
          </ListItem>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinOrange}>
          <p className={`text text_type_main-s`}>
            Комплексное развитие территории в&nbsp;Калининграде
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinBlue}>
          <p className={`text text_type_main-s`}>
            Обход Тольятти
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinGreen}>
          <p className={`text text_type_main-s`}>
            Многопрофильные медицинские центры "Медскан"
          </p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinPurple}>
          <p className={`text text_type_main-s`}>
            Скдадские комплексы "Wildberries"
          </p>
        </PinCaption>
      </div>
    </div>
  );
};

export default GeographyContent;
