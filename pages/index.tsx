import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CalculatorsComponent } from "components/CalculatorsComponent";

type Props = {
  // Add custom props here
};

const index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["homepage"]);
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Header title={t("title")} />
      <div className="items-center justify-between container mx-auto max-w-7xl w-full pt-6 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("homepage:h1")}</h1>
        <p className="text-lg md:text-xl">{t("homepage:p")}</p>
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
      "footer",
      "homepage",
      "calculators",
      "electronic",
    ])),
  },
});

export default index;
