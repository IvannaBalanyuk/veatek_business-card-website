import styles from "./geography-content.module.css";
import PinCaption from "../pin-caption/pin-caption";
import ListItem from "../list-item/list-item";
import { MAP_IMAGES, ALT_VALUES } from "../../utils/constants";

const GeographyContent = () => {
  return (
    <div className={`${styles.container} container`}>
      <img
        className={`${styles.map} image`}
        src={MAP_IMAGES.map}
        alt={ALT_VALUES.map}
      />
      <div className={`${styles.pins_wrapper} container text text_type_normal`}>
        <PinCaption icon={MAP_IMAGES.pinRed} size="l">
          <ListItem markColor="white">
            «Лофт квартал» и&nbsp;инновационный центр «Сколково»
          </ListItem>
          <ListItem markColor="white">
            Сбер-Рублево-Архангельское
          </ListItem>
          <ListItem markColor="white">
            ЦКАД-3,4
          </ListItem>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinYellow} size="m">
          <ListItem markColor="white">
            Кампус мирового&nbsp;уровня в&nbsp;Мурманске
          </ListItem>
          <ListItem markColor="white">
            Центры детского&nbsp;отдыха и&nbsp;образования
          </ListItem>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinOrange} size="s">
          <p>Комплексное развитие территории в&nbsp;Калининграде</p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinBlue} size="xs">
          <p>Обход Тольятти</p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinGreen} size="s">
          <p>Многопрофильные медицинские центры «Медскан»</p>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinPurple} size="s">
          <p>Скдадские комплексы «Wildberries»</p>
        </PinCaption>
      </div>
    </div>
  );
};

export default GeographyContent;
