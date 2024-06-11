import { FC } from "react";
import styles from "./grid-image.module.css";
import { TImage } from "../../utils/types";

type TProps = {
  imageData: TImage;
};

const GridImage: FC<TProps> = ({ imageData }) => {
  return (
    <li>
      <img
        className={`${styles.image} image`}
        src={imageData.src}
        alt={imageData.alt}
      />
    </li>
  );
};

export default GridImage;
