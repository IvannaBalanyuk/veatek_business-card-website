import { FC } from "react";
import { TImage } from "../../utils/data";

type TProps = {
  imageData: TImage;
}

const GridImage: FC<TProps> = ({ imageData }) => {
  return (
    <li>
      <img
        className={`image w-full h-full`}
        src={imageData.src}
        alt={imageData.alt}
      />
    </li>
  );
};

export default GridImage;
