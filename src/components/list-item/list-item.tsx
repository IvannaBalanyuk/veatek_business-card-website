import { FC, ReactNode } from "react";
import styles from "./list-item.module.css";

type Props = {
  markColor?: 'green' | 'white';
  children: ReactNode;
};

const ListItem: FC<Props> = ({
  markColor = 'green',
  children
}) => {
  const itemStyles = markColor === 'green' ? styles.item_green : styles.item_white;

  return (
    <li className={`${itemStyles}`}>
      <span>
        {children}
      </span>
    </li>
  );
};

export default ListItem;
