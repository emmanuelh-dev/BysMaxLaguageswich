/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  fallbackLng: "es",
  /* Otras opciones de configuración de i18next */
});


import type common from '../public/locales/es/common.json'
import type footer from '../public/locales/es/footer.json'
import type header from '../public/locales/es/header.json'
import type homepage from '../public/locales/es/homepage.json'
import type contact from '../public/locales/es/contact.json'
import type calcs from '../public/locales/es/calcs.json'
import type electronic from '../public/locales/es/electronic.json'
import type transformator from '../public/locales/es/transformator.json'

interface I18nNamespaces {
  common: typeof common
  homepage: typeof homepage
  contact: typeof contact

  footer: typeof footer
  header: typeof header
  calcs: typeof calcs[]
  electronic: typeof electronic
  transformator: typeof transformator
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: I18nNamespaces
  }
}
