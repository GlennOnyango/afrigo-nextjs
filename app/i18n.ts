import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import cnCommon from "./locales/cn/common.json";

const resources = {
  en: { common: enCommon },
  cn: { common: cnCommon },
} as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
