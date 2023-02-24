import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import calculators from "../public/locales/en/calcs.json";
import { CalculatorsComponent } from "components/CalculatorsComponent";

type Props = {
  // Add custom props here
};

const electronic = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["electronic"]);
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Header title={t("title")} />
      <div className="items-center justify-between container mx-auto max-w-7xl w-full p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("electronic:h1")}</h1>
        <p className="text-lg md:text-xl">{t("electronic:p")}</p>
      </div>

      <div className="flex items-center justify-between container mx-auto max-w-7xl w-full p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {calculators.map((calculator) => (
            <div
              key={calculator.name}
              className="border border-gray-500 border-md rounded-lg bg-white dark:bg-black p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={calculator.link}>
                <span>
                  <h2 className="text-xl font-semibold mb-4 text-yellow-500">
                    {calculator.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-100">
                    {calculator.description}
                  </p>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CalculatorsComponent />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "header",
      "electronic",
      "footer",
      "calculators",
      "electronic",
    ])),
  },
});

export default electronic;
