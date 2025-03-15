/* eslint-disable react/jsx-key */
import {
  TImage,
  TGMInfo,
  TAboutCompanyInfo,
  TCompletedProjectsInfo,
  TCurrentProjectsInfo,
  ContentType,
  GeoContentType,
} from "./types";
import { IMAGES, ICONS, ALT_VALUES, LOGOS } from "./constants";

export const TABS_CONTENT_EN: ContentType<string> = {
  aboutCompany: "About company",
  completedProjects: "Completed Projects",
  currentProjects: "2024 Project Portfolio",
  generalManager: "General Director",
  contacts: "Contacts",
};

export const ABOUT_COMPANY_INFO_EN_A: TAboutCompanyInfo[] = [
  {
    icons: [
      { src: ICONS.iconFlag, alt: "" },
      { src: ICONS.iconArrows, alt: "" },
    ],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Initiator&nbsp;</span>
        and&nbsp;
        <span className={`text text_type_bold`}>full-cycle operator&nbsp;</span>
        of public-private partnership projects
      </p>
    ),
  },
  {
    icons: [{ src: ICONS.iconDoc, alt: "" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Founder </span>
        of&nbsp;special project companies
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
        Proven expertise in delivering social, educational, and transport
        infrastructure projects with state participation
      </p>
    ),
  },
];

