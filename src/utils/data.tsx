import { IMAGES, ICONS } from "./constants";

type TGMInfo = {
  period: string;
  text: string;
  accent?: string;
};

const GM_INFO: TGMInfo[] = [
  {
    period: '2010 - 2015',
    text: 'Отвечал за реализацию крупных проектов по строительству дорог и аэропортов (дороги М-5, М-1, М-4, аэропорты Домодедово и Кольцово), жилой и коммерческой недвижимости',
  },
  {
    period: '2015 - 2021',
    text: 'Руководил проектированием и строительством ИЦ «Сколково» с общей программой',
    accent: '&nbsp;более 75 млрд &#8381;',
  },
  {
    period: '2020 - 2021',
    text: 'Был членом Оргкомитета «Универсиады-2023» в городе Екатеринбург ние инфраструктуры',
  },
  {
    period: '2021 - 2023',
    text: 'Руководил инвестиционными проектами АО ДСК «Автобан» на сумму',
    accent: '&nbsp;более 320 млрд &#8381;',
  },
  {
    period: '2023',
    text: 'Создал ООО «Веатек» – оператора инфраструктурных проектов',
  },
];

type TItem = {
  text: string;
  accent?: string;
};

type TCompletedProjectsInfo = {
  image: string;
  title: string;
  capex?: string;
  listTitle?: string;
  list?: TItem[];
  content?: TItem[];
}

const COMPLETED_PROJECTS_INFO: TCompletedProjectsInfo[] = [
  {
    image: IMAGES.tolyatti,
    title: 'Обход Тольятти',
    capex: 'CAPEX 140 млрд &#8381;',
    listTitle: 'Привлечено:',
    list: [
      {
        text: 'Инфраструктурные облигации',
        accent: '&nbsp;24 млрд &#8381;',
      },
      {
        text: 'ИБК',
        accent: '&nbsp;9.1 млрд &#8381;',
      },
    ],
  },
  {
    image: IMAGES.ckad,
    title: 'ЦКАД-3,4',
    capex: 'CAPEX 190 млрд &#8381;',
    content: [
      {
        text: 'Переход на эксплуатационную фазу',
      },
      {
        text: 'Рефинансирование старшего долга',
        accent: '&nbsp;40 млрд &#8381;',
      },
      {
        text: 'Погашение старшего долга через ПП',
        accent: '&nbsp;30 млрд &#8381;',
      },
    ]
  },
  {
    image: IMAGES.skolkovo,
    title: 'Инновационный центр "Сколково"',
    listTitle: 'Функции:',
    list: [
      {
        text: 'Мастер-план 468 Га',
      },
      {
        text: 'Заказчик-застройщик',
      },
      {
        text: 'Генпроектировщик',
      },
      {
        text: 'Генподрядчик',
      },
      {
        text: 'Эксплуатация',
      },
    ],
    content: [
      {
        text: 'Программа строительства',
        accent: '&nbsp;74 млрд &#8381;',
      },
    ]
  },
  {
    image: IMAGES.sberRA,
    title: 'Сбер-РублевоАрхангельское',
    listTitle: 'Функции:',
    list: [
      {
        text: 'Мастер-план',
      },
      {
        text: 'Транспортная модель',
      },
      {
        text: 'Проектирование сетей, дорог и благоустройства',
      },
    ],
  },
]

type TItemWithIcon = {
  icon: string;
  text: string;
};

type TCategoryItem = {
  category: TItemWithIcon;
  content: string | TItemWithIcon[];
};

type TCurrentProjectsInfo = {
  image: string;
  title: string;
  titleExtra?: string[];
  role: TCategoryItem;
  area: TCategoryItem;
  period?: TCategoryItem;
  investment?: TCategoryItem;
  cost: TCategoryItem;
};

const CURRENT_PROJECTS_INFO_A: TCurrentProjectsInfo[] = [
  {
    image: IMAGES.campus,
    title: 'Кампус мирового уровня в Мурманске',
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      content: [
        {
          icon: ICONS.iconFlag,
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
      content: '98.5 тыс.м &sup2;',
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
        icon: ICONS.iconCoins,
        text: 'Инвестиции в проект:',
      },
      content: '23.5 млрд &#8381;',
    },
    cost: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Стоимость строительства:',
      },
      content: '19.6 млрд &#8381;',
    },
  },
  {
    image: IMAGES.recreationCenter,
    title: 'Создание центров детского отдыха и образования в',
    titleExtra: [
      'Красноярском крае',
      'Архангельсткой области',
      'Мурманской области',
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      content: [
        {
          icon: ICONS.iconFlag,
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
      content: '41.6 тыс.м &sup2;',
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
        icon: ICONS.iconCoins,
        text: 'Инвестиции в проект:',
      },
      content: '13.3 млрд &#8381;',
    },
    cost: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Стоимость строительства:',
      },
      content: '11.6 млрд &#8381;',
    },
  },
  {
    image: IMAGES.kaliningrad,
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
      content: [
        {
          icon: ICONS.iconFlag,
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
      content: '31 тыс.м &sup2;',
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: 'Срок концессии:',
      },
      content: '',
    },
    investment: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Инвестиции в проект:',
      },
      content: '11 млрд &#8381;',
    },
    cost: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Стоимость строительства:',
      },
      content: '',
    },
  },
];

const CURRENT_PROJECTS_INFO_B: TCurrentProjectsInfo[] = [
  {
    image: IMAGES.skolkovoLoft,
    title: '"Лофт квартал" на территории инновационного центра "Сколково"',
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      content: [
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
      content: '86 тыс.м &sup2;',
    },
    cost: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Стоимость строительства:',
      },
      content: '10 млрд &#8381;',
    },
  },
  {
    image: IMAGES.medscan,
    title: 'Создание многопрофильных медицинских центров "Медскан"',
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: 'Роль в проекте:',
      },
      content: [
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
      content: '30 тыс.м &sup2;',
    },
    cost: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Стоимость строительства:',
      },
      content: '',
    },
  },
  {
    image: IMAGES.wildberries,
    title: 'Складские комплексы "Wildberries"',
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
      content: [
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
      content: '718.1 тыс. м&sup2;',
    },
    cost: {
      category: {
        icon: ICONS.iconCoins,
        text: 'Стоимость строительства:',
      },
      content: '',
    },
  },
];

export {
  GM_INFO,
  COMPLETED_PROJECTS_INFO,
  CURRENT_PROJECTS_INFO_A,
  CURRENT_PROJECTS_INFO_B,
};
