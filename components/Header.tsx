import { useTranslation } from "next-i18next";
import type { FC } from "react";
import Head from "next/head";
import Link from "next/link";


export const Header: FC = ({  }) => {
  const { t } = useTranslation("header");

  return (
    
    <header>
      <nav className="flex items-center justify-between container mx-auto max-w-7xl w-full pt-6 pb-6">
        <div className="flex items-center">
          <Link href="/">
          <span className="ml-2 text-2xl font-extrabold text-blue-600">{t("site")}</span>
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
