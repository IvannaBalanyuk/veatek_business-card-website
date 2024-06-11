import { FC } from "react";
import styles from "./general-manager-card.module.css";
import { TGMInfo } from "../../utils/types";

type Props = {
  data: TGMInfo;
};

const GeneralManagerCard: FC<Props> = ({ data }) => {
  return (
    <li className={`${styles.container} container`}>
      <div
        className={`${styles.period_wrapper} container text text_type_normal`}
      >
        <span>{data.period.start || ""}</span>
        {data.period.start && <span>-</span>}
        <span>{data.period.end || ""}</span>
      </div>
      <div className={`${styles.info_wrapper} container`}>{data.info}</div>
    </li>
  );
};

export default GeneralManagerCard;
