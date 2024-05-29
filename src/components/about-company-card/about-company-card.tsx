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
    <div className={styles.container}>
      <div className={`${styles.wrapper_icons}`}>
        {icons.map((icon) => {
          return (
            <img
              className={styles.icon}
              src={icon.src}
              alt={icon.alt || ''}
            />
          )
        })}
      </div>
      <div className={`${styles.wrapper_text} pt-8`}>
        {children}
      </div>
    </div>
  );
};

export default AboutCompanyCard;
