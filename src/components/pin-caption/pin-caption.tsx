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
    <div className={`container container_type_flex-row flex-nowrap max-w-6 min-w-4 cg-4`}>
      <div className={`${styles.icon_wrapper} container container_type_flex-row `}>
        <img
          className={`${styles.icon} image`}
          src={icon}
          alt=''
        />
      </div>
      <div className={`${styles.text_wrapper} container container_type_flex-column w-full`}>
        {children}
      </div>
    </div>
  );
};

export default PinCaption;
