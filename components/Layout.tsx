import { useTranslation } from "next-i18next";
import type { FC } from "react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

interface LayoutProps {
  title: string;
  description: string;
  keywords: string;
  baseUrl: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  baseUrl,
}) => {
  const { i18n } = useTranslation();
  const urlEs = `http://bysmax.com/es/${baseUrl}`;
  const urlEn = `http://bysmax.com/en/${baseUrl}`;
  const urlFr = `http://bysmax.com/fr/${baseUrl}`;
  const urlDe = `http://bysmax.com/de/${baseUrl}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content="dynamic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="language" content={i18n.language} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link rel="alternate" href={urlEs} hrefLang="es" />
        <link rel="alternate" href={urlEn} hrefLang="en" />
        <link rel="alternate" href={urlFr} hrefLang="fr" />
        <link rel="alternate" href={urlDe} hrefLang="de" />
        {/* Aquí se agrega el atributo "lang" para indicar el idioma actual de la página */}
        <html lang={i18n.language} />

        {/* Aquí se agrega el atributo "dir" para indicar la dirección de texto del idioma actual */}
        <body dir={i18n.language === "ar" ? "rtl" : "ltr"} />

        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemapes.xml" />
        <link rel="sitemap" type="application/xml" href="/sitemapfr.xml" />
        <link rel="shortcut icon" href="/icon.jpg" />
      </Head>
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4mx-auto max-w-7xl px-8 sm:px-6 overflow-hidden">
          <Header />
          <div className="px-4 overflow-hidden">
          {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
