import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import eng from "./locales/eng/index";

const isDevMode = process.env.mode === "development";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      eng,
    },
    lng: "eng",
    debug: isDevMode,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;
