import React, { FC, ReactNode } from "react";
import styles from "./section.module.css";

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionRef?: React.RefObject<HTMLDivElement>;
  children?: ReactNode;
};

const Section: FC<Props> = ({
  sectionTitle,
  sectionSubtitle,
  sectionRef,
  children
}) => {
  return (
    <div className={styles.section}>
      {sectionTitle &&
        <div className={styles.text_wrapper}>
          <h2 className={`${styles.text} text text_type_main-xl pt-5`} ref={sectionRef}>
            {sectionTitle}
          </h2>
          {sectionSubtitle &&
            <h3 className={`${styles.text} text text_type_main-l`}>
              {sectionSubtitle}
            </h3>
          }
        </div>
      }
      {children}
    </div>
  );
};

export default React.memo(Section);
