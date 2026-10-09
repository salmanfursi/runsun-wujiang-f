import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Languages, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import sunmunLogo from "../assets/runsun-logo-padded.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  useEffect(() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }, [pathname]);
  const [activeLang, setActiveLang] = useState(i18n.language === 'zh' ? '中文' : 'EN');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t('navbar.home') },
    { to: '/yarn', label: t('navbar.colorCards') },
    { to: '/collections', label: t('navbar.collections') },
    { to: '/sustainability', label: t('navbar.sustainability') },
    { to: '/company-culture', label: t('navbar.companyCulture') },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="px-4 sm:px-6 py-1.5 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 xl:gap-6">
        {/* Left side - Logo on mobile, Navigation on desktop */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2 rounded-lg transition ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={t("navbar.menu")}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex gap-4 text-sm font-medium whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${scrolled ? 'text-gray-800' : 'text-white'} relative px-1 py-1 hover:border-b-2 hover:border-orange-400 transition`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Center - Logo */}
        <div className="shrink-0">
          <Link to="/" aria-label={t("heroSection.title")}><img
            src={sunmunLogo}
            alt={t('navbar.logoAlt')}
            className="h-10 sm:h-11 md:h-12 w-auto object-contain block"
          /></Link>
        </div>

        {/* Right side - Desktop */}
        <div className="hidden xl:flex items-center space-x-3 justify-self-end whitespace-nowrap">
          {/* Search bar */}
          <div className="relative">
            <Search className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 ${scrolled ? 'text-gray-600' : 'text-gray-800'}`} />
            <input
              type="text"
              placeholder={t('navbar.search')}
              className={`pl-8 pr-3 py-1.5 rounded-full border text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 w-32 transition-all ${
                scrolled
                  ? 'border-gray-300 text-gray-800 bg-white'
                  : 'border-white text-white bg-white/10 placeholder-white/70'
              }`}
            />
          </div>

          {/* Contact button */}
          <Link
            to="/contact"
            className={`px-5 py-2 rounded-full border font-medium hover:bg-orange-400 hover:text-white transition-all ${
              scrolled
                ? 'border-orange-400 text-orange-400'
                : 'border-orange-400 text-white'
            }`}
          >
            {t('navbar.contact')}
          </Link>

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <Languages className={`${scrolled ? 'text-gray-800' : 'text-white'} w-4 h-4`} />
            <div className={`flex border rounded-full overflow-hidden text-sm ${
              scrolled ? 'border-gray-300' : 'border-white'
            }`}>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setActiveLang('EN');
                }}
                className={`px-3 py-1 transition ${
                  activeLang === "EN"
                    ? "bg-orange-400 text-white"
                    : scrolled
                    ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
                    : "text-gray-800 bg-white hover:bg-gray-100"
                }`}
              >
                {t('language.english')}
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('zh');
                  setActiveLang('中文');
                }}
                className={`px-3 py-1 transition ${
                  activeLang === "中文"
                    ? "bg-orange-400 text-white"
                    : scrolled
                    ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
                    : "text-gray-800 bg-white hover:bg-gray-100"
                }`}
              >
                {t('language.chinese')}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Contact button */}
        <Link
          to="/contact"
          className={`xl:hidden justify-self-end whitespace-nowrap px-4 py-2 rounded-full font-medium text-sm transition ${
            scrolled
              ? 'bg-orange-400 text-white'
              : 'bg-orange-400 text-white'
          }`}
        >
          {t('navbar.contact')}
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div id="mobile-menu" className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="p-6 space-y-6 h-full overflow-y-auto">
              {/* Close button */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">{t("navbar.menu")}</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <X className="w-6 h-6 text-gray-800" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-800 hover:bg-orange-50 hover:text-orange-600 font-medium transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Search */}
              <div className="pt-4 border-t">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('navbar.search')}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              {/* Language Toggle */}
              <div className="pt-4 border-t">
                <div className="flex items-center gap-3 mb-3">
                  <Languages className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-800">{t("navbar.language")}</span>
                </div>
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setActiveLang('EN');
                    }}
                    className={`flex-1 px-4 py-3 transition font-medium ${
                      activeLang === "EN"
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {t('language.english')}
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('zh');
                      setActiveLang('中文');
                    }}
                    className={`flex-1 px-4 py-3 transition font-medium ${
                      activeLang === "中文"
                        ? "bg-orange-400 text-white"
                        : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {t('language.chinese')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
