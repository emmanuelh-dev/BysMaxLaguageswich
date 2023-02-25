import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import calculators from "../public/locales/en/calcs.json";
import { CalculatorsComponent } from "components/CalculatorsComponent";
import { Layout } from "components/Layout";

type Props = {
  // Add custom props here
};

const electronic = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["electronic"]);
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Layout title={t("electronic:title")} description={t("electronic:description")}>
      <div className="items-center justify-between container mx-auto max-w-7xl w-full p-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700">{t("electronic:h1")}</h1>
        <p className="text-lg md:text-xl">{t("electronic:p")}</p>
      </div>

      <div className="flex items-center justify-between container mx-auto max-w-7xl w-full p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {calculators.map((calculator) => (
            <div
              key={calculator.name}
              className=" border-xl rounded-lg bg-white p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={calculator.link}>
                <span>
                  <h2 className="text-xl font-semibold mb-4 text-blue-600">
                    {calculator.name}
                  </h2>
                  <p className="text-neutral-800 ">
                    {calculator.description}
                  </p>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CalculatorsComponent />
      </Layout>
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
