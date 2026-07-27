// import FeatureCard from "../components/featureCard";
import HeroSection from "../components/heroSection";
import { useTranslation } from "react-i18next";
import VideoPlayer from "../components/VideoPlayer";
import { R2_BASE } from "../lib/r2";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      {/* Hero with carousel */}
      <section className="w-full h-screen overflow-hidden">
        <HeroSection />
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('home.exhibition.title')}</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            {t('home.exhibition.subtitle')}
          </p>
        </div>

        {/* Product Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Box 1 */}
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            <img
              src={`${R2_BASE}/assets/images/Products (1).jpg`}
              alt={t('home.exhibition.imageAlt1')}
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">{t('home.exhibition.products.topQuality.title')}</h3>
              <p className="text-xs sm:text-sm mt-2">
                {t('home.exhibition.products.topQuality.desc')}
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            <img
              src={`${R2_BASE}/assets/images/Products (2).jpg`}
              alt={t('home.exhibition.imageAlt2')}
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">{t('home.exhibition.products.wideRange.title')}</h3>
              <p className="text-xs sm:text-sm mt-2">
                {t('home.exhibition.products.wideRange.desc')}
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
            <img
              src={`${R2_BASE}/assets/images/Products (3).jpg`}
              alt={t('home.exhibition.imageAlt3')}
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold">{t('home.exhibition.products.sustainability.title')}</h3>
              <p className="text-xs sm:text-sm mt-2">
                {t('home.exhibition.products.sustainability.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Yarn Products Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 flex justify-center items-center">
        {/* Bottom Card (orange background) */}
        <div className="absolute w-11/12 sm:w-10/12 md:w-9/12 inset-0 mx-auto my-auto bg-orange-400 rounded-2xl sm:rounded-3xl transform rotate-1 shadow-xl"></div>

        {/* Top Card (video with error handling) */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-5xl w-full p-0 overflow-hidden transform -rotate-1">
          <div className="w-full aspect-video sm:h-80">
            <VideoPlayer
              src={`${R2_BASE}/assets/video/yarnFactory.mp4`}
              fallback={
                <div className="w-full h-full bg-gradient-to-br from-[#1b2b3d] to-[#b35b28] flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{t('home.videoSection.title')}</h3>
                    <p className="text-xs sm:text-sm opacity-80">Video temporarily unavailable</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          {/* Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-2 sm:mb-3 text-2xl sm:text-3xl">📍</div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t('home.contactInfo.mainOffice')}</h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {t('home.contactInfo.mainAddress')}
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-2 sm:mb-3 text-2xl sm:text-3xl">📞</div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t('home.contactInfo.phoneNumber')}</h4>
              <p className="text-xs sm:text-sm text-gray-700">{t('home.contactInfo.phoneNumbers')}</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-2 sm:mb-3 text-2xl sm:text-3xl">📠</div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">
{t('home.contactInfo.puyuanBranch')}
</h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{t('home.contactInfo.puyuanAddress')}
</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md">
              <div className="text-orange-400 mb-2 sm:mb-3 text-2xl sm:text-3xl">✉️</div>
              <h4 className="font-bold mb-2 text-sm sm:text-base">{t('home.contactInfo.email')}</h4>
              <a
                href="mailto:ceo@okyarn.com"
                className="text-xs sm:text-sm text-gray-700 hover:underline break-all"
              >
                {t('home.contactInfo.emailAddress')}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white rounded-2xl p-10 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white font-semibold py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
}
