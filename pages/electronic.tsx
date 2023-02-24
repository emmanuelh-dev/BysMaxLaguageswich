import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Calcs from "./electronic/Calcs";



type Props = {
  // Add custom props here
};

const electronic = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["common", "second-page"]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <div className="flex items-center justify-between container mx-auto max-w-7xl w-full p-6">
        
      </div>
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
    ])),
  },
});

export default electronic;
