import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type Props = {
  // Add custom props here
};

const about = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["common", "second-page"]);

  return (
    <>
      <Header />
      <main>
        <Link href="/">
          <button type="button">{t("second-page:back-to-home")}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "header",
      "about",
      "footer",
    ])),
  },
});

export default about;
