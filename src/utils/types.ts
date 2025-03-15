import { ReactNode } from "react";

export type TImage = {
  src: string;
  alt: string;
};

export type ContentType<T extends string> = {
  [key in T]: string;
};
export type GeoContentType<T extends string> = {
  [key in T]: ReactNode;
};

export type TAboutCompanyInfo = {
  icons: TImage[];
  content: ReactNode;
};

type TPeriod = {
  start?: string;
  end?: string;
};

export type TGMInfo = {
  period: TPeriod;
  info: ReactNode;
};

export type TCompletedProjectsInfo = {
  image: TImage;
  title: string;
  capex?: string;
  listTitle?: string;
  list?: ReactNode[];
  content?: ReactNode[];
};

type TItemWithIcon = {
  icon: string;
  text: string;
};

type TCategoryItem = {
  category: TItemWithIcon;
  content?: string;
  contentList?: TItemWithIcon[];
};

export type TCurrentProjectsInfo = {
  image: TImage;
  title: string;
  titleExtra?: string[];
  role: TCategoryItem;
  area: TCategoryItem;
  period?: TCategoryItem;
  investment?: TCategoryItem;
  cost: TCategoryItem;
};
