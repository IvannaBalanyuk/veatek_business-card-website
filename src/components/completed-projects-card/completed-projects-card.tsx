import { FC, ReactNode } from "react";

type Image = {
  src: string;
  alt: string;
}
type Props = {
  image: Image;
  title: string;
  children: ReactNode;
};

const CompletedProjectsCard: FC<Props> = ({
  image,
  title,
  children
}) => {
  return (
    <div className={`container container_type_flex-column min-w-7`}>
      <img
        className={`image max-h-7`}
        src={image.src}
        alt={image.alt || 'Изображение'}
      />
      <h3 className={`text text_type_main-l pt-4`}>
        {title}
      </h3>
      <div className={`container container_type_flex-column rg-3 pt-8 text text_type_main-m`}>
        {children}
      </div>
    </div>
  );
};

export default CompletedProjectsCard;
