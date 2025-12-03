import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    // Language change is automatically persisted via i18n config
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-md flex items-center gap-2 border border-gray-300"
      variant="outline"
      size="sm"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {i18n.language === 'en' ? '中文' : 'EN'}
      </span>
    </Button>
  );
}
