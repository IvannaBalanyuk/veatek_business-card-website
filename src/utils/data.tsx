/* eslint-disable react/jsx-key */
import {
  TImage,
  TGMInfo,
  TAboutCompanyInfo,
  TCompletedProjectsInfo,
  TCurrentProjectsInfo,
} from "./types";
import { IMAGES, ICONS, ALT_VALUES, LOGOS } from "./constants";

export const ABOUT_COMPANY_INFO_A: TAboutCompanyInfo[] = [
  {
    icons: [
      { src: ICONS.iconFlag, alt: "" },
      { src: ICONS.iconArrows, alt: "" },
    ],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Инициатор&nbsp;</span>
        и&nbsp;
        <span className={`text text_type_bold`}>
          оператор полного цикла&nbsp;
        </span>
        проектов государственно-частного партнерства
      </p>
    ),
  },
  {
    icons: [{ src: ICONS.iconDoc, alt: "" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Учредитель </span>
        в&nbsp;специальных проектных компаниях
      </p>
    ),
  },
  {
    icons: [
      { src: ICONS.iconCase, alt: "" },
      { src: ICONS.iconSearch, alt: "" },
    ],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        Подтвержденный опыт и&nbsp;глубокая экспертиза в&nbsp;реализации
        проектов социальной, образовательной и&nbsp;транспортной инфраструктуры
        с&nbsp;государственным участием
      </p>
    ),
  },
];

export const ABOUT_COMPANY_INFO_B: TAboutCompanyInfo[] = [
  {
    icons: [{ src: ICONS.iconCoins, alt: "" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Провайдер&nbsp;</span>
        капитала, акционерных займов и&nbsp;младшего долга
      </p>
    ),
  },
  {
    icons: [{ src: ICONS.iconHandshake, alt: "" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Партнер&nbsp;</span>
        в&nbsp;операционных компаниях-застройщиках
      </p>
    ),
  },
  {
    icons: [{ src: LOGOS.logoDomRF, alt: "Логотип Дом РФ" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        Использование государственных финансовых мер поддержки
        при&nbsp;структурировании проекта и&nbsp;привлечении финансирования
      </p>
    ),
  },
];

export const GM_INFO: TGMInfo[] = [
  {
    period: {
      start: "2010",
      end: "2015",
    },
    info: (
      <p className={`text text_type_normal`}>
        Отвечал за&nbsp;реализацию крупных проектов по&nbsp;строительству дорог
        и&nbsp;аэропортов (дороги М-5, М-1, М-4, аэропорты Домодедово
        и&nbsp;Кольцово), жилой и&nbsp;коммерческой недвижимости
      </p>
    ),
  },
  {
    period: {
      start: "2015",
      end: "2021",
    },
    info: (
      <p className={`text text_type_normal`}>
        Руководил проектированием и&nbsp;строительством ИЦ&nbsp;«Сколково»
        с&nbsp;общей программой
        <span className={`text text_type_bold`}>
          {" "}
          более 75&nbsp;млрд.&nbsp;руб.
        </span>
      </p>
    ),
  },
  {
    period: {
      start: "2020",
      end: "2021",
    },
    info: (
      <p className={`text text_type_normal`}>
        Был членом Оргкомитета «Универсиады-2023» в&nbsp;городе Екатеринбург,
        отвечал за&nbsp;создание инфраструктуры
      </p>
    ),
  },
  {
    period: {
      start: "2021",
      end: "2023",
    },
    info: (
      <p className={`text text_type_normal`}>
        Руководил инвестиционными проектами АО&nbsp;ДСК&nbsp;«Автобан»
        на&nbsp;сумму
        <span className={`text text_type_bold`}>
          {" "}
          более 320&nbsp;млрд.&nbsp;руб.
        </span>
      </p>
    ),
  },
  {
    period: {
      end: "2023",
    },
    info: (
      <p className={`text text_type_normal`}>
        Создал ООО&nbsp;«Веатек» – оператора инфраструктурных&nbsp;проектов
      </p>
    ),
  },
];

export const COMPLETED_PROJECTS_INFO: TCompletedProjectsInfo[] = [
  {
    image: {
      src: IMAGES.tolyatti,
      alt: ALT_VALUES.tolyatti,
    },
    title: "Обход Тольятти",
    capex: "CAPEX 140 млрд. руб.",
    listTitle: "Привлечено:",
    list: [
      <p className={`text text_type_normal`}>
        Инфраструктурные облигации
        <span className={`text text_type_bold`}> 24&nbsp;млрд.&nbsp;руб.</span>
      </p>,
      <p className={`text text_type_normal`}>
        ИБК
        <span className={`text text_type_bold`}> 9.1&nbsp;млрд.&nbsp;руб.</span>
      </p>,
    ],
  },
  {
    image: {
      src: IMAGES.ckad,
      alt: ALT_VALUES.ckad,
    },
    title: "ЦКАД-3,4",
    capex: "CAPEX 190 млрд. руб.",
    content: [
      <p className={`text text_type_normal`}>
        Переход на&nbsp;эксплуатационную фазу
      </p>,
      <p className={`text text_type_normal`}>
        Рефинансирование старшего&nbsp;долга
        <span className={`text text_type_bold`}> 40&nbsp;млрд.&nbsp;руб.</span>
      </p>,
      <p className={`text text_type_normal`}>
        Погашение старшего&nbsp;долга через&nbsp;ПП
        <span className={`text text_type_bold`}> 30&nbsp;млрд.&nbsp;руб.</span>
      </p>,
    ],
  },
  {
    image: {
      src: IMAGES.skolkovo,
      alt: ALT_VALUES.skolkovo,
    },
    title: "Инновационный центр «Сколково»",
    listTitle: "Функции:",
    list: [
      <p className={`text text_type_normal`}>Мастер-план 468&nbsp;Га</p>,
      <p className={`text text_type_normal`}>Заказчик-застройщик</p>,
      <p className={`text text_type_normal`}>Генпроектировщик</p>,
      <p className={`text text_type_normal`}>Генподрядчик</p>,
      <p className={`text text_type_normal`}>Эксплуатация</p>,
    ],
    content: [
      <p className={`text text_type_normal`}>
        Программа строительства
        <span className={`text text_type_bold`}> 74&nbsp;млрд.&nbsp;руб.</span>
      </p>,
    ],
  },
  {
    image: {
      src: IMAGES.sberRA,
      alt: ALT_VALUES.sberRA,
    },
    title: "Сбер-Рублево-Архангельское",
    listTitle: "Функции:",
    list: [
      <p className={`text text_type_normal`}>Мастер-план</p>,
      <p className={`text text_type_normal`}>Транспортная модель</p>,
      <p className={`text text_type_normal`}>
        Проектирование сетей, дорог и&nbsp;благоустройства
      </p>,
    ],
  },
];

export const CURRENT_PROJECTS_INFO_A: TCurrentProjectsInfo[] = [
  {
    image: {
      src: IMAGES.campus,
      alt: ALT_VALUES.campus,
    },
    title: "Кампус мирового уровня в Мурманске",
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Роль в проекте:",
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: "Инициатор",
        },
        {
          icon: ICONS.iconCraneGreen,
          text: "Застройщик",
        },
        {
          icon: ICONS.iconStampGreen,
          text: "Концессионер",
        },
        {
          icon: ICONS.iconCoinsGreen,
          text: "Инвестор в младший долг",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Площадь объекта:",
      },
      content: "98.5 тыс. кв. м.",
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: "Срок концессии:",
      },
      content: "13 лет",
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Инвестиции в проект:",
      },
      content: "23.5 млрд. руб.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Стоимость строительства:",
      },
      content: "19.6 млрд. руб.",
    },
  },
  {
    image: {
      src: IMAGES.recreationCenter,
      alt: ALT_VALUES.recreationCenter,
    },
    title: "Создание центров детского отдыха и образования в",
    titleExtra: [
      "Красноярском крае",
      "Архангельской области",
      "Мурманской области",
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Роль в проекте:",
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: "Инициатор",
        },
        {
          icon: ICONS.iconCraneGreen,
          text: "Застройщик",
        },
        {
          icon: ICONS.iconStampGreen,
          text: "Концессионер",
        },
        {
          icon: ICONS.iconCoinsGreen,
          text: "Инвестор в младший долг",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Площадь объекта:",
      },
      content: "41.6 тыс. кв. м.",
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: "Срок концессии:",
      },
      content: "20 лет",
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Инвестиции в проект:",
      },
      content: "13.3 млрд. руб.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Стоимость строительства:",
      },
      content: "11.6 млрд. руб.",
    },
  },
  {
    image: {
      src: IMAGES.kaliningrad,
      alt: ALT_VALUES.kaliningrad,
    },
    title: "Комплексное развитие территории в Калининграде",
    titleExtra: ["Гостиницы", "Экспоцентр", "Медцентр", "Жилая застройка"],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Роль в проекте:",
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: "Инициатор",
        },
        {
          icon: ICONS.iconCraneGreen,
          text: "Застройщик",
        },
        {
          icon: ICONS.iconArrowsGreen,
          text: "Оператор проекта",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Площадь объекта:",
      },
      content: "31 тыс. кв. м.",
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: "Срок концессии:",
      },
      content: "-",
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Инвестиции в проект:",
      },
      content: "11 млрд. руб.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Стоимость строительства:",
      },
      content: "-",
    },
  },
];

