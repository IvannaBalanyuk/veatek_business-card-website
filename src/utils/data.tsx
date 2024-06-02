import { ReactNode } from "react";
import { IMAGES, ICONS, ALT_VALUES } from "./constants";
import ListItem from "../components/list-item/list-item";

type TPeriod = {
  start?: string;
  end?: string;
};

export type TGMInfo = {
  period: TPeriod;
  info: ReactNode;
};

export const GM_INFO: TGMInfo[] = [
  {
    period: {
      start: '2010',
      end: '2015',
    },
    info: (
      <p className={`text text_type_main-m`}>
        Отвечал за&nbsp;реализацию крупных проектов по&nbsp;строительству дорог и&nbsp;аэропортов (дороги М-5, М-1, М-4, аэропорты Домодедово и&nbsp;Кольцово), жилой и&nbsp;коммерческой недвижимости
      </p>
    ),
  },
  {
    period: {
      start: '2015',
      end: '2021',
    },
    info: (
      <p className={`text text_type_main-m`}>
        Руководил проектированием и&nbsp;строительством ИЦ&nbsp;«Сколково» с&nbsp;общей программой
        <span className={`text text_type_main-m-bold`}> более 75&nbsp;млрд&nbsp;&#8381;</span>
      </p>
    ),
  },
  {
    period: {
      start: '2020',
      end: '2021',
    },
    info: (
      <p className={`text text_type_main-m`}>
        Был членом Оргкомитета «Универсиады-2023» в&nbsp;городе Екатеринбург, отвечал за&nbsp;создание инфраструктуры
      </p>
    ),
  },
  {
    period: {
      start: '2021',
      end: '2023',
    },
    info: (
      <p className={`text text_type_main-m`}>
        Руководил инвестиционными проектами АО&nbsp;ДСК&nbsp;«Автобан» на&nbsp;сумму
        <span className={`text text_type_main-m-bold`}> более 320&nbsp;млрд&nbsp;&#8381;</span>
      </p>
    ),
  },
  {
    period: {
      end: '2023',
    },
    info: (
      <p className={`text text_type_main-m`}>
        Создал ООО&nbsp;«Веатек» – оператора инфраструктурных&nbsp;проектов
      </p>
    ),
  },
];

export type TImage = {
  src: string;
  alt: string;
};

export type TCompletedProjectsInfo = {
  image: TImage;
  title: string;
  capex?: string;
  listTitle?: string;
  list?: ReactNode[];
  content?: ReactNode[];
};

export const COMPLETED_PROJECTS_INFO: TCompletedProjectsInfo[] = [
  {
    image: {
      src: IMAGES.tolyatti,
      alt: ALT_VALUES.tolyatti,
    },
    title: 'Обход Тольятти',
    capex: 'CAPEX 140 млрд. руб.',
    listTitle: 'Привлечено:',
    list: [
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Инфраструктурные облигации
            <span className={`text text_type_main-m-bold`}> 24&nbsp;млрд&nbsp;&#8381;</span>
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            ИБК
            <span className={`text text_type_main-m-bold`}> 9.1&nbsp;млрд&nbsp;&#8381;</span>
          </p>
        }</ListItem>
      ),
    ],
  },
  {
    image: {
      src: IMAGES.ckad,
      alt: ALT_VALUES.ckad,
    },
    title: 'ЦКАД-3,4',
    capex: 'CAPEX 190 млрд. руб.',
    content: [
      (
        <p className={`text text_type_main-m`}>
          Переход на&nbsp;эксплуатационную фазу
        </p>
      ),
      (
        <p className={`text text_type_main-m`}>
          Рефинансирование старшего&nbsp;долга
          <span className={`text text_type_main-m-bold`}> 40&nbsp;млрд&nbsp;&#8381;</span>
        </p>
      ),
      (
        <p className={`text text_type_main-m`}>
          Погашение старшего&nbsp;долга через&nbsp;ПП
          <span className={`text text_type_main-m-bold`}> 30&nbsp;млрд&nbsp;&#8381;</span>
        </p>
      ),
    ]
  },
  {
    image: {
      src: IMAGES.skolkovo,
      alt: ALT_VALUES.skolkovo,
    },
    title: 'Инновационный центр «Сколково»',
    listTitle: 'Функции:',
    list: [
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Мастер-план 468&nbsp;Га
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Заказчик-застройщик
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Генпроектировщик
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Генподрядчик
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Эксплуатация
          </p>
        }</ListItem>
      ),
    ],
    content: [
      (
        <p className={`text text_type_main-m`}>
          Программа строительства
          <span className={`text text_type_main-m-bold`}> 74&nbsp;млрд&nbsp;&#8381;</span>
        </p>
      ),
    ]
  },
  {
    image: {
      src: IMAGES.sberRA,
      alt: ALT_VALUES.sberRA,
    }, 
    title: 'Сбер-Рублево-Архангельское',
    listTitle: 'Функции:',
    list: [
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Мастер-план
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Транспортная модель
          </p>
        }</ListItem>
      ),
      (
        <ListItem>{
          <p className={`text text_type_main-m`}>
            Проектирование сетей, дорог и&nbsp;благоустройства
          </p>
        }</ListItem>
      ),
    ],
  },
];

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

