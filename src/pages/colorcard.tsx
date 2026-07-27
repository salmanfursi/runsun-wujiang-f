import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PDFModal from "../components/PDFModal";
import { R2_BASE } from "../lib/r2";

type Card = { title: string; img: string; desc: string; pdfLink?: string };

// --- Color Cards ---
const getBaseCards = (t: any): Card[] => [
  {
    title: t('colorCard.products.cashmere.title'),
    img: "/colorcard/cashmere.png",
    desc: t('colorCard.products.cashmere.desc'),
    pdfLink: "/assets/pdf/CASHMERE.pdf"
  },
  {
    title: t('colorCard.products.humanNature.title'),
    img: "/colorcard/humanandnature.png",
    desc: t('colorCard.products.humanNature.desc'),
    pdfLink: "/assets/pdf/HUMAN_AND_NATURE_COLLECTION.pdf"
  },
  {
    title: t('colorCard.products.luxuryMaterial.title'),
    img: "/colorcard/luxury.png",
    desc: t('colorCard.products.luxuryMaterial.desc'),
    pdfLink: "/assets/pdf/luxury material.pdf"
  },
  {
    title: t('colorCard.products.semiWorsted.title'),
    img: "/colorcard/semiworsted.png",
    desc: t('colorCard.products.semiWorsted.desc'),
    pdfLink: "/assets/pdf/semi-worsted (1).pdf"
  },
  {
    title: t('colorCard.products.sustainableFunction.title'),
    img: "/colorcard/sustainable.png",
    desc: t('colorCard.products.sustainableFunction.desc'),
    pdfLink: "/assets/pdf/sustainable&function collection.pdf"
  },
  {
    title: t('colorCard.products.traditionalWoolen.title'),
    img: "/colorcard/traditionalwoolen.png",
    desc: t('colorCard.products.traditionalWoolen.desc'),
    pdfLink: "/assets/pdf/Traditional woolen.pdf"
  },
];

// --- E-Color Cards ---
const getEColorCards = (t: any): Card[] => [
  {
    title: t('colorCard.products.bestseller.title'),
    img: "/ecolor/bestseller.png",
    desc: t('colorCard.products.bestseller.desc'),
    pdfLink: "/assets/pdf/BEST_SELLER_COLLECTION.pdf"
  },
  {
    title: t('colorCard.products.runsun9.title'),
    img: "/ecolor/runsun9.png",
    desc: t('colorCard.products.runsun9.desc'),
    pdfLink: "/assets/pdf/RUNSUN方片9.pdf"
  },
  {
    title: t('colorCard.products.runsunA.title'),
    img: "/ecolor/runsunA.png",
    desc: t('colorCard.products.runsunA.desc'),
    pdfLink: "/assets/pdf/RUNSUN方片A.pdf"
  },
  {
    title: t('colorCard.products.runsunJ.title'),
    img: "/ecolor/runsunJ.png",
    desc: t('colorCard.products.runsunJ.desc'),
    pdfLink: "/assets/pdf/RUNSUN方片J.pdf"
  },
  {
    title: "RUNSUN方片K",
    img: "/ecolor/runsunA.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN方片K.pdf"
  },
  {
    title: "RUNSUN方片Q",
    img: "/ecolor/runsun9.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN方片Q.pdf"
  },
  {
    title: "RUNSUN梅花6",
    img: "/ecolor/bestseller.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN梅花6.pdf"
  },
  {
    title: "RUNSUN梅花7",
    img: "/ecolor/runsunJ.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN梅花7.pdf"
  },
  {
    title: "RUNSUN梅花8",
    img: "/ecolor/runsunA.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN梅花8.pdf"
  },
  {
    title: "RUNSUN梅花9",
    img: "/ecolor/runsun9.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN梅花9.pdf"
  },
  {
    title: "RUNSUN梅花A",
    img: "/ecolor/bestseller.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN梅花A.pdf"
  },
  {
    title: "RUNSUN梅花Q",
    img: "/ecolor/runsunJ.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN梅花Q.pdf"
  },
  {
    title: "RUNSUN红桃A",
    img: "/ecolor/runsunA.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN红桃A.pdf"
  },
  {
    title: "RUNSUN红桃J",
    img: "/ecolor/runsun9.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN红桃J.pdf"
  },
  {
    title: "RUNSUN红桃K",
    img: "/ecolor/bestseller.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN红桃K.pdf"
  },
  {
    title: "RUNSUN红桃Q",
    img: "/ecolor/runsunA.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN红桃Q.pdf"
  },
  {
    title: "RUNSUN黑桃6",
    img: "/ecolor/runsunJ.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN黑桃6.pdf"
  },
  {
    title: "RUNSUN黑桃7",
    img: "/ecolor/runsun9.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN黑桃7.pdf"
  },
  {
    title: "RUNSUN黑桃8",
    img: "/ecolor/bestseller.png", // Using available image as placeholder
    desc: "Premium e-color card collection",
    pdfLink: "/assets/pdf/RUNSUN黑桃8.pdf"
  },
];

