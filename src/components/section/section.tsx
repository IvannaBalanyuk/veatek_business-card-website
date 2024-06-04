import React, { FC, ReactNode } from "react";
import styles from "./section.module.css";
import { TImage } from "../../utils/types";

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  image?: TImage;
  sectionRef?: React.RefObject<HTMLDivElement>;
  children?: ReactNode;
};

const Section: FC<Props> = ({
  sectionTitle,
  sectionSubtitle,
  image,
  sectionRef,
  children
}) => {
  return (
    <div className={`${styles.section} container w-full`}>
      {sectionTitle &&
        <div className={`${styles.heading} container`} ref={sectionRef}>
          {image && (
            <div className={`${styles.image_wrapper} container`}>
              <img
                className={`${styles.image} image`}
                src={image.src}
                alt={image.alt}
              />
            </div>
          )}
          <div className={`${styles.title_wrapper} container`}>
            <h2 className={`${styles.title_text} text text_type_bold`}>
              {sectionTitle}
            </h2>
            {sectionSubtitle &&
              <h3 className={`${styles.subtitle_text} text text_type_normal`}>
                {sectionSubtitle}
              </h3>
            }
          </div>
        </div>
      }
      {children}
    </div>
  );
};

export default React.memo(Section);
