import { useTranslation } from "next-i18next";
import type { FC } from "react";

export const Footer: FC = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white pt-6 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <p>{t("copy")}</p>
        </div>
      </div>
    </footer>
  );
};
