import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { R2_BASE } from "../lib/r2";

type Card = {
  title: string;
  img: string;
  desc: string;
};

const getSpringSummerFall = (t: any): Card[] => [
  // Weaving Photos (One)
  { title: "Weaving Collection 01", img: "/collections/spring-summer/weaving-one-01.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 02", img: "/collections/spring-summer/weaving-one-02.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 03", img: "/collections/spring-summer/weaving-one-03.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 04", img: "/collections/spring-summer/weaving-one-04.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 05", img: "/collections/spring-summer/weaving-one-05.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 06", img: "/collections/spring-summer/weaving-one-06.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 07", img: "/collections/spring-summer/weaving-one-07.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 08", img: "/collections/spring-summer/weaving-one-08.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 09", img: "/collections/spring-summer/weaving-one-09.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 10", img: "/collections/spring-summer/weaving-one-10.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 11", img: "/collections/spring-summer/weaving-one-11.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 12", img: "/collections/spring-summer/weaving-one-12.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 13", img: "/collections/spring-summer/weaving-one-13.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 14", img: "/collections/spring-summer/weaving-one-14.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 15", img: "/collections/spring-summer/weaving-one-15.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 16", img: "/collections/spring-summer/weaving-one-16.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 17", img: "/collections/spring-summer/weaving-one-17.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 18", img: "/collections/spring-summer/weaving-one-18.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 19", img: "/collections/spring-summer/weaving-one-19.jpg", desc: "Premium weaving craftsmanship" },
  { title: "Weaving Collection 20", img: "/collections/spring-summer/weaving-one-20.jpg", desc: "Premium weaving craftsmanship" },
  // Weaving Photos (Two)
  { title: "Weaving Series 01", img: "/collections/spring-summer/weaving-two-01.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 02", img: "/collections/spring-summer/weaving-two-02.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 03", img: "/collections/spring-summer/weaving-two-03.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 04", img: "/collections/spring-summer/weaving-two-04.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 05", img: "/collections/spring-summer/weaving-two-05.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 06", img: "/collections/spring-summer/weaving-two-06.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 07", img: "/collections/spring-summer/weaving-two-07.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 08", img: "/collections/spring-summer/weaving-two-08.jpg", desc: "Contemporary weaving designs" },
  { title: "Weaving Series 09", img: "/collections/spring-summer/weaving-two-09.jpg", desc: "Contemporary weaving designs" },
  // Spring/Summer Main Collection
  { title: t('collection.products.lightweightCotton.title'), img: "/collections/spring-summer/spring-summer-01.jpg", desc: t('collection.products.lightweightCotton.desc') },
  { title: t('collection.products.linenBlend.title'), img: "/collections/spring-summer/spring-summer-02.png", desc: t('collection.products.linenBlend.desc') },
  { title: t('collection.products.pastelCollection.title'), img: "/collections/spring-summer/spring-summer-03.png", desc: t('collection.products.pastelCollection.desc') },
  { title: "Spring Summer 04", img: "/collections/spring-summer/spring-summer-04.png", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 05", img: "/collections/spring-summer/spring-summer-05.png", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 06", img: "/collections/spring-summer/spring-summer-06.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 07", img: "/collections/spring-summer/spring-summer-07.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 08", img: "/collections/spring-summer/spring-summer-08.png", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 09", img: "/collections/spring-summer/spring-summer-09.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 10", img: "/collections/spring-summer/spring-summer-10.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 11", img: "/collections/spring-summer/spring-summer-11.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 12", img: "/collections/spring-summer/spring-summer-12.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 13", img: "/collections/spring-summer/spring-summer-13.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 14", img: "/collections/spring-summer/spring-summer-14.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 15", img: "/collections/spring-summer/spring-summer-15.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 16", img: "/collections/spring-summer/spring-summer-16.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 17", img: "/collections/spring-summer/spring-summer-17.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 18", img: "/collections/spring-summer/spring-summer-18.jpg", desc: "Light seasonal fabrics" },
  { title: "Spring Summer 19", img: "/collections/spring-summer/spring-summer-19.png", desc: "Light seasonal fabrics" },
];

const getAutumnWinterFall = (_t: any): Card[] => [
  // Autumn Winter 1
  { title: "AW Collection 01", img: "/collections/autumn-winter/aw1-01.png", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 02", img: "/collections/autumn-winter/aw1-02.png", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 03", img: "/collections/autumn-winter/aw1-03.png", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 04", img: "/collections/autumn-winter/aw1-04.png", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 05", img: "/collections/autumn-winter/aw1-05.png", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 06", img: "/collections/autumn-winter/aw1-06.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 07", img: "/collections/autumn-winter/aw1-07.png", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 08", img: "/collections/autumn-winter/aw1-08.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 09", img: "/collections/autumn-winter/aw1-09.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 10", img: "/collections/autumn-winter/aw1-10.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 11", img: "/collections/autumn-winter/aw1-11.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 12", img: "/collections/autumn-winter/aw1-12.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 13", img: "/collections/autumn-winter/aw1-13.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 14", img: "/collections/autumn-winter/aw1-14.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 15", img: "/collections/autumn-winter/aw1-15.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 16", img: "/collections/autumn-winter/aw1-16.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 17", img: "/collections/autumn-winter/aw1-17.jpg", desc: "Autumn Winter premium collection" },
  { title: "AW Collection 18", img: "/collections/autumn-winter/aw1-18.jpg", desc: "Autumn Winter premium collection" },
  // Autumn Winter 2
  { title: "AW Series 2 01", img: "/collections/autumn-winter/aw2-01.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 02", img: "/collections/autumn-winter/aw2-02.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 03", img: "/collections/autumn-winter/aw2-03.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 04", img: "/collections/autumn-winter/aw2-04.png", desc: "Winter warmth collection" },
  { title: "AW Series 2 05", img: "/collections/autumn-winter/aw2-05.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 06", img: "/collections/autumn-winter/aw2-06.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 07", img: "/collections/autumn-winter/aw2-07.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 08", img: "/collections/autumn-winter/aw2-08.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 09", img: "/collections/autumn-winter/aw2-09.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 10", img: "/collections/autumn-winter/aw2-10.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 11", img: "/collections/autumn-winter/aw2-11.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 12", img: "/collections/autumn-winter/aw2-12.png", desc: "Winter warmth collection" },
  { title: "AW Series 2 13", img: "/collections/autumn-winter/aw2-13.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 14", img: "/collections/autumn-winter/aw2-14.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 15", img: "/collections/autumn-winter/aw2-15.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 16", img: "/collections/autumn-winter/aw2-16.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 17", img: "/collections/autumn-winter/aw2-17.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 18", img: "/collections/autumn-winter/aw2-18.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 19", img: "/collections/autumn-winter/aw2-19.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 20", img: "/collections/autumn-winter/aw2-20.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 21", img: "/collections/autumn-winter/aw2-21.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 22", img: "/collections/autumn-winter/aw2-22.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 23", img: "/collections/autumn-winter/aw2-23.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 24", img: "/collections/autumn-winter/aw2-24.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 25", img: "/collections/autumn-winter/aw2-25.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 26", img: "/collections/autumn-winter/aw2-26.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 27", img: "/collections/autumn-winter/aw2-27.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 28", img: "/collections/autumn-winter/aw2-28.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 29", img: "/collections/autumn-winter/aw2-29.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 30", img: "/collections/autumn-winter/aw2-30.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 31", img: "/collections/autumn-winter/aw2-31.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 32", img: "/collections/autumn-winter/aw2-32.jpg", desc: "Winter warmth collection" },
  { title: "AW Series 2 33", img: "/collections/autumn-winter/aw2-33.jpg", desc: "Winter warmth collection" },
  // Autumn Winter 3
  { title: "AW Series 3 01", img: "/collections/autumn-winter/aw3-01.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 02", img: "/collections/autumn-winter/aw3-02.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 03", img: "/collections/autumn-winter/aw3-03.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 04", img: "/collections/autumn-winter/aw3-04.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 05", img: "/collections/autumn-winter/aw3-05.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 06", img: "/collections/autumn-winter/aw3-06.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 07", img: "/collections/autumn-winter/aw3-07.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 08", img: "/collections/autumn-winter/aw3-08.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 09", img: "/collections/autumn-winter/aw3-09.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 10", img: "/collections/autumn-winter/aw3-10.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 11", img: "/collections/autumn-winter/aw3-11.png", desc: "Cold weather essentials" },
  { title: "AW Series 3 12", img: "/collections/autumn-winter/aw3-12.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 13", img: "/collections/autumn-winter/aw3-13.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 14", img: "/collections/autumn-winter/aw3-14.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 15", img: "/collections/autumn-winter/aw3-15.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 16", img: "/collections/autumn-winter/aw3-16.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 17", img: "/collections/autumn-winter/aw3-17.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 18", img: "/collections/autumn-winter/aw3-18.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 19", img: "/collections/autumn-winter/aw3-19.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 20", img: "/collections/autumn-winter/aw3-20.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 21", img: "/collections/autumn-winter/aw3-21.jpg", desc: "Cold weather essentials" },
  { title: "AW Series 3 22", img: "/collections/autumn-winter/aw3-22.jpg", desc: "Cold weather essentials" },
  // Autumn Winter 4
  { title: "AW Series 4 01", img: "/collections/autumn-winter/aw4-01.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 02", img: "/collections/autumn-winter/aw4-02.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 03", img: "/collections/autumn-winter/aw4-03.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 04", img: "/collections/autumn-winter/aw4-04.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 05", img: "/collections/autumn-winter/aw4-05.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 06", img: "/collections/autumn-winter/aw4-06.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 07", img: "/collections/autumn-winter/aw4-07.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 08", img: "/collections/autumn-winter/aw4-08.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 09", img: "/collections/autumn-winter/aw4-09.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 10", img: "/collections/autumn-winter/aw4-10.png", desc: "Premium winter fabrics" },
  { title: "AW Series 4 11", img: "/collections/autumn-winter/aw4-11.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 12", img: "/collections/autumn-winter/aw4-12.png", desc: "Premium winter fabrics" },
  { title: "AW Series 4 13", img: "/collections/autumn-winter/aw4-13.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 14", img: "/collections/autumn-winter/aw4-14.png", desc: "Premium winter fabrics" },
  { title: "AW Series 4 15", img: "/collections/autumn-winter/aw4-15.png", desc: "Premium winter fabrics" },
  { title: "AW Series 4 16", img: "/collections/autumn-winter/aw4-16.png", desc: "Premium winter fabrics" },
  { title: "AW Series 4 17", img: "/collections/autumn-winter/aw4-17.png", desc: "Premium winter fabrics" },
  { title: "AW Series 4 18", img: "/collections/autumn-winter/aw4-18.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 19", img: "/collections/autumn-winter/aw4-19.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 20", img: "/collections/autumn-winter/aw4-20.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 21", img: "/collections/autumn-winter/aw4-21.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 22", img: "/collections/autumn-winter/aw4-22.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 23", img: "/collections/autumn-winter/aw4-23.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 24", img: "/collections/autumn-winter/aw4-24.jpg", desc: "Premium winter fabrics" },
  { title: "AW Series 4 25", img: "/collections/autumn-winter/aw4-25.jpg", desc: "Premium winter fabrics" },
];

const getFactoryCards = (_t: any): Card[] => [
  // Factory Photos
  { title: "Production View 01", img: "/collections/spring-summer/factory-01.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 02", img: "/collections/spring-summer/factory-02.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 03", img: "/collections/spring-summer/factory-03.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 04", img: "/collections/spring-summer/factory-04.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 05", img: "/collections/spring-summer/factory-05.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 06", img: "/collections/spring-summer/factory-06.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 07", img: "/collections/spring-summer/factory-07.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 08", img: "/collections/spring-summer/factory-08.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 09", img: "/collections/spring-summer/factory-09.jpg", desc: "State-of-the-art manufacturing" },
  { title: "Production View 10", img: "/collections/spring-summer/factory-10.jpg", desc: "State-of-the-art manufacturing" },
];

const getNewFabrics = (_t: any): Card[] => [
  // 27SS Theme 1 - Wool
  { title: "100% Wool 01", img: "/collections/new-fabrics/theme1-wool-01.JPG", desc: "Pure wool premium fabric" },
  { title: "100% Wool 02", img: "/collections/new-fabrics/theme1-wool-02.JPG", desc: "Pure wool premium fabric" },
  { title: "100% Wool 03", img: "/collections/new-fabrics/theme1-wool-03.JPG", desc: "Pure wool premium fabric" },
  { title: "100% Wool 04", img: "/collections/new-fabrics/theme1-wool-04.JPG", desc: "Pure wool premium fabric" },
  // 27SS Theme 1 - Giscours
  { title: "Giscours 01", img: "/collections/new-fabrics/theme1-giscours-01.JPG", desc: "Giscours collection" },
  { title: "Giscours 02", img: "/collections/new-fabrics/theme1-giscours-02.JPG", desc: "Giscours collection" },
  { title: "Giscours 03", img: "/collections/new-fabrics/theme1-giscours-03.JPG", desc: "Giscours collection" },
  { title: "Giscours 04", img: "/collections/new-fabrics/theme1-giscours-04.JPG", desc: "Giscours collection" },
  // 27SS Theme 1 - Haut-brion
  { title: "Haut-brion 01", img: "/collections/new-fabrics/theme1-hautbrion-01.JPG", desc: "Haut-brion premium fabric" },
  { title: "Haut-brion 02", img: "/collections/new-fabrics/theme1-hautbrion-02.JPG", desc: "Haut-brion premium fabric" },
  { title: "Haut-brion 03", img: "/collections/new-fabrics/theme1-hautbrion-03.JPG", desc: "Haut-brion premium fabric" },
  { title: "Haut-brion 04", img: "/collections/new-fabrics/theme1-hautbrion-04.JPG", desc: "Haut-brion premium fabric" },
  // 27SS Theme 1 - Lagrange
  { title: "Lagrange 01", img: "/collections/new-fabrics/theme1-lagrange-01.JPG", desc: "Lagrange collection" },
  { title: "Lagrange 02", img: "/collections/new-fabrics/theme1-lagrange-02.JPG", desc: "Lagrange collection" },
  { title: "Lagrange 03", img: "/collections/new-fabrics/theme1-lagrange-03.JPG", desc: "Lagrange collection" },
  { title: "Lagrange 04", img: "/collections/new-fabrics/theme1-lagrange-04.JPG", desc: "Lagrange collection" },
  // 27SS Theme 1 - Margaux
  { title: "Margaux 01", img: "/collections/new-fabrics/theme1-margaux-01.JPG", desc: "Margaux premium fabric" },
  { title: "Margaux 02", img: "/collections/new-fabrics/theme1-margaux-02.JPG", desc: "Margaux premium fabric" },
  { title: "Margaux 03", img: "/collections/new-fabrics/theme1-margaux-03.JPG", desc: "Margaux premium fabric" },
  { title: "Margaux 04", img: "/collections/new-fabrics/theme1-margaux-04.JPG", desc: "Margaux premium fabric" },
  // 27SS Theme 1 - Baoma (宝玛)
  { title: "Baoma 01", img: "/collections/new-fabrics/theme1-baoma-01.JPG", desc: "Baoma premium fabric" },
  { title: "Baoma 02", img: "/collections/new-fabrics/theme1-baoma-02.JPG", desc: "Baoma premium fabric" },
  { title: "Baoma 03", img: "/collections/new-fabrics/theme1-baoma-03.JPG", desc: "Baoma premium fabric" },
  { title: "Baoma 04", img: "/collections/new-fabrics/theme1-baoma-04.JPG", desc: "Baoma premium fabric" },
  // 27SS Theme 2 - Beaucaillou
  { title: "Beaucaillou 01", img: "/collections/new-fabrics/theme2-beaucaillou-01.JPG", desc: "Beaucaillou collection" },
  { title: "Beaucaillou 02", img: "/collections/new-fabrics/theme2-beaucaillou-02.JPG", desc: "Beaucaillou collection" },
  { title: "Beaucaillou 03", img: "/collections/new-fabrics/theme2-beaucaillou-03.JPG", desc: "Beaucaillou collection" },
  { title: "Beaucaillou 04", img: "/collections/new-fabrics/theme2-beaucaillou-04.JPG", desc: "Beaucaillou collection" },
  // 27SS Theme 2 - Belgrave
  { title: "Belgrave 01", img: "/collections/new-fabrics/theme2-belgrave-01.JPG", desc: "Belgrave premium fabric" },
  { title: "Belgrave 02", img: "/collections/new-fabrics/theme2-belgrave-02.JPG", desc: "Belgrave premium fabric" },
  { title: "Belgrave 03", img: "/collections/new-fabrics/theme2-belgrave-03.JPG", desc: "Belgrave premium fabric" },
  { title: "Belgrave 04", img: "/collections/new-fabrics/theme2-belgrave-04.JPG", desc: "Belgrave premium fabric" },
  // 27SS Theme 2 - Comtesse
  { title: "Comtesse 01", img: "/collections/new-fabrics/theme2-comtesse-01.JPG", desc: "Comtesse collection" },
  { title: "Comtesse 02", img: "/collections/new-fabrics/theme2-comtesse-02.JPG", desc: "Comtesse collection" },
  { title: "Comtesse 03", img: "/collections/new-fabrics/theme2-comtesse-03.JPG", desc: "Comtesse collection" },
  { title: "Comtesse 04", img: "/collections/new-fabrics/theme2-comtesse-04.JPG", desc: "Comtesse collection" },
  // 27SS Theme 2 - Lyric 1
  { title: "Lyric 1 01", img: "/collections/new-fabrics/theme2-lyric1-01.JPG", desc: "Lyric 1 collection" },
  { title: "Lyric 1 02", img: "/collections/new-fabrics/theme2-lyric1-02.JPG", desc: "Lyric 1 collection" },
  { title: "Lyric 1 03", img: "/collections/new-fabrics/theme2-lyric1-03.JPG", desc: "Lyric 1 collection" },
  { title: "Lyric 1 04", img: "/collections/new-fabrics/theme2-lyric1-04.JPG", desc: "Lyric 1 collection" },
  // 27SS Theme 2 - Lyric 2
  { title: "Lyric 2 01", img: "/collections/new-fabrics/theme2-lyric2-01.JPG", desc: "Lyric 2 collection" },
  { title: "Lyric 2 02", img: "/collections/new-fabrics/theme2-lyric2-02.JPG", desc: "Lyric 2 collection" },
  { title: "Lyric 2 03", img: "/collections/new-fabrics/theme2-lyric2-03.JPG", desc: "Lyric 2 collection" },
  { title: "Lyric 2 04", img: "/collections/new-fabrics/theme2-lyric2-04.JPG", desc: "Lyric 2 collection" },
  // 27SS Theme 2 - Mouton
  { title: "Mouton 01", img: "/collections/new-fabrics/theme2-mouton-01.JPG", desc: "Mouton premium fabric" },
  { title: "Mouton 02", img: "/collections/new-fabrics/theme2-mouton-02.JPG", desc: "Mouton premium fabric" },
  { title: "Mouton 03", img: "/collections/new-fabrics/theme2-mouton-03.JPG", desc: "Mouton premium fabric" },
  { title: "Mouton 04", img: "/collections/new-fabrics/theme2-mouton-04.JPG", desc: "Mouton premium fabric" },
  // 27SS Theme 3 - Dove
  { title: "Dove 01", img: "/collections/new-fabrics/theme3-dove-01.JPG", desc: "Dove collection" },
  { title: "Dove 02", img: "/collections/new-fabrics/theme3-dove-02.JPG", desc: "Dove collection" },
  { title: "Dove 03", img: "/collections/new-fabrics/theme3-dove-03.JPG", desc: "Dove collection" },
  { title: "Dove 04", img: "/collections/new-fabrics/theme3-dove-04.JPG", desc: "Dove collection" },
  { title: "Dove 05", img: "/collections/new-fabrics/theme3-dove-05.JPG", desc: "Dove collection" },
  // 27SS Theme 3 - Hoar
  { title: "Hoar 01", img: "/collections/new-fabrics/theme3-hoar-01.JPG", desc: "Hoar premium fabric" },
  { title: "Hoar 02", img: "/collections/new-fabrics/theme3-hoar-02.JPG", desc: "Hoar premium fabric" },
  { title: "Hoar 03", img: "/collections/new-fabrics/theme3-hoar-03.JPG", desc: "Hoar premium fabric" },
  { title: "Hoar 04", img: "/collections/new-fabrics/theme3-hoar-04.JPG", desc: "Hoar premium fabric" },
  // 27SS Theme 3 - Hoar 2
  { title: "Hoar 2 01", img: "/collections/new-fabrics/theme3-hoar2-01.JPG", desc: "Hoar 2 collection" },
  { title: "Hoar 2 02", img: "/collections/new-fabrics/theme3-hoar2-02.JPG", desc: "Hoar 2 collection" },
  { title: "Hoar 2 03", img: "/collections/new-fabrics/theme3-hoar2-03.JPG", desc: "Hoar 2 collection" },
  { title: "Hoar 2 04", img: "/collections/new-fabrics/theme3-hoar2-04.JPG", desc: "Hoar 2 collection" },
  // 27SS Theme 3 - Lyric
  { title: "Lyric 01", img: "/collections/new-fabrics/theme3-lyric-01.JPG", desc: "Lyric theme 3 collection" },
  { title: "Lyric 02", img: "/collections/new-fabrics/theme3-lyric-02.JPG", desc: "Lyric theme 3 collection" },
  { title: "Lyric 03", img: "/collections/new-fabrics/theme3-lyric-03.JPG", desc: "Lyric theme 3 collection" },
  { title: "Lyric 04", img: "/collections/new-fabrics/theme3-lyric-04.JPG", desc: "Lyric theme 3 collection" },
  // 27SS Theme 3 - Pluvia
  { title: "Pluvia 01", img: "/collections/new-fabrics/theme3-pluvia-01.JPG", desc: "Pluvia premium fabric" },
  { title: "Pluvia 02", img: "/collections/new-fabrics/theme3-pluvia-02.JPG", desc: "Pluvia premium fabric" },
  { title: "Pluvia 03", img: "/collections/new-fabrics/theme3-pluvia-03.JPG", desc: "Pluvia premium fabric" },
  { title: "Pluvia 04", img: "/collections/new-fabrics/theme3-pluvia-04.JPG", desc: "Pluvia premium fabric" },
  // 27SS Theme 3 - Pontet-Canet Pro
  { title: "Pontet-Canet 01", img: "/collections/new-fabrics/theme3-pontet-01.JPG", desc: "Pontet-Canet professional" },
  { title: "Pontet-Canet 02", img: "/collections/new-fabrics/theme3-pontet-02.JPG", desc: "Pontet-Canet professional" },
  { title: "Pontet-Canet 03", img: "/collections/new-fabrics/theme3-pontet-03.JPG", desc: "Pontet-Canet professional" },
  { title: "Pontet-Canet 04", img: "/collections/new-fabrics/theme3-pontet-04.JPG", desc: "Pontet-Canet professional" },
  // 27SS Theme 3 - Theia
  { title: "Theia 01", img: "/collections/new-fabrics/theme3-theia-01.JPG", desc: "Theia premium fabric" },
  { title: "Theia 02", img: "/collections/new-fabrics/theme3-theia-02.JPG", desc: "Theia premium fabric" },
  { title: "Theia 03", img: "/collections/new-fabrics/theme3-theia-03.JPG", desc: "Theia premium fabric" },
  { title: "Theia 04", img: "/collections/new-fabrics/theme3-theia-04.JPG", desc: "Theia premium fabric" },
  { title: "Theia 05", img: "/collections/new-fabrics/theme3-theia-05.JPG", desc: "Theia premium fabric" },
];

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
    className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm md:text-base transition ${
      active
        ? "bg-[#b35b28] text-white border-[#b35b28]"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

const CardGrid = ({ items, t }: { items: Card[]; t: any }) => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {items.map((card) => (
        <div
          key={card.title}
          className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white"
        >
          <img
            src={`${R2_BASE}${card.img}`}
            alt={`${card.title} ${t('collection.hero.alt')}`}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            loading="lazy"
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
  const [tab, setTab] = useState<"spring" | "autumn" | "new" | "factory">("spring");

  const items =
    tab === "spring"
      ? getSpringSummerFall(t)
      : tab === "autumn"
      ? getAutumnWinterFall(t)
      : tab === "factory"
      ? getFactoryCards(t)
      : getNewFabrics(t);

  const title =
    tab === "spring"
      ? t('collection.tabs.springSummer')
      : tab === "autumn"
      ? t('collection.tabs.autumnWinter')
      : tab === "factory"
      ? "Factory"
      : t('collection.tabs.newFabrics');

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO Section */}
      <section className="relative h-[35vh] sm:h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <img
          src={`${R2_BASE}/assets/images/colorCardBanner.jpg`}
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
        <div className="bg-white shadow-md rounded-xl sm:rounded-2xl p-2 sm:p-3 flex gap-2 sm:gap-3 flex-wrap justify-center w-fit mx-auto">
          <TabButton active={tab === "spring"} onClick={() => setTab("spring")}>
            {t('collection.tabs.springSummer')}
          </TabButton>
          <TabButton active={tab === "autumn"} onClick={() => setTab("autumn")}>
            {t('collection.tabs.autumnWinter')}
          </TabButton>
          <TabButton active={tab === "new"} onClick={() => setTab("new")}>
            {t('collection.tabs.newFabrics')}
          </TabButton>
          <TabButton active={tab === "factory"} onClick={() => setTab("factory")}>
            Factory
          </TabButton>
        </div>
      </div>

      {/* Title + Grid */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#b35b28] mb-4 sm:mb-6">
        {title}
      </h2>
      <CardGrid items={items} t={t} />
    </div>
  );
}