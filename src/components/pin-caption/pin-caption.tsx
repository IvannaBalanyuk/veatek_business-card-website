import { FC, ReactNode } from "react";
import styles from "./pin-caption.module.css";

type Props = {
  icon: string;
  size: 'xs' | 's' | 'm' | 'l';
  children: ReactNode;
};

const PinCaption: FC<Props> = ({
  icon,
  size,
  children
}) => {
  const width = {
    xs: 'max-w-2',
    s: 'max-w-4',
    m: 'max-w-6',
    l: 'max-w-7',
  }
  return (
    <div className={`container container_type_flex-row flex-nowrap cg-3`}>
      <div className={`${styles.icon_wrapper} container container_type_flex-row w-1`}>
        <img
          className={`${styles.icon} image`}
          src={icon}
          alt=''
        />
      </div>
      <div className={`${styles.text_wrapper} ${width[size]} container container_type_flex-column`}>
        {children}
      </div>
    </div>
  );
};

export default PinCaption;
