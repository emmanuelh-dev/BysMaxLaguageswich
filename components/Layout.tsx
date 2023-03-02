import { useTranslation } from "next-i18next";
import type { FC } from "react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const { t } = useTranslation("footer");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemapes.xml" />
        <link rel="sitemap" type="application/xml" href="/sitemapfr.xml" />
        <link rel="shortcut icon" href="/icon.jpg" />
      </Head>
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};
