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
    <div className={`container container_type_flex-column min-w-7 pt-10`}>
      <div className={`${styles.container} container container_type_flex-row`}>
        {icons.map((icon) => {
          return (
            <img
              className={`image h-3 min-w-3`}
              src={icon.src}
              alt={icon.alt || ''}
            />
          )
        })}
      </div>
      <div className={`container container_type_flex-row pt-8`}>
        {children}
      </div>
    </div>
  );
};

export default AboutCompanyCard;
