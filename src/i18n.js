import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar os arquivos JSON
import translationEN from './locales/en/translations.json';
import translationPT from './locales/pt/translations.json';

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT }
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador automaticamente
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Idioma padrão caso a detecção falhe
    interpolation: {
      escapeValue: false // O React já protege contra XSS
    }
  });

export default i18n;