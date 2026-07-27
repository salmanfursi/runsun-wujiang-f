import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import BG1 from "../assets/BG1.jpeg";
import BG2 from "../assets/BG2.jpg";
import BG3 from "../assets/BG3.jpg";


export default function HeroSection() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize Embla carousel with autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const slides = [
    { id: 1, image: BG1, alt: t('heroSection.alt1') },
    { id: 2, image: BG2, alt: t('heroSection.alt2') },
    { id: 3, image: BG3, alt: t('heroSection.alt3') },
  ];

  if (!mounted) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-[#1b2b3d]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="animate-pulse">
            <div className="w-16 h-16 border-4 border-white/30 border-t-orange-400 rounded-full"></div>
          </div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-shrink-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Static Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
        <h1 className="text-4xl md:text-6xl font-bold">{t('heroSection.title')}</h1>
        <p className="mt-4 text-lg md:text-2xl">
          {t('heroSection.subtitle')}
        </p>
         <button className="mt-5 px-6 py-3 border-2 border-orange-400 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-orange-400 hover:text-white">
        {t('heroSection.viewProducts')}
      </button>
      </div>
    </section>
  );
}
