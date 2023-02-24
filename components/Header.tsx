import { useTranslation } from "next-i18next";
import type { FC } from "react";
import Head from "next/head";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation("header");

  return (
    <header className="bg-white text-black dark:bg-black dark:text-white">
      <Head >
        <title>{title}</title>
      </Head>
      <nav className=" p-6 flex items-center justify-between container mx-auto max-w-7xl w-full pt-6 pb-6">
        <div className="flex items-center">
          <Link href="/">
          <span className="ml-2 text-xl font-bold">{t("site")}</span>
          </Link>
        </div>
        <nav className="flex items-center">
        <Link href="/electronic">
            <span className="mr-4 hover:text-yellow-600 font-semi-bold">
              {t("electronic")}
            </span>
          </Link>
          <Link href="/about">
            <span className="mr-4 hover:text-yellow-600 font-semi-bold">
              {t("about")}
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-yellow-600 font-semi-bold">
              {t("contact")}
            </span>
          </Link>
        </nav>
      </nav>
    </header>
  );
};
