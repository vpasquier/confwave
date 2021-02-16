import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    defaultNS: "translation",
    ns: "translation",

    keySeparator: false, // we use content as keys

    interpolation: {
      formatSeparator: ","
    },

    react: {
      wait: true,
      useSuspense: false,
    }
  });

export default i18n;
