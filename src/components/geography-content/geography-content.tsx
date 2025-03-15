/* eslint-disable react/display-name */
import { FC, memo } from "react";
import { useSelector } from "react-redux";
import styles from "./geography-content.module.css";
import PinCaption from "../pin-caption/pin-caption";
import ListItem from "../list-item/list-item";
import { MAP_IMAGES, ALT_VALUES } from "../../utils/constants";
import { GeoContentType } from "../../utils/types";
import { RootState } from "../../services/store";

type TProps = {
  sectionContent: GeoContentType<string>;
};

const GeographyContent: FC<TProps> = memo(({ sectionContent }: TProps) => {
  const { lang } = useSelector((state: RootState) => state.lang);

  return (
    <div className={`${styles.container} container`}>
      <img
        className={`${styles.map} image`}
        src={lang === "RU" ? MAP_IMAGES.mapEn : MAP_IMAGES.map}
        alt={ALT_VALUES.map}
      />
      <div className={`${styles.pins_wrapper} container text text_type_normal`}>
        <PinCaption icon={MAP_IMAGES.pinRed} size="l">
          <ListItem markColor="white">{sectionContent.loft}</ListItem>
          <ListItem markColor="white">{sectionContent.sberRA}</ListItem>
          <ListItem markColor="white">{sectionContent.CRR}</ListItem>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinYellow} size="m">
          <ListItem markColor="white">{sectionContent.campus}</ListItem>
          <ListItem markColor="white">{sectionContent.childCenters}</ListItem>
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinOrange} size="s">
          {sectionContent.terrDev}
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinBlue} size="xs">
          {sectionContent.byPass}
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinGreen} size="s">
          {sectionContent.medscan}
        </PinCaption>
        <PinCaption icon={MAP_IMAGES.pinPurple} size="s">
          {sectionContent.wildberries}
        </PinCaption>
      </div>
    </div>
  );
});

export default GeographyContent;
