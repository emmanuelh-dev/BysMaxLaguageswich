import { useTranslation } from "next-i18next";
import Link from "next/link";
import type { FC } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { Facebook, Instagram, Twitter } from 'react-feather';

export const Footer: FC = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p>{t("copy")}</p>
          <div className="flex gap-4 pt-4">
            <Link href="https://www.facebook.com/bysmax/">
              <Facebook className="dark:text-white" size={32}  aria-label={t("facebook")}/>
            </Link>
            <Link href="https://www.instagram.com/bysmax1/">
              <Instagram className="dark:text-white" size={32} aria-label={t("instagram")}/>
            </Link>
            <Link href="https://twitter.com/emmanuelhdev">
              <Twitter className="dark:text-white" size={32} aria-label={t("twitter")}/>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
        <LanguageSwitch/>
        </div>
      </div>
    </footer>
  );
};
