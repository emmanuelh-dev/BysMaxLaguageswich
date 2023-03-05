import { useTranslation } from "next-i18next";
import type { FC } from "react";
import Link from "next/link";
export const CalculatorsComponent: FC = () => {
  const { t } = useTranslation("homepage");

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Link href="/electronic">
        <span className="mr-4 hover:text-yellow-600 font-semi-bold">
        </span>
      </Link>
    </div>
  );
};
