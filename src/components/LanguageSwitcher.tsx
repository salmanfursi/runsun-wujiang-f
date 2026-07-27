import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
}

export default function LanguageSwitcher({ className = '', showIcon = true }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language === 'zh' ? '中文' : 'EN';

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/30 text-white hover:bg-white/20 transition-colors ${className}`}
      aria-label={`Switch language. Current: ${currentLanguage}`}
    >
      {showIcon && <Languages className="w-4 h-4" />}
      <span className="text-sm font-medium">{currentLanguage}</span>
    </button>
  );
}