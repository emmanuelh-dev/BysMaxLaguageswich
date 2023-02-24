/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type common from '../public/locales/en/common.json'
import type footer from '../public/locales/en/footer.json'
import type header from '../public/locales/en/header.json'
import type homepage from '../public/locales/en/homepage.json'
import type contact from '../public/locales/en/contact.json'
import type calculators from '../public/locales/en/calculators.json'
import type electronic from '../public/locales/en/electronic.json'

interface I18nNamespaces {
  common: typeof common
  homepage: typeof homepage
  contact: typeof contact

  footer: typeof footer
  header: typeof header
  calculators: typeof calculators
  electronic: typeof electronic
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