export const ABOUT_COMPANY_INFO_EN_B: TAboutCompanyInfo[] = [
  {
    icons: [{ src: ICONS.iconCoins, alt: "" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Provider&nbsp;</span>
        of capital, shareholder loans, and subordinated debt
      </p>
    ),
  },
  {
    icons: [{ src: ICONS.iconHandshake, alt: "" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        <span className={`text text_type_bold`}>Partner&nbsp;</span>
        in&nbsp;operational developer companies
      </p>
    ),
  },
  {
    icons: [{ src: ICONS.iconSFS, alt: "Логотип Дом РФ" }],
    content: (
      <p className={`text text_type_normal text_type_align-center`}>
        Use of&nbsp;state financial support mechanisms for&nbsp;project
        structuring and&nbsp;financing
      </p>
    ),
  },
];

export const GM_INFO_EN: TGMInfo[] = [
  {
    period: {
      start: "2010",
      end: "2015",
    },
    info: (
      <p className={`text text_type_normal`}>
        Responsible for&nbsp;large-scale road and&nbsp;airport construction
        projects (M-5, M-1, M-4 highways; Domodedovo and&nbsp;Koltsovo
        airports), residential and&nbsp;commercial real estate construction
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
        Led the design and construction of Skolkovo Innovation Center with a
        total budget exceeding
        <span className={`text text_type_bold`}> 866&nbsp;mln.&nbsp;USD</span>
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
        Member of&nbsp;the&nbsp;Organizing Committee for&nbsp;Universiade-2023
        in&nbsp;Yekaterinburg, responsible&nbsp;for infrastructure development
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
        Managed investment projects of Avtoban - largest Russian
        road&nbsp;constructor totaling over
        <span className={`text text_type_bold`}>
          {" "}
          3,6&nbsp;billion&nbsp;USD
        </span>
      </p>
    ),
  },
  {
    period: {
      end: "2023",
    },
    info: <p className={`text text_type_normal`}>Founded Veatek</p>,
  },
];

export const COMPLETED_PROJECTS_INFO_EN: TCompletedProjectsInfo[] = [
  {
    image: {
      src: IMAGES.tolyatti,
      alt: ALT_VALUES.tolyatti,
    },
    title: "Tolyatti Bypass",
    capex: "CAPEX 1,6 billion USD",
    listTitle: "Financing secured:",
    list: [
      <p className={`text text_type_normal`}>
        Infrastructure bonds
        <span className={`text text_type_bold`}> 277&nbsp;mln.&nbsp;USD</span>
      </p>,
      <p className={`text text_type_normal`}>
        IBL
        <span className={`text text_type_bold`}> 105&nbsp;mln.&nbsp;USD</span>
      </p>,
    ],
  },
  {
    image: {
      src: IMAGES.ckad,
      alt: ALT_VALUES.ckad,
    },
    title: "CCR (Central Ring Road)-3,4",
    capex: "CAPEX 2,2 billion USD",
    content: [
      <p className={`text text_type_normal`}>
        Transition to&nbsp;operational phase
      </p>,
      <p className={`text text_type_normal`}>
        Senior&nbsp;debt refinancing
        <span className={`text text_type_bold`}> 462&nbsp;mln.&nbsp;USD</span>
      </p>,
      <p className={`text text_type_normal`}>
        Senior&nbsp;debt repayment via&nbsp;PP
        <span className={`text text_type_bold`}> 347&nbsp;mln.&nbsp;USD</span>
      </p>,
    ],
  },
  {
    image: {
      src: IMAGES.skolkovo,
      alt: ALT_VALUES.skolkovo,
    },
    title: "Skolkovo Innovation Center",
    listTitle: "Functions:",
    list: [
      <p className={`text text_type_normal`}>Master planning (468&nbsp;ha)</p>,
      <p className={`text text_type_normal`}>Developer</p>,
      <p className={`text text_type_normal`}>General designer</p>,
      <p className={`text text_type_normal`}>General contractor</p>,
      <p className={`text text_type_normal`}>Operations</p>,
    ],
    content: [
      <p className={`text text_type_normal`}>
        Сonstruction programme
        <span className={`text text_type_bold`}> 855&nbsp;mln.&nbsp;USD</span>
      </p>,
    ],
  },
  {
    image: {
      src: IMAGES.sberRA,
      alt: ALT_VALUES.sberRA,
    },
    title: "Sber-Rublovo-Arkhangelskoye",
    listTitle: "Functions:",
    list: [
      <p className={`text text_type_normal`}>Master planning</p>,
      <p className={`text text_type_normal`}>Transport modeling</p>,
      <p className={`text text_type_normal`}>
        Design&nbsp;of&nbsp;utilities, roads, and&nbsp;landscaping
      </p>,
    ],
  },
];

export const CURRENT_PROJECTS_INFO_EN_A: TCurrentProjectsInfo[] = [
  {
    image: {
      src: IMAGES.campus,
      alt: ALT_VALUES.campus,
    },
    title: "World-Class Campus in Murmansk",
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Roles:",
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: "Initiator",
        },
        {
          icon: ICONS.iconCraneGreen,
          text: "Developer",
        },
        {
          icon: ICONS.iconStampGreen,
          text: "Concessionaire",
        },
        {
          icon: ICONS.iconCoinsGreen,
          text: "Junior Debt Investor",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Object area:",
      },
      content: "98 500 sq.m.",
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: "Сoncession period:",
      },
      content: "13 years",
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Project investments:",
      },
      content: "272 mln. USD",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Construction cost:",
      },
      content: "226 mln. USD",
    },
  },
  {
    image: {
      src: IMAGES.recreationCenter,
      alt: ALT_VALUES.recreationCenter,
    },
    title: "Creation of Children’s Recreation and Education Centers in:",
    titleExtra: ["Krasnoyarsk Krai", "Arkhangelsk Oblast", "Murmansk Oblast"],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Roles:",
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: "Initiator",
        },
        {
          icon: ICONS.iconCraneGreen,
          text: "Developer",
        },
        {
          icon: ICONS.iconStampGreen,
          text: "Concessionaire",
        },
        {
          icon: ICONS.iconCoinsGreen,
          text: "Junior Debt Investor",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Object area:",
      },
      content: "41 600 sq.m.",
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: "Сoncession period:",
      },
      content: "20 years",
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Project investments:",
      },
      content: "154 mln. USD",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Construction cost:",
      },
      content: "134 mln. USD",
    },
  },
  {
    image: {
      src: IMAGES.kaliningrad,
      alt: ALT_VALUES.kaliningrad,
    },
    title: "Integrated Territory Development in Kaliningrad",
    titleExtra: [
      "Hotels",
      "Expo center",
      "Medical center",
      "Residential development",
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Roles:",
      },
      contentList: [
        {
          icon: ICONS.iconFlagGreen,
          text: "Initiator",
        },
        {
          icon: ICONS.iconCraneGreen,
          text: "Developer",
        },
        {
          icon: ICONS.iconArrowsGreen,
          text: "Project operator",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Object area:",
      },
      content: "31 000 sq.m.",
    },
    period: {
      category: {
        icon: ICONS.iconArrowClockWhite,
        text: "Сoncession period:",
      },
      content: "-",
    },
    investment: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Project investments:",
      },
      content: "134 mln. USD",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Construction cost:",
      },
      content: "-",
    },
  },
];

