import { FC, ReactNode } from "react";
import styles from "./pin-caption.module.css";

type Props = {
  icon: string;
  children: ReactNode;
};

const PinCaption: FC<Props> = ({
  icon,
  children
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper_icon}`}>
        <img
          className={styles.icon}
          src={icon}
          alt=''
        />
      </div>
      <div className={styles.wrapper_text}>
        {children}
      </div>
    </div>
  );
};

export default PinCaption;