export const CURRENT_PROJECTS_INFO_B: TCurrentProjectsInfo[] = [
  {
    image: {
      src: IMAGES.skolkovoLoft,
      alt: ALT_VALUES.skolkovoLoft,
    },
    title: "«Лофт квартал» на территории инновационного центра «Сколково»",
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Роль в проекте:",
      },
      contentList: [
        {
          icon: ICONS.iconCraneGreen,
          text: "Застройщик",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Площадь объекта:",
      },
      content: "86 тыс. кв. м.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Стоимость строительства:",
      },
      content: "10 млрд. руб.",
    },
  },
  {
    image: {
      src: IMAGES.medscan,
      alt: ALT_VALUES.medscan,
    },
    title: "Создание многопрофильных медицинских центров «Медскан»",
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Роль в проекте:",
      },
      contentList: [
        {
          icon: ICONS.iconToolsGreen,
          text: "Генеральный проектировщик",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Площадь объекта:",
      },
      content: "30 тыс. кв. м.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Стоимость строительства:",
      },
      content: "-",
    },
  },
  {
    image: {
      src: IMAGES.wildberries,
      alt: ALT_VALUES.wildberries,
    },
    title: "Складские комплексы «Wildberries»",
    titleExtra: [
      "Саратовская область",
      "Оренбургская область",
      "Орловская область",
      "Челябинская область",
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Роль в проекте:",
      },
      contentList: [
        {
          icon: ICONS.iconToolsGreen,
          text: "Генеральный проектировщик",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Площадь объекта:",
      },
      content: "718.1 тыс. кв. м.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Стоимость строительства:",
      },
      content: "-",
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

export const COLLECTION_IMAGES_TABLET: TImage[] = [
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
  {
    src: IMAGES.collection4,
    alt: ALT_VALUES.skolkovo,
  },
];

export const COLLECTION_IMAGES_MOBILE: TImage[] = [
  {
    src: IMAGES.collection4,
    alt: ALT_VALUES.skolkovo,
  },
];
