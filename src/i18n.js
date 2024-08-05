// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(Backend) // Loads translations from your server or public folder
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already safely escapes values
    },
    backend: {
      // Load translations from public/locales folder
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