export const CURRENT_PROJECTS_INFO_A: TCurrentProjectsInfo[] = [
  {
    image: {
      src: IMAGES.campus,
      alt: ALT_VALUES.campus,
    },
    title: 'Кампус мирового уровня в Мурманске',
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: 'Инициатор',
        },
        {
          icon: ICONS.iconCraneGreen,
          text: 'Застройщик',
        },
        {
          icon: ICONS.iconStampGreen,
          text: 'Концессионер',
        },
        {
          icon: ICONS.iconCoinsGreen,
          text: 'Инвестор в младший долг',
        },
      ]
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: 'Площадь объекта:',
      },
      content: '98.5 тыс. кв. м.',
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: 'Срок концессии:',
      },
      content: '13 лет',
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Инвестиции в проект:',
      },
      content: '23.5 млрд. руб.',
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Стоимость строительства:',
      },
      content: '19.6 млрд. руб.',
    },
  },
  {
    image: {
      src: IMAGES.recreationCenter,
      alt: ALT_VALUES.recreationCenter,
    },
    title: 'Создание центров детского отдыха и образования в',
    titleExtra: [
      'Красноярском крае',
      'Архангельской области',
      'Мурманской области',
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: 'Инициатор',
        },
        {
          icon: ICONS.iconCraneGreen,
          text: 'Застройщик',
        },
        {
          icon: ICONS.iconStampGreen,
          text: 'Концессионер',
        },
        {
          icon: ICONS.iconCoinsGreen,
          text: 'Инвестор в младший долг',
        },
      ]
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: 'Площадь объекта:',
      },
      content: '41.6 тыс. кв. м.',
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: 'Срок концессии:',
      },
      content: '20 лет',
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Инвестиции в проект:',
      },
      content: '13.3 млрд. руб.',
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Стоимость строительства:',
      },
      content: '11.6 млрд. руб.',
    },
  },
  {
    image: {
      src: IMAGES.kaliningrad,
      alt: ALT_VALUES.kaliningrad,
    },
    title: 'Комплексное развитие территории в Калининграде',
    titleExtra: [
      'Гостиницы',
      'Экспоцентр',
      'Медцентр',
      'Жилая застройка',
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: 'Инициатор',
        },
        {
          icon: ICONS.iconCraneGreen,
          text: 'Застройщик',
        },
        {
          icon: ICONS.iconArrowsGreen,
          text: 'Оператор проекта',
        },
      ]
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: 'Площадь объекта:',
      },
      content: '31 тыс. кв. м.',
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: 'Срок концессии:',
      },
      content: '-',
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Инвестиции в проект:',
      },
      content: '11 млрд. руб.',
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Стоимость строительства:',
      },
      content: '-',
    },
  },
];

export const CURRENT_PROJECTS_INFO_B: TCurrentProjectsInfo[] = [
  {
    image: {
      src: IMAGES.skolkovoLoft,
      alt: ALT_VALUES.skolkovoLoft,
    },
    title: '«Лофт квартал» на территории инновационного центра «Сколково»',
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      contentList: [
        {
          icon: ICONS.iconCraneGreen,
          text: 'Застройщик',
        },
      ]
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: 'Площадь объекта:',
      },
      content: '86 тыс. кв. м.',
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Стоимость строительства:',
      },
      content: '10 млрд. руб.',
    },
  },
  {
    image: {
      src: IMAGES.medscan,
      alt: ALT_VALUES.medscan,
    },
    title: 'Создание многопрофильных медицинских центров «Медскан»',
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      contentList: [
        {
          icon: ICONS.iconToolsGreen,
          text: 'Генеральный проектировщик',
        },
      ]
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: 'Площадь объекта:',
      },
      content: '30 тыс. кв. м.',
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Стоимость строительства:',
      },
      content: '-',
    },
  },
  {
    image: {
      src: IMAGES.wildberries,
      alt: ALT_VALUES.wildberries,
    },
    title: 'Складские комплексы «Wildberries»',
    titleExtra: [
      'Саратовская область',
      'Оренбургская',
      'Орловская область',
      'Челябинская область',
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      contentList: [
        {
          icon: ICONS.iconToolsGreen,
          text: 'Генеральный проектировщик',
        },
      ]
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: 'Площадь объекта:',
      },
      content: '718.1 тыс. кв. м.',
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: 'Стоимость строительства:',
      },
      content: '-',
    },
  },
];

export const COLLECTION_IMAGES_A: TImage[] = [
  {
    src: IMAGES.collection1,
    alt: ALT_VALUES.recreationCenter,
  },
  {
    src: IMAGES.collection2,
    alt: ALT_VALUES.campus,
  },
  {
    src: IMAGES.collection3,
    alt: ALT_VALUES.someImage,
  },
];

export const COLLECTION_IMAGES_B: TImage[] = [
  {
    src: IMAGES.collection4,
    alt: ALT_VALUES.skolkovo,
  },
  {
    src: IMAGES.collection5,
    alt: ALT_VALUES.someImage,
  },
  {
    src: IMAGES.collection6,
    alt: ALT_VALUES.someImage,
  },
  {
    src: IMAGES.collection7,
    alt: ALT_VALUES.someImage,
  },
];
