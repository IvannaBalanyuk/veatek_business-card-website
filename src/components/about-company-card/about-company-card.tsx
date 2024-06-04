import { FC, ReactNode } from "react";
import styles from "./about-company-card.module.css";

type Icons = {
  src: string;
  alt?: string;
}

type Props = {
  icons: Icons[];
  children: ReactNode;
};

const AboutCompanyCard: FC<Props> = ({
  icons,
  children
}) => {
  return (
    <li className={`${styles.card} container`}>
      <div className={`${styles.icons_wrapper} container`}>
        {icons.map((icon) => {
          return (
            <img
              className={`${styles.icon} image`}
              src={icon.src}
              alt={icon.alt || ''}
            />
          )
        })}
      </div>
      <div className={`${styles.content_wrapper} container`}>
        {children}
      </div>
    </li>
  );
};

export default AboutCompanyCard;
