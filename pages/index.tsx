import Link from "next/link";
import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "es" : "en";

  return (
<div className="flex flex-col h-screen">
  <Header />
  <main className="flex-grow bg-gray-100 flex items-center justify-center">
    <div className="max-w-md mx-auto p-4">
      {/* alternative language change without using Link component*/}
      <button onClick={() => onToggleLanguageClick(changeTo)} className="bg-blue-500 text-white px-4 py-2 rounded">
        {t("change-locale", { changeTo })}
      </button>
      <Link href="/about">
        <button type="button" className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          {t("to-second-page")}
        </button>
      </Link>
    </div>
  </main>
  <Footer />
</div>

  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
      "footer",
      "header",
    ])),
  },
});

export default Homepage;
