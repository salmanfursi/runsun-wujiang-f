import type { TFunction } from "i18next";
import banner from "../assets/client/factory-front-hd.jpg";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { R2_BASE } from "../lib/r2";

type Card = {
  title: string;
  img: string;
  desc: string;
};

const getSpringSummerFall = (t: TFunction): Card[] => [
  // Weaving Photos (One)
  { title: "Weaving Collection 01", img: "/optimized/collections/spring-summer/weaving-one-01.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 02", img: "/optimized/collections/spring-summer/weaving-one-02.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 03", img: "/optimized/collections/spring-summer/weaving-one-03.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 04", img: "/optimized/collections/spring-summer/weaving-one-04.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 05", img: "/optimized/collections/spring-summer/weaving-one-05.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 06", img: "/optimized/collections/spring-summer/weaving-one-06.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 07", img: "/optimized/collections/spring-summer/weaving-one-07.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 08", img: "/optimized/collections/spring-summer/weaving-one-08.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 09", img: "/optimized/collections/spring-summer/weaving-one-09.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 10", img: "/optimized/collections/spring-summer/weaving-one-10.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 11", img: "/optimized/collections/spring-summer/weaving-one-11.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 12", img: "/optimized/collections/spring-summer/weaving-one-12.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 13", img: "/optimized/collections/spring-summer/weaving-one-13.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 14", img: "/optimized/collections/spring-summer/weaving-one-14.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 15", img: "/optimized/collections/spring-summer/weaving-one-15.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 16", img: "/optimized/collections/spring-summer/weaving-one-16.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 17", img: "/optimized/collections/spring-summer/weaving-one-17.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 18", img: "/optimized/collections/spring-summer/weaving-one-18.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 19", img: "/optimized/collections/spring-summer/weaving-one-19.webp", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 20", img: "/optimized/collections/spring-summer/weaving-one-20.webp", desc: "Premium weaving craftsmanship" },
  // Weaving Photos (Two)
  { title: "Weaving Series 01", img: "/optimized/collections/spring-summer/weaving-two-01.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 02", img: "/optimized/collections/spring-summer/weaving-two-02.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 03", img: "/optimized/collections/spring-summer/weaving-two-03.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 04", img: "/optimized/collections/spring-summer/weaving-two-04.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 05", img: "/optimized/collections/spring-summer/weaving-two-05.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 06", img: "/optimized/collections/spring-summer/weaving-two-06.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 07", img: "/optimized/collections/spring-summer/weaving-two-07.webp", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 08", img: "/optimized/collections/spring-summer/weaving-two-08.webp", desc: "Contemporary weaving designs" },
  // Spring/Summer Main Collection
  { title: `${t('collection.springSummerCard.title')} 01`, img: "/optimized/collections/spring-summer/spring-summer-01.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 02`, img: "/optimized/collections/spring-summer/spring-summer-02.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 03`, img: "/optimized/collections/spring-summer/spring-summer-03.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 04`, img: "/optimized/collections/spring-summer/spring-summer-04.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 05`, img: "/optimized/collections/spring-summer/spring-summer-05.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 06`, img: "/optimized/collections/spring-summer/spring-summer-06.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 07`, img: "/optimized/collections/spring-summer/spring-summer-07.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 08`, img: "/optimized/collections/spring-summer/spring-summer-08.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 09`, img: "/optimized/collections/spring-summer/spring-summer-09.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 10`, img: "/optimized/collections/spring-summer/spring-summer-10.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 11`, img: "/optimized/collections/spring-summer/spring-summer-11.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 12`, img: "/optimized/collections/spring-summer/spring-summer-12.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 13`, img: "/optimized/collections/spring-summer/spring-summer-13.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 14`, img: "/optimized/collections/spring-summer/spring-summer-14.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 15`, img: "/optimized/collections/spring-summer/spring-summer-15.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 16`, img: "/optimized/collections/spring-summer/spring-summer-16.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 17`, img: "/optimized/collections/spring-summer/spring-summer-17.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 18`, img: "/optimized/collections/spring-summer/spring-summer-18.webp", desc: t('collection.springSummerCard.desc') },
  { title: `${t('collection.springSummerCard.title')} 19`, img: "/optimized/collections/spring-summer/spring-summer-19.webp", desc: t('collection.springSummerCard.desc') },
];

const getAutumnWinterFall = (): Card[] => [
  // Autumn Winter 1
  { title: "AW Collection 01", img: "/optimized/collections/autumn-winter/aw1-01.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 02", img: "/optimized/collections/autumn-winter/aw1-02.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 03", img: "/optimized/collections/autumn-winter/aw1-03.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 04", img: "/optimized/collections/autumn-winter/aw1-04.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 05", img: "/optimized/collections/autumn-winter/aw1-05.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 06", img: "/optimized/collections/autumn-winter/aw1-06.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 07", img: "/optimized/collections/autumn-winter/aw1-07.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 08", img: "/optimized/collections/autumn-winter/aw1-08.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 09", img: "/optimized/collections/autumn-winter/aw1-09.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 10", img: "/optimized/collections/autumn-winter/aw1-10.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 11", img: "/optimized/collections/autumn-winter/aw1-11.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 12", img: "/optimized/collections/autumn-winter/aw1-12.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 13", img: "/optimized/collections/autumn-winter/aw1-13.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 14", img: "/optimized/collections/autumn-winter/aw1-14.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 15", img: "/optimized/collections/autumn-winter/aw1-15.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 16", img: "/optimized/collections/autumn-winter/aw1-16.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 17", img: "/optimized/collections/autumn-winter/aw1-17.webp", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 18", img: "/optimized/collections/autumn-winter/aw1-18.webp", desc: "Autumn Winter premium collection" },
  // Autumn Winter 2
  { title: "AW Series 2 01", img: "/optimized/collections/autumn-winter/aw2-01.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 02", img: "/optimized/collections/autumn-winter/aw2-02.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 03", img: "/optimized/collections/autumn-winter/aw2-03.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 04", img: "/optimized/collections/autumn-winter/aw2-04.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 05", img: "/optimized/collections/autumn-winter/aw2-05.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 06", img: "/optimized/collections/autumn-winter/aw2-06.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 07", img: "/optimized/collections/autumn-winter/aw2-07.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 08", img: "/optimized/collections/autumn-winter/aw2-08.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 09", img: "/optimized/collections/autumn-winter/aw2-09.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 10", img: "/optimized/collections/autumn-winter/aw2-10.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 11", img: "/optimized/collections/autumn-winter/aw2-11.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 12", img: "/optimized/collections/autumn-winter/aw2-12.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 13", img: "/optimized/collections/autumn-winter/aw2-13.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 14", img: "/optimized/collections/autumn-winter/aw2-14.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 15", img: "/optimized/collections/autumn-winter/aw2-15.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 16", img: "/optimized/collections/autumn-winter/aw2-16.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 17", img: "/optimized/collections/autumn-winter/aw2-17.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 18", img: "/optimized/collections/autumn-winter/aw2-18.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 19", img: "/optimized/collections/autumn-winter/aw2-19.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 20", img: "/optimized/collections/autumn-winter/aw2-20.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 21", img: "/optimized/collections/autumn-winter/aw2-21.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 22", img: "/optimized/collections/autumn-winter/aw2-22.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 23", img: "/optimized/collections/autumn-winter/aw2-23.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 24", img: "/optimized/collections/autumn-winter/aw2-24.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 25", img: "/optimized/collections/autumn-winter/aw2-25.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 26", img: "/optimized/collections/autumn-winter/aw2-26.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 27", img: "/optimized/collections/autumn-winter/aw2-27.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 28", img: "/optimized/collections/autumn-winter/aw2-28.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 29", img: "/optimized/collections/autumn-winter/aw2-29.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 30", img: "/optimized/collections/autumn-winter/aw2-30.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 31", img: "/optimized/collections/autumn-winter/aw2-31.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 32", img: "/optimized/collections/autumn-winter/aw2-32.webp", desc: "Winter warmth collection" },
  { title: "AW Series 2 33", img: "/optimized/collections/autumn-winter/aw2-33.webp", desc: "Winter warmth collection" },
  // Autumn Winter 3
  { title: "AW Series 3 01", img: "/optimized/collections/autumn-winter/aw3-01.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 02", img: "/optimized/collections/autumn-winter/aw3-02.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 03", img: "/optimized/collections/autumn-winter/aw3-03.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 04", img: "/optimized/collections/autumn-winter/aw3-04.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 05", img: "/optimized/collections/autumn-winter/aw3-05.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 06", img: "/optimized/collections/autumn-winter/aw3-06.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 07", img: "/optimized/collections/autumn-winter/aw3-07.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 08", img: "/optimized/collections/autumn-winter/aw3-08.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 09", img: "/optimized/collections/autumn-winter/aw3-09.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 10", img: "/optimized/collections/autumn-winter/aw3-10.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 11", img: "/optimized/collections/autumn-winter/aw3-11.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 12", img: "/optimized/collections/autumn-winter/aw3-12.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 13", img: "/optimized/collections/autumn-winter/aw3-13.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 14", img: "/optimized/collections/autumn-winter/aw3-14.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 15", img: "/optimized/collections/autumn-winter/aw3-15.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 16", img: "/optimized/collections/autumn-winter/aw3-16.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 17", img: "/optimized/collections/autumn-winter/aw3-17.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 18", img: "/optimized/collections/autumn-winter/aw3-18.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 19", img: "/optimized/collections/autumn-winter/aw3-19.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 20", img: "/optimized/collections/autumn-winter/aw3-20.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 21", img: "/optimized/collections/autumn-winter/aw3-21.webp", desc: "Cold weather essentials" },
  { title: "AW Series 3 22", img: "/optimized/collections/autumn-winter/aw3-22.webp", desc: "Cold weather essentials" },
  // Autumn Winter 4
  { title: "AW Series 4 01", img: "/optimized/collections/autumn-winter/aw4-01.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 02", img: "/optimized/collections/autumn-winter/aw4-02.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 03", img: "/optimized/collections/autumn-winter/aw4-03.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 04", img: "/optimized/collections/autumn-winter/aw4-04.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 05", img: "/optimized/collections/autumn-winter/aw4-05.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 06", img: "/optimized/collections/autumn-winter/aw4-06.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 07", img: "/optimized/collections/autumn-winter/aw4-07.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 08", img: "/optimized/collections/autumn-winter/aw4-08.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 09", img: "/optimized/collections/autumn-winter/aw4-09.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 10", img: "/optimized/collections/autumn-winter/aw4-10.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 11", img: "/optimized/collections/autumn-winter/aw4-11.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 12", img: "/optimized/collections/autumn-winter/aw4-12.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 13", img: "/optimized/collections/autumn-winter/aw4-13.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 14", img: "/optimized/collections/autumn-winter/aw4-14.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 15", img: "/optimized/collections/autumn-winter/aw4-15.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 16", img: "/optimized/collections/autumn-winter/aw4-16.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 17", img: "/optimized/collections/autumn-winter/aw4-17.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 18", img: "/optimized/collections/autumn-winter/aw4-18.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 19", img: "/optimized/collections/autumn-winter/aw4-19.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 20", img: "/optimized/collections/autumn-winter/aw4-20.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 21", img: "/optimized/collections/autumn-winter/aw4-21.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 22", img: "/optimized/collections/autumn-winter/aw4-22.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 23", img: "/optimized/collections/autumn-winter/aw4-23.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 24", img: "/optimized/collections/autumn-winter/aw4-24.webp", desc: "Premium winter fabrics" },
  { title: "AW Series 4 25", img: "/optimized/collections/autumn-winter/aw4-25.webp", desc: "Premium winter fabrics" },
];

const getNewFabrics = (): Card[] => [
  // 27SS Theme 1 - Wool
  { title: "100% Wool 01", img: "/optimized/collections/new-fabrics/theme1-wool-01.webp", desc: "Pure wool premium fabric" },
  { title: "100% Wool 02", img: "/optimized/collections/new-fabrics/theme1-wool-02.webp", desc: "Pure wool premium fabric" },
  { title: "100% Wool 03", img: "/optimized/collections/new-fabrics/theme1-wool-03.webp", desc: "Pure wool premium fabric" },
  { title: "100% Wool 04", img: "/optimized/collections/new-fabrics/theme1-wool-04.webp", desc: "Pure wool premium fabric" },
  // 27SS Theme 1 - Giscours
  { title: "Giscours 01", img: "/optimized/collections/new-fabrics/theme1-giscours-01.webp", desc: "Giscours collection" },
  { title: "Giscours 02", img: "/optimized/collections/new-fabrics/theme1-giscours-02.webp", desc: "Giscours collection" },
  { title: "Giscours 03", img: "/optimized/collections/new-fabrics/theme1-giscours-03.webp", desc: "Giscours collection" },
  { title: "Giscours 04", img: "/optimized/collections/new-fabrics/theme1-giscours-04.webp", desc: "Giscours collection" },
  // 27SS Theme 1 - Haut-brion
  { title: "Haut-brion 01", img: "/optimized/collections/new-fabrics/theme1-hautbrion-01.webp", desc: "Haut-brion premium fabric" },
  { title: "Haut-brion 02", img: "/optimized/collections/new-fabrics/theme1-hautbrion-02.webp", desc: "Haut-brion premium fabric" },
  { title: "Haut-brion 03", img: "/optimized/collections/new-fabrics/theme1-hautbrion-03.webp", desc: "Haut-brion premium fabric" },
  { title: "Haut-brion 04", img: "/optimized/collections/new-fabrics/theme1-hautbrion-04.webp", desc: "Haut-brion premium fabric" },
  // 27SS Theme 1 - Lagrange
  { title: "Lagrange 01", img: "/optimized/collections/new-fabrics/theme1-lagrange-01.webp", desc: "Lagrange collection" },
  { title: "Lagrange 02", img: "/optimized/collections/new-fabrics/theme1-lagrange-02.webp", desc: "Lagrange collection" },
  { title: "Lagrange 03", img: "/optimized/collections/new-fabrics/theme1-lagrange-03.webp", desc: "Lagrange collection" },
  { title: "Lagrange 04", img: "/optimized/collections/new-fabrics/theme1-lagrange-04.webp", desc: "Lagrange collection" },
  // 27SS Theme 1 - Margaux
  { title: "Margaux 01", img: "/optimized/collections/new-fabrics/theme1-margaux-01.webp", desc: "Margaux premium fabric" },
  { title: "Margaux 02", img: "/optimized/collections/new-fabrics/theme1-margaux-02.webp", desc: "Margaux premium fabric" },
  { title: "Margaux 03", img: "/optimized/collections/new-fabrics/theme1-margaux-03.webp", desc: "Margaux premium fabric" },
  { title: "Margaux 04", img: "/optimized/collections/new-fabrics/theme1-margaux-04.webp", desc: "Margaux premium fabric" },
  // 27SS Theme 1 - Baoma (宝玛)
  { title: "Baoma 01", img: "/optimized/collections/new-fabrics/theme1-baoma-01.webp", desc: "Baoma premium fabric" },
  { title: "Baoma 02", img: "/optimized/collections/new-fabrics/theme1-baoma-02.webp", desc: "Baoma premium fabric" },
  { title: "Baoma 03", img: "/optimized/collections/new-fabrics/theme1-baoma-03.webp", desc: "Baoma premium fabric" },
  { title: "Baoma 04", img: "/optimized/collections/new-fabrics/theme1-baoma-04.webp", desc: "Baoma premium fabric" },
  // 27SS Theme 2 - Beaucaillou
  { title: "Beaucaillou 01", img: "/optimized/collections/new-fabrics/theme2-beaucaillou-01.webp", desc: "Beaucaillou collection" },
  { title: "Beaucaillou 02", img: "/optimized/collections/new-fabrics/theme2-beaucaillou-02.webp", desc: "Beaucaillou collection" },
  { title: "Beaucaillou 03", img: "/optimized/collections/new-fabrics/theme2-beaucaillou-03.webp", desc: "Beaucaillou collection" },
  { title: "Beaucaillou 04", img: "/optimized/collections/new-fabrics/theme2-beaucaillou-04.webp", desc: "Beaucaillou collection" },
  // 27SS Theme 2 - Belgrave
  { title: "Belgrave 01", img: "/optimized/collections/new-fabrics/theme2-belgrave-01.webp", desc: "Belgrave premium fabric" },
  { title: "Belgrave 02", img: "/optimized/collections/new-fabrics/theme2-belgrave-02.webp", desc: "Belgrave premium fabric" },
  { title: "Belgrave 03", img: "/optimized/collections/new-fabrics/theme2-belgrave-03.webp", desc: "Belgrave premium fabric" },
  { title: "Belgrave 04", img: "/optimized/collections/new-fabrics/theme2-belgrave-04.webp", desc: "Belgrave premium fabric" },
  // 27SS Theme 2 - Comtesse
  { title: "Comtesse 01", img: "/optimized/collections/new-fabrics/theme2-comtesse-01.webp", desc: "Comtesse collection" },
  { title: "Comtesse 02", img: "/optimized/collections/new-fabrics/theme2-comtesse-02.webp", desc: "Comtesse collection" },
  { title: "Comtesse 03", img: "/optimized/collections/new-fabrics/theme2-comtesse-03.webp", desc: "Comtesse collection" },
  { title: "Comtesse 04", img: "/optimized/collections/new-fabrics/theme2-comtesse-04.webp", desc: "Comtesse collection" },
  // 27SS Theme 2 - Lyric 1
  { title: "Lyric 1 01", img: "/optimized/collections/new-fabrics/theme2-lyric1-01.webp", desc: "Lyric 1 collection" },
  { title: "Lyric 1 02", img: "/optimized/collections/new-fabrics/theme2-lyric1-02.webp", desc: "Lyric 1 collection" },
  { title: "Lyric 1 03", img: "/optimized/collections/new-fabrics/theme2-lyric1-03.webp", desc: "Lyric 1 collection" },
  { title: "Lyric 1 04", img: "/optimized/collections/new-fabrics/theme2-lyric1-04.webp", desc: "Lyric 1 collection" },
  // 27SS Theme 2 - Lyric 2
  { title: "Lyric 2 01", img: "/optimized/collections/new-fabrics/theme2-lyric2-01.webp", desc: "Lyric 2 collection" },
  { title: "Lyric 2 02", img: "/optimized/collections/new-fabrics/theme2-lyric2-02.webp", desc: "Lyric 2 collection" },
  { title: "Lyric 2 03", img: "/optimized/collections/new-fabrics/theme2-lyric2-03.webp", desc: "Lyric 2 collection" },
  { title: "Lyric 2 04", img: "/optimized/collections/new-fabrics/theme2-lyric2-04.webp", desc: "Lyric 2 collection" },
  // 27SS Theme 2 - Mouton
  { title: "Mouton 01", img: "/optimized/collections/new-fabrics/theme2-mouton-01.webp", desc: "Mouton premium fabric" },
  { title: "Mouton 02", img: "/optimized/collections/new-fabrics/theme2-mouton-02.webp", desc: "Mouton premium fabric" },
  { title: "Mouton 03", img: "/optimized/collections/new-fabrics/theme2-mouton-03.webp", desc: "Mouton premium fabric" },
  { title: "Mouton 04", img: "/optimized/collections/new-fabrics/theme2-mouton-04.webp", desc: "Mouton premium fabric" },
  // 27SS Theme 3 - Dove
  { title: "Dove 01", img: "/optimized/collections/new-fabrics/theme3-dove-01.webp", desc: "Dove collection" },
  { title: "Dove 02", img: "/optimized/collections/new-fabrics/theme3-dove-02.webp", desc: "Dove collection" },
  { title: "Dove 03", img: "/optimized/collections/new-fabrics/theme3-dove-03.webp", desc: "Dove collection" },
  { title: "Dove 04", img: "/optimized/collections/new-fabrics/theme3-dove-04.webp", desc: "Dove collection" },
  { title: "Dove 05", img: "/optimized/collections/new-fabrics/theme3-dove-05.webp", desc: "Dove collection" },
  // 27SS Theme 3 - Hoar
  { title: "Hoar 01", img: "/optimized/collections/new-fabrics/theme3-hoar-01.webp", desc: "Hoar premium fabric" },
  { title: "Hoar 02", img: "/optimized/collections/new-fabrics/theme3-hoar-02.webp", desc: "Hoar premium fabric" },
  { title: "Hoar 03", img: "/optimized/collections/new-fabrics/theme3-hoar-03.webp", desc: "Hoar premium fabric" },
  { title: "Hoar 04", img: "/optimized/collections/new-fabrics/theme3-hoar-04.webp", desc: "Hoar premium fabric" },
  // 27SS Theme 3 - Hoar 2
  { title: "Hoar 2 01", img: "/optimized/collections/new-fabrics/theme3-hoar2-01.webp", desc: "Hoar 2 collection" },
  { title: "Hoar 2 02", img: "/optimized/collections/new-fabrics/theme3-hoar2-02.webp", desc: "Hoar 2 collection" },
  { title: "Hoar 2 03", img: "/optimized/collections/new-fabrics/theme3-hoar2-03.webp", desc: "Hoar 2 collection" },
  { title: "Hoar 2 04", img: "/optimized/collections/new-fabrics/theme3-hoar2-04.webp", desc: "Hoar 2 collection" },
  // 27SS Theme 3 - Lyric
  { title: "Lyric 01", img: "/optimized/collections/new-fabrics/theme3-lyric-01.webp", desc: "Lyric theme 3 collection" },
  { title: "Lyric 02", img: "/optimized/collections/new-fabrics/theme3-lyric-02.webp", desc: "Lyric theme 3 collection" },
  { title: "Lyric 03", img: "/optimized/collections/new-fabrics/theme3-lyric-03.webp", desc: "Lyric theme 3 collection" },
  { title: "Lyric 04", img: "/optimized/collections/new-fabrics/theme3-lyric-04.webp", desc: "Lyric theme 3 collection" },
  // 27SS Theme 3 - Pluvia
  { title: "Pluvia 01", img: "/optimized/collections/new-fabrics/theme3-pluvia-01.webp", desc: "Pluvia premium fabric" },
  { title: "Pluvia 02", img: "/optimized/collections/new-fabrics/theme3-pluvia-02.webp", desc: "Pluvia premium fabric" },
  { title: "Pluvia 03", img: "/optimized/collections/new-fabrics/theme3-pluvia-03.webp", desc: "Pluvia premium fabric" },
  { title: "Pluvia 04", img: "/optimized/collections/new-fabrics/theme3-pluvia-04.webp", desc: "Pluvia premium fabric" },
  // 27SS Theme 3 - Pontet-Canet Pro
  { title: "Pontet-Canet 01", img: "/optimized/collections/new-fabrics/theme3-pontet-01.webp", desc: "Pontet-Canet professional" },
  { title: "Pontet-Canet 02", img: "/optimized/collections/new-fabrics/theme3-pontet-02.webp", desc: "Pontet-Canet professional" },
  { title: "Pontet-Canet 03", img: "/optimized/collections/new-fabrics/theme3-pontet-03.webp", desc: "Pontet-Canet professional" },
  { title: "Pontet-Canet 04", img: "/optimized/collections/new-fabrics/theme3-pontet-04.webp", desc: "Pontet-Canet professional" },
  // 27SS Theme 3 - Theia
  { title: "Theia 01", img: "/optimized/collections/new-fabrics/theme3-theia-01.webp", desc: "Theia premium fabric" },
  { title: "Theia 02", img: "/optimized/collections/new-fabrics/theme3-theia-02.webp", desc: "Theia premium fabric" },
  { title: "Theia 03", img: "/optimized/collections/new-fabrics/theme3-theia-03.webp", desc: "Theia premium fabric" },
  { title: "Theia 04", img: "/optimized/collections/new-fabrics/theme3-theia-04.webp", desc: "Theia premium fabric" },
  { title: "Theia 05", img: "/optimized/collections/new-fabrics/theme3-theia-05.webp", desc: "Theia premium fabric" },
];

// Grouped by outfit colour: red racing set, green knit set, brown/white set
const MODEL_ORDER = [1, 2, 3, 4, 5, 12, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18];

const getModelCards = (t: TFunction): Card[] => MODEL_ORDER.map((model, index) => ({
  title: t('collection.garmentAlt') + ' ' + String(index + 1).padStart(2, '0'),
  img: '/optimized/assets/models/model_' + model + '.webp',
  desc: t('collection.hero.subtitle'),
}));

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    role="tab"
    aria-selected={active}
    className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm md:text-base transition ${
      active
        ? "bg-[#b35b28] text-white border-[#b35b28]"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

const CollectionImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`${className} bg-gray-100`}>
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
      )}
    </div>
  );
};

const CardGrid = ({ items, t, portrait = false }: { items: Card[]; t: TFunction; portrait?: boolean }) => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {items.map((card) => (
        <div
          key={card.img}
          className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white"
        >
          <CollectionImage
            src={`${R2_BASE}${card.img}`}
            alt={`${card.title} ${t('collection.hero.alt')}`}
            className={portrait ? "w-full aspect-[2/3]" : "w-full h-48 sm:h-56 md:h-64"}
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-3 sm:p-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-300 mb-2">{card.title}</h3>
            <p className="text-xs sm:text-sm text-white/90 line-clamp-3">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function Collection() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"swatches" | "garment">("swatches");
  const items = tab === "swatches"
    ? [...getSpringSummerFall(t), ...getAutumnWinterFall(), ...getNewFabrics()]
    : getModelCards(t);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO Section */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] pt-24 pb-16 flex items-center justify-center text-white text-center">
        <img
          src={banner}
          alt={t('collection.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {t('collection.hero.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            {t('collection.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-6 sm:mb-8">
        <div className="bg-white shadow-md rounded-xl sm:rounded-2xl p-2 sm:p-3 flex gap-2 sm:gap-3 flex-wrap justify-center w-fit mx-auto" role="tablist" aria-label={t("collection.hero.title")}>
          <TabButton active={tab === "swatches"} onClick={() => setTab("swatches")}>{t('collection.tabs.swatches')}</TabButton>
          <TabButton active={tab === "garment"} onClick={() => setTab("garment")}>{t('collection.tabs.garment')}</TabButton>
        </div>
      </div>

      {/* Title + Grid */}

      <CardGrid items={items} t={t} portrait={tab === "garment"} />
    </div>
  );
}