// --- Models Section ---
const getModelCards = (t: any): Card[] => [
  {
    title: t('colorCard.products.model1.title'),
    img: "/assets/models/model_1.jpg",
    desc: t('colorCard.products.model1.desc'),
  },
  {
    title: t('colorCard.products.model2.title'),
    img: "/assets/models/model_2.jpg",
    desc: t('colorCard.products.model2.desc'),
  },
  {
    title: t('colorCard.products.model3.title'),
    img: "/assets/models/model_3.jpg",
    desc: t('colorCard.products.model3.desc'),
  },
  {
    title: t('colorCard.products.model4.title'),
    img: "/assets/models/model_4.jpg",
    desc: t('colorCard.products.model4.desc'),
  },
  {
    title: t('colorCard.products.model5.title'),
    img: "/assets/models/model_5.jpg",
    desc: t('colorCard.products.model5.desc'),
  },
  {
    title: "Model 6",
    img: "/assets/models/model_6.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 7",
    img: "/assets/models/model_7.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 8",
    img: "/assets/models/model_8.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 9",
    img: "/assets/models/model_9.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 10",
    img: "/assets/models/model_10.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 11",
    img: "/assets/models/model_11.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 12",
    img: "/assets/models/model_12.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 13",
    img: "/assets/models/model_13.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 14",
    img: "/assets/models/model_14.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 15",
    img: "/assets/models/model_15.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 16",
    img: "/assets/models/model_16.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 17",
    img: "/assets/models/model_17.jpg",
    desc: "Professional model showcase",
  },
  {
    title: "Model 18",
    img: "/assets/models/model_18.jpg",
    desc: "Professional model showcase",
  },
];

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm md:text-base transition
        ${
          active
            ? "bg-[#b35b28] text-white border-[#b35b28]"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
        }`}
    >
      {children}
    </button>
  );
};

const CardGrid = ({ items, showPdf, onCardClick }: { items: Card[]; showPdf?: boolean; onCardClick?: (card: Card) => void }) => (
  <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-gray-50 text-gray-800">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {items.map((card, index) => (
        <div
          key={index}
          className={`relative rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition hover:-translate-y-2 bg-white will-change-transform ${
            showPdf && card.pdfLink ? "hover:shadow-2xl" : ""
          }`}
          onClick={() => showPdf && card.pdfLink && onCardClick?.(card)}
        >
          {/* Image with optimization */}
          <div className="relative aspect-[3/4] bg-gray-100">
            <img
              src={`${R2_BASE}${card.img}`}
              alt={card.title}
              className="w-full h-full object-cover"
              loading={index < 6 ? "eager" : "lazy"}
              fetchPriority={index < 3 ? "high" : "auto"}
              style={{ contentVisibility: "auto" }}
            />
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-3 sm:p-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-300 mb-2">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mb-3 sm:mb-4 line-clamp-2">{card.desc}</p>
            {showPdf && card.pdfLink && (
              <div className="mt-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#b35b28] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#a04d20] transition">
                View PDF
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ColorCard = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"color" | "ecolor" | "models">("color");
  const [pdfModal, setPdfModal] = useState({ isOpen: false, pdfUrl: "", title: "" });

  // Preload critical images for faster initial load
  useEffect(() => {
    const criticalImages = [
      `${R2_BASE}/colorcard/cashmere.png`,
      `${R2_BASE}/colorcard/humanandnature.png`,
      `${R2_BASE}/colorcard/luxury.png`,
      `${R2_BASE}/ecolor/bestseller.png`,
      `${R2_BASE}/assets/models/model_1.jpg`,
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const items =
    tab === "color"
      ? getBaseCards(t)
      : tab === "ecolor"
      ? getEColorCards(t)
      : getModelCards(t);

  const title =
    tab === "color"
      ? t('colorCard.tabs.colorCards')
      : tab === "ecolor"
      ? t('colorCard.tabs.eColorCards')
      : t('colorCard.tabs.models');

  const handleCardClick = (card: Card) => {
    if (card.pdfLink) {
      setPdfModal({
        isOpen: true,
        pdfUrl: `${R2_BASE}${card.pdfLink}`,
        title: card.title,
      });
    }
  };

  const handleClosePdfModal = () => {
    setPdfModal({ isOpen: false, pdfUrl: "", title: "" });
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[35vh] sm:h-[40vh] md:h-[55vh] flex items-center justify-center text-white text-center">
        <img
          src={`${R2_BASE}/assets/images/colorCardBanner.jpg`}
          alt={t('colorCard.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl px-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {t('colorCard.hero.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            {t('colorCard.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Tabs overlay (above hero) */}
      <div className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-6 sm:mb-8">
        <div className="bg-white shadow-md rounded-xl sm:rounded-2xl p-2 sm:p-3 flex gap-2 sm:gap-3 flex-wrap justify-center w-fit mx-auto">
          <TabButton active={tab === "color"} onClick={() => setTab("color")}>
            {t('colorCard.tabs.colorCards')} (6)
          </TabButton>
          <TabButton active={tab === "ecolor"} onClick={() => setTab("ecolor")}>
            {t('colorCard.tabs.eColorCards')} (19)
          </TabButton>
          <TabButton active={tab === "models"} onClick={() => setTab("models")}>
            {t('colorCard.tabs.models')} (18)
          </TabButton>
        </div>
      </div>

      {/* Title + Grid */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#b35b28] mb-4 sm:mb-6">
        {title}
      </h2>
      <CardGrid items={items} showPdf={tab !== "models"} onCardClick={handleCardClick} />

      {/* PDF Modal */}
      <PDFModal
        isOpen={pdfModal.isOpen}
        pdfUrl={pdfModal.pdfUrl}
        title={pdfModal.title}
        onClose={handleClosePdfModal}
      />
    </div>
  );
};

export default ColorCard;
