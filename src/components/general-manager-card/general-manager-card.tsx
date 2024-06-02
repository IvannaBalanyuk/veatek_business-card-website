import { FC } from "react";
import styles from "./general-manager-card.module.css";
import { TGMInfo } from "../../utils/data";

type Props = {
  data: TGMInfo;
};

const GeneralManagerCard: FC<Props> = ({ data }) => {
  return (
    <li className={`${styles.container} container container_type_grid cg-10`}>
      <div className={`${styles.period_wrapper} container container_type_flex-row flex-nowrap`}>
        <span className={`text text_type_main-xl`}>{data.period.start || ''}</span>
        {data.period.start &&
          <span className={`text text_type_main-xl`}>-</span>
        }
        <span className={`text text_type_main-xl`}>{data.period.end || ''}</span>
      </div>
      <div className={`${styles.info_wrapper} container container_type_flex-row`}>
        {data.info}
      </div>
    </li>
  );
};

export default GeneralManagerCard;
