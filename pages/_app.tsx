import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
  <Component {...pageProps} />
  <Analytics />
  </>
)

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)
