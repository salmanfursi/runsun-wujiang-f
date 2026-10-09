import cardCover0 from "../assets/colorcards/runsun-fang-k.jpg";
import cardCover1 from "../assets/colorcards/runsun-fang-q.jpg";
import cardCover2 from "../assets/colorcards/runsun-meihua-6.jpg";
import cardCover3 from "../assets/colorcards/runsun-meihua-7.jpg";
import cardCover4 from "../assets/colorcards/runsun-meihua-8.jpg";
import cardCover5 from "../assets/colorcards/runsun-meihua-9.jpg";
import cardCover6 from "../assets/colorcards/runsun-meihua-a.jpg";
import cardCover7 from "../assets/colorcards/runsun-meihua-q.jpg";
import cardCover8 from "../assets/colorcards/runsun-hongtao-a.jpg";
import cardCover9 from "../assets/colorcards/runsun-hongtao-j.jpg";
import cardCover10 from "../assets/colorcards/runsun-hongtao-k.jpg";
import cardCover11 from "../assets/colorcards/runsun-hongtao-q.jpg";
import cardCover12 from "../assets/colorcards/runsun-heitao-6.jpg";
import cardCover13 from "../assets/colorcards/runsun-heitao-7.jpg";
import cardCover14 from "../assets/colorcards/runsun-heitao-8.jpg";
import type { TFunction } from "i18next";
import banner from "../assets/colorCardBanner.jpg";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// PDF viewer removed per request: keep static images only
import { R2_BASE } from "../lib/r2";

type Card = { title: string; img: string; desc: string; pdfLink?: string };

// --- Color Cards ---
const getBaseCards = (t: TFunction): Card[] => [
  {
    title: t("colorCard.products.cashmere.title"),
    img: "/colorcard/cashmere.png",
    desc: t("colorCard.products.cashmere.desc"),
    pdfLink: "/assets/pdf/CASHMERE.pdf",
  },
  {
    title: t("colorCard.products.humanNature.title"),
    img: "/colorcard/humanandnature.png",
    desc: t("colorCard.products.humanNature.desc"),
    pdfLink: "/assets/pdf/HUMAN_AND_NATURE_COLLECTION.pdf",
  },
  {
    title: t("colorCard.products.luxuryMaterial.title"),
    img: "/colorcard/luxury.png",
    desc: t("colorCard.products.luxuryMaterial.desc"),
    pdfLink: "/assets/pdf/luxury material.pdf",
  },
  {
    title: t("colorCard.products.semiWorsted.title"),
    img: "/colorcard/semiworsted.png",
    desc: t("colorCard.products.semiWorsted.desc"),
    pdfLink: "/assets/pdf/semi-worsted (1).pdf",
  },
  {
    title: t("colorCard.products.sustainableFunction.title"),
    img: "/colorcard/sustainable.png",
    desc: t("colorCard.products.sustainableFunction.desc"),
    pdfLink: "/assets/pdf/sustainable&function collection.pdf",
  },
  {
    title: t("colorCard.products.traditionalWoolen.title"),
    img: "/colorcard/traditionalwoolen.png",
    desc: t("colorCard.products.traditionalWoolen.desc"),
    pdfLink: "/assets/pdf/Traditional woolen.pdf",
  },
];

