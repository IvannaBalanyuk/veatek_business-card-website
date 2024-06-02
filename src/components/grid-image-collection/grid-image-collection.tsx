import styles from "./grid-image-collection.module.css";
import GridImage from "../grid-image/grid-image";
import { COLLECTION_IMAGES_A, COLLECTION_IMAGES_B } from "../../utils/data";

const GridImageCollection = () => {
  return (
    <div className={`container container_type_flex-column`}>
      <ul className={`${styles.list} ${styles.list_first} container container_type_grid cg-4`}>
        {COLLECTION_IMAGES_A.map(item => {
          return <GridImage imageData={item}/>
        })}
      </ul>
      <ul className={`${styles.list} ${styles.list_second} container container_type_grid cg-4 pt-4`}>
        {COLLECTION_IMAGES_B.map(item => {
          return <GridImage imageData={item}/>
        })}
      </ul>
    </div>
  );
};

export default GridImageCollection;
