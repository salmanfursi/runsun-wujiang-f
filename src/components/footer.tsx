import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { SiXiaohongshu } from "react-icons/si"; // Red Note (Xiaohongshu)
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1b2b3d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- CONTACT SECTION --- */}
        <div className="space-y-4">
          <h4 className="text-[#b35b28] font-semibold text-lg">
            {t('footer.company.name')}
          </h4>

          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-[#b35b28]" />
            <span>
              {t('footer.company.address')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#b35b28]" />
            <span>{t('footer.company.phone')}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#b35b28]" />
            <span>{t('footer.company.email')}</span>
          </div>
        </div>

        {/* --- PRODUCTS / SOLUTIONS --- */}
        <div className="space-y-2">
          <h4 className="text-[#b35b28] font-semibold">{t('footer.products.title')}</h4>
          <ul className="space-y-1 text-gray-300">
            <li>{t('footer.products.cashmereYarns')}</li>
            <li>{t('footer.products.woolBlends')}</li>
            <li>{t('footer.products.cottonLinen')}</li>
            <li>{t('footer.products.ecoFibers')}</li>
            <li>{t('footer.products.recycledMaterials')}</li>
            <li>{t('footer.products.customSolutions')}</li>
          </ul>
        </div>

        {/* --- COMPANY --- */}
        <div className="space-y-2">
          <h4 className="text-[#b35b28] font-semibold">{t('footer.company.title')}</h4>
          <ul className="space-y-1 text-gray-300">
            <li>{t('footer.company.aboutUs')}</li>
            <li>{t('navbar.sustainability')}</li>
            <li>{t('footer.company.certifications')}</li>
            <li>{t('footer.company.ourFactory')}</li>
            <li>{t('navbar.contact')}</li>
            <li>{t('footer.company.news')}</li>
          </ul>
        </div>

        {/* --- RESOURCES + SOCIAL MEDIA --- */}
        <div className="space-y-2">
          <h4 className="text-[#b35b28] font-semibold">{t('footer.resources.title')}</h4>
          <ul className="space-y-1 text-gray-300">
            <li>{t('footer.resources.blog')}</li>
            <li>{t('footer.resources.fabricCare')}</li>
            <li>{t('footer.resources.technicalSpecs')}</li>
            <li>{t('footer.resources.downloadBrochure')}</li>
            <li>{t('footer.resources.careers')}</li>
          </ul>

          {/* --- SOCIAL ICONS --- */}
          <div className="flex gap-4 mt-4 text-2xl">
            <IoLogoWechat
              className="hover:text-[#b35b28] cursor-pointer"
              title={t('footer.socialMedia.wechat')}
            />
            <SiXiaohongshu
              className="hover:text-[#b35b28] cursor-pointer"
              title={t('footer.socialMedia.xiaohongshu')}
            />
            <FaLinkedinIn
              className="hover:text-[#b35b28] cursor-pointer"
              title={t('footer.socialMedia.linkedin')}
            />
            <FaInstagram
              className="hover:text-[#b35b28] cursor-pointer"
              title={t('footer.socialMedia.instagram')}
            />
          </div>
        </div>
      </div>

      {/* --- FOOTER BOTTOM --- */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
