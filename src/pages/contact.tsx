import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  const offices = [
    {
      title: t("contact.offices.mainFactory"),
      address: t("contact.offices.mainFactoryAddress"),
      phone: t("contact.offices.mainFactoryPhone"),
      email: t("contact.offices.mainFactoryEmail"),
    },
    {
      title: t("contact.offices.puyuanBranch"),
      address: t("contact.offices.puyuanBranchAddress"),
      email: t("contact.offices.puyuanBranchEmail"),
    },
    {
      title: t("contact.offices.koreaOffice"),
      address: t("contact.offices.koreaOfficeAddress"),
      email: t("contact.offices.koreaOfficeEmail"),
    },
    {
      title: t("contact.offices.hongKongOffice"),
      address: t("contact.offices.hongKongOfficeAddress"),
      email: t("contact.offices.hongKongOfficeEmail"),
    },
    {
      title: t("contact.offices.japanOffice"),
      email: t("contact.offices.japanOfficeEmail"),
    },
    {
      title: t("contact.offices.ukOffice"),
      email: t("contact.offices.ukOfficeEmail"),
    },
    {
      title: t("contact.offices.businessDept1"),
      name: t("contact.offices.businessDept1Contact"),
      email: t("contact.offices.businessDept1Email"),
    },
    {
      title: t("contact.offices.businessDept2"),
      name: t("contact.offices.businessDept2Contact"),
      email: t("contact.offices.businessDept2Email"),
    },
    {
      title: t("contact.offices.businessDept3"),
      name: t("contact.offices.businessDept3Contact"),
      email: t("contact.offices.businessDept3Email"),
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] flex items-center justify-center text-white text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/BGcontact.jpg')" }}
      >
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Blue/brown soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2b3d]/80 via-[#2d4a6a]/50 to-[#b35b28]/40" />

        <div className="relative z-10 max-w-4xl px-4 sm:px-6">
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm">
              <span className="w-2 h-2 bg-[#b35b28] rounded-full animate-pulse" />
              <span className="font-medium">Global Reach • Local Excellence</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 drop-shadow-2xl tracking-tight">
            {t("contact.hero.title")}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto font-light leading-relaxed">
            {t("contact.hero.subtitle")}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#1b2b3d] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Back to Home
            </Link>

            <a
              href="mailto:ceo@okyarn.com"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1b2b3d] transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("contact.locations.title")}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#b35b28] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-[#b35b28]/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-[#b35b28] mb-3 sm:mb-4">
                  {office.title}
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {office.address && (
                    <div className="flex items-start gap-2 sm:gap-3 text-gray-700">
                      <div className="bg-[#b35b28]/10 p-2 rounded-lg shrink-0">
                        <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-[#b35b28]" />
                      </div>
                      <span className="text-xs sm:text-sm leading-relaxed">
                        {office.address}
                      </span>
                    </div>
                  )}

                  {office.phone && (
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                      <div className="bg-[#b35b28]/10 p-2 rounded-lg shrink-0">
                        <FaPhoneAlt className="w-4 h-4 sm:w-5 sm:h-5 text-[#b35b28]" />
                      </div>
                      <span className="text-xs sm:text-sm">{office.phone}</span>
                    </div>
                  )}

                  {office.email && (
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                      <div className="bg-[#b35b28]/10 p-2 rounded-lg shrink-0">
                        <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-[#b35b28]" />
                      </div>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-xs sm:text-sm text-[#b35b28] hover:underline break-all"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}

                  {office.name && (
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <p className="text-xs sm:text-sm text-gray-500">
                        {t("contact.contactLabels.contact")}:{" "}
                        <span className="font-semibold text-gray-700">
                          {office.name}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 md:px-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-4 sm:p-6 bg-gradient-to-r from-[#1b2b3d] to-[#2d4a6a] text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
              {t("contact.locations.title")}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm">
              Visit our main factory in Suzhou, China
            </p>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe
              title={t("contact.locations.mapTitle")}
              src={`https://www.google.com/maps?q=${t(
                "contact.locations.mapQuery"
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}