// --- E-Color Cards ---
const getEColorCards = (t: TFunction): Card[] => [
  {
    title: t("colorCard.products.bestseller.title"),
    img: "/ecolor/bestseller.png",
    desc: t("colorCard.products.bestseller.desc"),
    pdfLink: "/assets/pdf/BEST_SELLER_COLLECTION.pdf",
  },
  {
    title: t("colorCard.products.runsun9.title"),
    img: "/ecolor/runsun9.png",
    desc: t("colorCard.products.runsun9.desc"),
    pdfLink: "/assets/pdf/RUNSUN方片9.pdf",
  },
  {
    title: t("colorCard.products.runsunA.title"),
    img: "/ecolor/runsunA.png",
    desc: t("colorCard.products.runsunA.desc"),
    pdfLink: "/assets/pdf/RUNSUN方片A.pdf",
  },
  {
    title: t("colorCard.products.runsunJ.title"),
    img: "/ecolor/runsunJ.png",
    desc: t("colorCard.products.runsunJ.desc"),
    pdfLink: "/assets/pdf/RUNSUN方片J.pdf",
  },
  {
    title: t("colorCard.products.runsunFangK.title"),
    img: cardCover0,
    desc: t("colorCard.products.runsunFangK.desc"),
    pdfLink: "/assets/pdf/RUNSUN方片K.pdf",
  },
  {
    title: t("colorCard.products.runsunFangQ.title"),
    img: cardCover1,
    desc: t("colorCard.products.runsunFangQ.desc"),
    pdfLink: "/assets/pdf/RUNSUN方片Q.pdf",
  },
  {
    title: t("colorCard.products.runsunMeiHua6.title"),
    img: cardCover2,
    desc: t("colorCard.products.runsunMeiHua6.desc"),
    pdfLink: "/assets/pdf/RUNSUN梅花6.pdf",
  },
  {
    title: t("colorCard.products.runsunMeiHua7.title"),
    img: cardCover3,
    desc: t("colorCard.products.runsunMeiHua7.desc"),
    pdfLink: "/assets/pdf/RUNSUN梅花7.pdf",
  },
  {
    title: t("colorCard.products.runsunMeiHua8.title"),
    img: cardCover4,
    desc: t("colorCard.products.runsunMeiHua8.desc"),
    pdfLink: "/assets/pdf/RUNSUN梅花8.pdf",
  },
  {
    title: t("colorCard.products.runsunMeiHua9.title"),
    img: cardCover5,
    desc: t("colorCard.products.runsunMeiHua9.desc"),
    pdfLink: "/assets/pdf/RUNSUN梅花9.pdf",
  },
  {
    title: t("colorCard.products.runsunMeiHuaA.title"),
    img: cardCover6,
    desc: t("colorCard.products.runsunMeiHuaA.desc"),
    pdfLink: "/assets/pdf/RUNSUN梅花A.pdf",
  },
  {
    title: t("colorCard.products.runsunMeiHuaQ.title"),
    img: cardCover7,
    desc: t("colorCard.products.runsunMeiHuaQ.desc"),
    pdfLink: "/assets/pdf/RUNSUN梅花Q.pdf",
  },
  {
    title: t("colorCard.products.runsunHongTaoA.title"),
    img: cardCover8,
    desc: t("colorCard.products.runsunHongTaoA.desc"),
    pdfLink: "/assets/pdf/RUNSUN红桃A.pdf",
  },
  {
    title: t("colorCard.products.runsunHongTaoJ.title"),
    img: cardCover9,
    desc: t("colorCard.products.runsunHongTaoJ.desc"),
    pdfLink: "/assets/pdf/RUNSUN红桃J.pdf",
  },
  {
    title: t("colorCard.products.runsunHongTaoK.title"),
    img: cardCover10,
    desc: t("colorCard.products.runsunHongTaoK.desc"),
    pdfLink: "/assets/pdf/RUNSUN红桃K.pdf",
  },
  {
    title: t("colorCard.products.runsunHongTaoQ.title"),
    img: cardCover11,
    desc: t("colorCard.products.runsunHongTaoQ.desc"),
    pdfLink: "/assets/pdf/RUNSUN红桃Q.pdf",
  },
  {
    title: t("colorCard.products.runsunHeiTao6.title"),
    img: cardCover12,
    desc: t("colorCard.products.runsunHeiTao6.desc"),
    pdfLink: "/assets/pdf/RUNSUN黑桃6.pdf",
  },
  {
    title: t("colorCard.products.runsunHeiTao7.title"),
    img: cardCover13,
    desc: t("colorCard.products.runsunHeiTao7.desc"),
    pdfLink: "/assets/pdf/RUNSUN黑桃7.pdf",
  },
  {
    title: t("colorCard.products.runsunHeiTao8.title"),
    img: cardCover14,
    desc: t("colorCard.products.runsunHeiTao8.desc"),
    pdfLink: "/assets/pdf/RUNSUN黑桃8.pdf",
  },
];

const CardGrid = ({ items }: { items: Card[] }) => (
  <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map(card => (
      <figure key={card.img} className="bg-white rounded-xl shadow-md overflow-hidden">
        <img src={card.img.startsWith('/colorcard/') || card.img.startsWith('/ecolor/') ? R2_BASE + card.img : card.img} alt={card.title} className="w-full aspect-[4/3] object-contain" loading="lazy" />
        <figcaption className="px-4 py-3 font-medium text-center text-[#b35b28]">{card.title}</figcaption>
      </figure>
    ))}
  </div>
);

const ColorCard = () => {
  const { t } = useTranslation();
  useEffect(() => {
    ["cashmere", "humanandnature", "luxury"].forEach(name => { const image = new Image(); image.src = R2_BASE + "/colorcard/" + name + ".png"; });
  }, []);
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center text-white text-center pt-24 pb-16">
        <img src={banner} alt={t("colorCard.hero.alt")} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{t("colorCard.hero.title")}</h1>
          <p>{t("colorCard.hero.subtitle")}</p>
        </div>
      </section>
      <div className="relative -mt-6 mx-auto w-fit rounded-full bg-white px-8 py-3 shadow-md font-medium text-[#b35b28]">{t("colorCard.tabs.colorCards")}</div>
      <p className="text-center px-6 mt-8 text-gray-600">{t("colorCard.orderNote")}</p>
      <section aria-label={t("colorCard.newest")}><h2 className="sr-only">{t("colorCard.newest")}</h2><CardGrid items={getBaseCards(t)} /></section>
      <section aria-label={t("colorCard.older")}><h2 className="sr-only">{t("colorCard.older")}</h2><CardGrid items={getEColorCards(t)} /></section>
    </div>
  );
};
export default ColorCard;