export const CURRENT_PROJECTS_INFO_EN_B: TCurrentProjectsInfo[] = [
  {
    image: {
      src: IMAGES.skolkovoLoft,
      alt: ALT_VALUES.skolkovoLoft,
    },
    title: "Loft Quarter in Skolkovo Innovation Center",
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Roles:",
      },
      contentList: [
        {
          icon: ICONS.iconCraneGreen,
          text: "Developer",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Object area:",
      },
      content: "86 000 sq.m.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Construction cost:",
      },
      content: "116 mln. USD",
    },
  },
  {
    image: {
      src: IMAGES.medscan,
      alt: ALT_VALUES.medscan,
    },
    title: "Creation of Multidisciplinary Medical Centers Medskan",
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Roles:",
      },
      contentList: [
        {
          icon: ICONS.iconToolsGreen,
          text: "General designer",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Object area:",
      },
      content: "30 000 sq.m.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Construction cost:",
      },
      content: "-",
    },
  },
  {
    image: {
      src: IMAGES.wildberries,
      alt: ALT_VALUES.wildberries,
    },
    title: "Warehouse Complexes for Wildberries",
    titleExtra: [
      "Saratov Oblast",
      "Orenburg Oblast",
      "Oryol Oblast",
      "Chelyabinsk Oblast",
    ],
    role: {
      category: {
        icon: ICONS.iconCheckmarkWhite,
        text: "Roles:",
      },
      contentList: [
        {
          icon: ICONS.iconToolsGreen,
          text: "General designer",
        },
      ],
    },
    area: {
      category: {
        icon: ICONS.iconSquareWhite,
        text: "Object area:",
      },
      content: "718 000 sq.m.",
    },
    cost: {
      category: {
        icon: ICONS.iconCoinsWhite,
        text: "Construction cost:",
      },
      content: "-",
    },
  },
];

export const COLLECTION_IMAGES_EN_A: TImage[] = [
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

export const COLLECTION_IMAGES_EN_B: TImage[] = [
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

export const COLLECTION_IMAGES_TABLET_EN: TImage[] = [
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

export const COLLECTION_IMAGES_MOBILE_EN: TImage[] = [
  {
    src: IMAGES.collection4,
    alt: ALT_VALUES.skolkovo,
  },
];

export const GEO_CAPTIONS_EN: GeoContentType<string> = {
  loft: <span>Loft Quarter and&nbsp;Skolkovo Innovation Center</span>,
  sberRA: <span>Sber-RublovoArkhangelskoye</span>,
  CRR: <span>CRR&nbsp;(Central&nbsp;Ring Road)-3,4</span>,
  campus: <span>World-Class&nbsp;Campus in&nbsp;Murmansk</span>,
  childCenters: (
    <span>Children’s&nbsp;Recreation and&nbsp;Education&nbsp;Centers</span>
  ),
  terrDev: <p>Integrated Territory Development in&nbsp;Kaliningrad</p>,
  byPass: <p>By – pass Tolyatti</p>,
  medscan: <p>Multidisciplinary Medical Centers Medskan</p>,
  wildberries: <p>Warehouse Complexes Wildberries</p>,
};
