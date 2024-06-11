import collection1 from "../images/collection1.png";
import collection2 from "../images/collection2.png";
import collection3 from "../images/collection3.png";
import collection4 from "../images/collection4.png";
import collection5 from "../images/collection5.png";
import collection6 from "../images/collection6.png";
import collection7 from "../images/collection7.png";

import campus from "../images/campus.png";
import ckad from "../images/ckad.png";
import kaliningrad from "../images/kaliningrad.png";
import medscan from "../images/medscan.png";
import recreationCenter from "../images/recreation-center.png";
import sberRA from "../images/sber-ra.png";
import skolkovoLoft from "../images/skolkovo-loft.png";
import skolkovo from "../images/skolkovo.png";
import tolyatti from "../images/tolyatti.png";
import wildberries from "../images/wildberries.png";
import gmPhoto from "../images/АС.png";

import iconCase from "../images/about-company/icon_bg_case.png";
import iconSearch from "../images/about-company/icon_bg_search.png";
import iconArrows from "../images/about-company/icon_circle_arrows.png";
import iconCoins from "../images/about-company/icon_circle_coins.png";
import iconDoc from "../images/about-company/icon_circle_doc.png";
import iconFlag from "../images/about-company/icon_circle_flag.png";
import iconHandshake from "../images/about-company/icon_circle_handshake.png";
import iconArrowsGreen from "../images/icons/icon_bg_arrows.png";
import iconCoinsGreen from "../images/icons/icon_bg_coins.png";
import iconCraneGreen from "../images/icons/icon_bg_crane.png";
import iconFlagGreen from "../images/icons/icon_bg_flag.png";
import iconStampGreen from "../images/icons/icon_bg_stamp.png";
import iconToolsGreen from "../images/icons/icon_bg_tools.png";
import iconArrowClockWhite from "../images/icons/icon_bw_arrow_clock.png";
import iconCheckmarkWhite from "../images/icons/icon_bw_checkmark.png";
import iconCoinsWhite from "../images/icons/icon_bw_coins.png";
import iconSquareWhite from "../images/icons/icon_bw_square.png";
import iconPerson from "../images/icons/icon_person.png";

import logoVeatek from "../images/logos/logo_veatek.png";
import logoDomRF from "../images/logos/logo_dom_rf.png";
import logoRosatom from "../images/logos/logo_rosatom.png";
import logoRoscamps from "../images/logos/logo_roscamps.png";
import logoTurismRF from "../images/logos/logo_turism_rf.png";

import map from "../images/map-images/map.png";
import pinBlue from "../images/map-images/pin_blue.png";
import pinGreen from "../images/map-images/pin_green3.png";
import pinOrange from "../images/map-images/pin_orange.png";
import pinPurple from "../images/map-images/pin_purple.png";
import pinRed from "../images/map-images/pin_red3.png";
import pinYellow from "../images/map-images/pin_yellow.png";

export const ICONS = {
  iconCase,
  iconSearch,
  iconArrows,
  iconCoins,
  iconDoc,
  iconFlag,
  iconHandshake,
  iconArrowsGreen,
  iconCoinsGreen,
  iconCraneGreen,
  iconFlagGreen,
  iconStampGreen,
  iconToolsGreen,
  iconArrowClockWhite,
  iconCheckmarkWhite,
  iconCoinsWhite,
  iconSquareWhite,
  iconPerson,
};

export const IMAGES = {
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  collection7,
  campus,
  ckad,
  kaliningrad,
  medscan,
  recreationCenter,
  sberRA,
  skolkovoLoft,
  skolkovo,
  tolyatti,
  wildberries,
  gmPhoto,
};

export const LOGOS = {
  logoVeatek,
  logoDomRF,
  logoRosatom,
  logoRoscamps,
  logoTurismRF,
};

export const MAP_IMAGES = {
  map,
  pinBlue,
  pinGreen,
  pinOrange,
  pinPurple,
  pinRed,
  pinYellow,
};

export const ALT_VALUES = {
  recreationCenter: "Центр детского отдыха и образования, макет",
  campus: "Кампус в Мурманске, макет",
  kaliningrad: "Комплексное развитие территории в Калининграде, макет",
  skolkovoLoft: "Лофт квартал, Сколково",
  medscan: "Многопрофильный медицинский центр Медскан",
  wildberries: "Складской комплекс Wildberries",
  tolyatti: "Обход Тольятти",
  ckad: "ЦКАД-3,4",
  skolkovo: "Инновационный центр Сколково",
  sberRA: "Сбер-Рублево-Архангельское",
  someImage: "Изображение",
  map: "Карта с географией проектов",
};

type Routes = {
  home: string;
  ingredientId: string;
  order: string;
  login: string;
  register: string;
  resetPassword: string;
  forgotPassword: string;
  profile: {
    index: string;
    orders: string;
    orderNumber: string;
  };
  feed: string;
  feedOrderNumber: string;
  page404: string;
};

export const routes: Routes = {
  home: "/",
  ingredientId: "/ingredients/:ingredientId",
  order: "/order",
  login: "/login",
  register: "/register",
  resetPassword: "/reset-password",
  forgotPassword: "/forgot-password",
  profile: {
    index: "/profile",
    orders: "/profile/orders",
    orderNumber: "/profile/orders/:number",
  },
  feed: "/feed",
  feedOrderNumber: "/feed/:number",
  page404: "*",
};

export const wsUrl: { feedOrders: string; userOrders: string } = {
  feedOrders: "wss://norma.nomoreparties.space/orders/all",
  userOrders: "wss://norma.nomoreparties.space/orders",
};
