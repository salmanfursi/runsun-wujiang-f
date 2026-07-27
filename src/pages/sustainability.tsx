import { useTranslation } from "react-i18next";
import { R2_BASE } from "../lib/r2";

export default function Sustainability() {
  const { t } = useTranslation();

  const topics = [
    {
      title: t('sustainability.topics.commitments.title'),
      desc: t('sustainability.topics.commitments.desc'),
    },
    {
      title: t('sustainability.topics.naturalFarm.title'),
      desc: t('sustainability.topics.naturalFarm.desc'),
    },
    {
      title: t('sustainability.topics.carbonNeutrality.title'),
      desc: t('sustainability.topics.carbonNeutrality.desc'),
    },
    {
      title: t('sustainability.topics.certifications.title'),
      desc: t('sustainability.topics.certifications.desc'),
    },
  ];

  const certificates = [
    { id: 1, image: `${R2_BASE}/sustanibility/certificates/c-1.png` },
    { id: 2, image: `${R2_BASE}/sustanibility/certificates/c-2.png` },
    { id: 3, image: `${R2_BASE}/sustanibility/certificates/c-3.png` },
    { id: 4, image: `${R2_BASE}/sustanibility/certificates/c-4.png` },
    { id: 5, image: `${R2_BASE}/sustanibility/certificates/c-5.png` },
    { id: 6, image: `${R2_BASE}/sustanibility/certificates/c-6.png` },
    { id: 7, image: `${R2_BASE}/sustanibility/certificates/c-7.png` },
    { id: 8, image: `${R2_BASE}/sustanibility/certificates/c-8.png` },
    { id: 9, image: `${R2_BASE}/sustanibility/certificates/c-9.png` },
    { id: 10, image: `${R2_BASE}/sustanibility/certificates/c-10.png` },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${R2_BASE}/sustanibility/sustanibilitybg.jpg`}
            alt="Sustainability Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">{t('sustainability.hero.title')}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            {t('sustainability.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* LEFT COLUMN: list of topics */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#b35b28] mb-3 sm:mb-4">
              {t('sustainability.focus')}
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {topics.map((topic, idx) => (
                <li key={idx} className="border-b pb-3 sm:pb-4">
                  <h3 className="text-base sm:text-lg font-bold">{topic.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{topic.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: illustrative image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={`${R2_BASE}/sustanibility/wireball.jpg`}
              alt={t('sustainability.hero.alt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            {t('sustainability.certificationsTitle')}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square">
                  <img
                    src={cert.image}
                    alt={`Certificate ${cert.id}`}
                    className="w-full h-full object-contain p-1 sm:p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
