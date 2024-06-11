import styles from "./grid-image-collection.module.css";
import GridImage from "../grid-image/grid-image";
import {
  COLLECTION_IMAGES_A,
  COLLECTION_IMAGES_B,
  COLLECTION_IMAGES_TABLET,
  COLLECTION_IMAGES_MOBILE,
} from "../../utils/data";

const GridImageCollection = () => {
  return (
    <>
      <div className={`${styles.container_desktop} container w-full`}>
        <ul
          className={`${styles.list} ${styles.list_desktop_A} container list`}
        >
          {COLLECTION_IMAGES_A.map((item, index) => {
            return <GridImage imageData={item} key={index} />;
          })}
        </ul>
        <ul
          className={`${styles.list} ${styles.list_desktop_B} container list`}
        >
          {COLLECTION_IMAGES_B.map((item, index) => {
            return <GridImage imageData={item} key={index} />;
          })}
        </ul>
      </div>
      <div className={`${styles.container_tablet} container`}>
        <ul className={`${styles.list} ${styles.list_tablet} container list`}>
          {COLLECTION_IMAGES_TABLET.map((item, index) => {
            return <GridImage imageData={item} key={index} />;
          })}
        </ul>
      </div>
      <div className={`${styles.container_mobile} container`}>
        <ul className={`${styles.list} ${styles.list_mobile} container list`}>
          {COLLECTION_IMAGES_MOBILE.map((item, index) => {
            return <GridImage imageData={item} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default GridImageCollection;
