import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import factory from "../assets/client/factory-aerial-hd.jpg";
import eventTeam from "../assets/client/hd-originals/event-team.jpeg";
import eventFeature from "../assets/client/hd-originals/event-feature.png";
import eventActivity1 from "../assets/client/hd-originals/event-activity-1.jpeg";
import eventActivity2 from "../assets/client/hd-originals/event-activity-2.jpeg";
import cooperation1 from "../assets/client/hd-originals/cooperation-1.jpg";
import cooperation2 from "../assets/client/hd-originals/cooperation-2.jpeg";
import globalExhibition1 from "../assets/client/hd-originals/global-exhibition-1.jpg";
import globalExhibition2 from "../assets/client/hd-originals/global-exhibition-2.jpg";
import globalExhibition3 from "../assets/client/hd-originals/global-exhibition-3.jpg";
import globalExhibition4 from "../assets/client/hd-originals/global-exhibition-4.jpg";
import globalExhibition5 from "../assets/client/hd-originals/global-exhibition-5.jpeg";
import globalExhibition6 from "../assets/client/hd-originals/global-exhibition-6.jpeg";
import globalExhibition7 from "../assets/client/hd-originals/global-exhibition-7.jpeg";

const cooperationImages = [
  cooperation1,
  cooperation2,
];
const exhibitions = [
  globalExhibition1,
  globalExhibition2,
  globalExhibition3,
  globalExhibition4,
  globalExhibition5,
  globalExhibition6,
  globalExhibition7,
];
export default function CompanyCulture() {
  const { t } = useTranslation();
  const [cooperationSelected, setCooperationSelected] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <main className="bg-[#faf8f2] text-gray-800">
      <section className="relative min-h-[45vh] md:min-h-[60vh] flex items-center justify-center pt-24 pb-16">
        <img
          src={factory}
          alt={t("culture.factoryAlt")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-3xl md:text-5xl font-bold px-6 text-center">
          {t("culture.title")}
        </h1>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-16 md:space-y-24">
        <section aria-labelledby="company-events">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 mb-8">
            <img
              src={eventTeam}
              alt={t("culture.eventAlt")}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
            <div>
              <h2
                id="company-events"
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                {t("culture.events")}
              </h2>
              <p className="text-lg text-[#b35b28]">
                {t("culture.eventsSubtitle")}
              </p>
            </div>
          </div>
          <img
            src={eventFeature}
            alt={t("culture.eventAlt")}
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[eventActivity1, eventActivity2].map(
              (image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={t("culture.eventAlt") + " " + (index + 1)}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              ),
            )}
          </div>
        </section>
        <section aria-labelledby="cooperation">
          <h2 id="cooperation" className="text-2xl md:text-3xl font-bold mb-3">
            {t("culture.cooperation")}
          </h2>
          <p className="text-lg text-[#b35b28] mb-6">
            {t("culture.cooperationSubtitle")}
          </p>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t("culture.cooperation")}
          >
            <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden">
              <img
                src={cooperationImages[cooperationSelected]}
                alt={
                  t("culture.cooperationAlt") + " " + (cooperationSelected + 1)
                }
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <button
                type="button"
                aria-label={t("culture.previous")}
                onClick={() =>
                  setCooperationSelected(
                    (cooperationSelected + cooperationImages.length - 1) %
                      cooperationImages.length,
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/95 shadow rounded-full hover:bg-orange-50"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                aria-label={t("culture.next")}
                onClick={() =>
                  setCooperationSelected(
                    (cooperationSelected + 1) % cooperationImages.length,
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/95 shadow rounded-full hover:bg-orange-50"
              >
                <ChevronRight />
              </button>
            </div>
            <p className="sr-only" aria-live="polite">
              {t("culture.image")} {cooperationSelected + 1} /{" "}
              {cooperationImages.length}
            </p>
            <div className="flex justify-center gap-3 mt-5">
              {cooperationImages.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setCooperationSelected(index)}
                  aria-label={t("culture.image") + " " + (index + 1)}
                  aria-pressed={cooperationSelected === index}
                  className={
                    "w-3 h-3 rounded-full ring-offset-4 focus-visible:ring-2 ring-[#b35b28] " +
                    (cooperationSelected === index
                      ? "bg-[#b35b28]"
                      : "bg-gray-300")
                  }
                />
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="global-exhibitions">
          <h2
            id="global-exhibitions"
            className="text-2xl md:text-3xl font-bold mb-3"
          >
            {t("culture.exhibitions")}
          </h2>
          <p className="font-medium text-[#b35b28] mb-4">
            {t("culture.cities")}
          </p>
          <h3 className="text-xl font-normal mb-3">
            {t("culture.exhibitionsSlogan")}
          </h3>
          <p className="leading-relaxed text-gray-600 mb-8">
            {t("culture.exhibitionsDescription")}
          </p>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t("culture.exhibitions")}
          >
            <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden">
              <img
                src={exhibitions[selected]}
                alt={t("culture.exhibitionAlt") + " " + (selected + 1)}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <button
                type="button"
                aria-label={t("culture.previous")}
                onClick={() =>
                  setSelected(
                    (selected + exhibitions.length - 1) % exhibitions.length,
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/95 shadow rounded-full hover:bg-orange-50"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                aria-label={t("culture.next")}
                onClick={() => setSelected((selected + 1) % exhibitions.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/95 shadow rounded-full hover:bg-orange-50"
              >
                <ChevronRight />
              </button>
            </div>
            <p className="sr-only" aria-live="polite">
              {t("culture.image")} {selected + 1} / {exhibitions.length}
            </p>
            <div className="flex justify-center gap-3 mt-5">
              {exhibitions.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setSelected(index)}
                  aria-label={t("culture.image") + " " + (index + 1)}
                  aria-pressed={selected === index}
                  className={
                    "w-3 h-3 rounded-full ring-offset-4 focus-visible:ring-2 ring-[#b35b28] " +
                    (selected === index ? "bg-[#b35b28]" : "bg-gray-300")
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
