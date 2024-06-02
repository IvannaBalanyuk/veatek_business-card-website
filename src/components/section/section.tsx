import React, { FC, ReactNode } from "react";
import styles from "./section.module.css";
import { TImage } from "../../utils/data";

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
    <div className={`${styles.section} container container_type_flex-column pb-10`}>
      {sectionTitle &&
        <div className={`${styles.container} container container_type_flex-row pb-10 cg-10`} ref={sectionRef}>
          {image && (
            <div className={`${styles.image_wrapper} container container_type_flex-row w-7 h-7`}>
              <img
                className={`${styles.image} image w-6 h-6`}
                src={image.src}
                alt={image.alt}
              />
            </div>
          )}
          <div className={`${styles.title_wrapper} container container_type_flex-column`}>
            <h2 className={`text text_type_main-xl-bold`}>
              {sectionTitle}
            </h2>
            {sectionSubtitle &&
              <h3 className={`text text_type_main-l pt-10`}>
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
