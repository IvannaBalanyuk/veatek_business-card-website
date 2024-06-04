import { FC, ReactNode } from "react";
import styles from "./list-item.module.css";

type Props = {
  markColor?: 'green' | 'white';
  icon?: string;
  extraClass?: string;
  children: ReactNode;
};

const ListItem: FC<Props> = ({
  markColor = 'green',
  icon,
  extraClass = '',
  children
}) => {
  const itemStyles = markColor === 'green' ? styles.item_green : styles.item_white;

  return (
    <>
    {!icon && (
      <li className={`${styles.container} container ${extraClass}`}>
        <span className={`${itemStyles}`}>
          {children}
        </span>
      </li>
    )}
    {icon && (
      <li className={`${styles.container_with_image} container`}>
        <img
        src={icon}
        alt=""
        className={`${styles.image} image`}
        />
        {children}
      </li>
    )}
    </>
  );
};

export default ListItem;
