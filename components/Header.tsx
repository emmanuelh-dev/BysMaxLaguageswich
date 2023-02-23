import { useTranslation } from "next-i18next";
import type { FC } from "react";
import Head from "next/head";
import Link from "next/link";
export const Header: FC = () => {
  const { t } = useTranslation("header");

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white">
      <Head>
        <title>Home</title>
      </Head>
      <nav className=" flex items-center justify-between container mx-auto max-w-7xl w-full pt-6 pb-6">
        <div className="flex items-center">
          <Link href="/">
          <span className="ml-2 text-xl font-bold">{t("site")}</span>
          </Link>
        </div>
        <nav className="flex items-center">
          <a href="#" className="mr-4 hover:text-yellow-600 font-semi-bold">
          {t("home")}
          </a>
          <a href="/about" className="mr-4 hover:text-yellow-600 font-semi-bold">
          {t("about")}
          </a>
          <a href="#" className="hover:text-yellow-600 font-semi-bold">
          {t("contact")}
          </a>
        </nav>
      </nav>
    </header>
  );
};
