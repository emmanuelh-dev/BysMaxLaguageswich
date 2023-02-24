import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CalculatorsComponent } from "components/CalculatorsComponent";
import { Layout } from "components/Layout";

type Props = {
  // Add custom props here
};

const index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["contact"]);
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white ">
      <Layout title={t("contact:title")} description={t("contact:description")}>
      <div className="container mx-auto max-w-2xl p-6 h-screen">
        <h1 className="text-3xl font-bold mb-6">{t("contact:h1")}</h1>
        <p className="text-lg mb-6">
        {t("contact:p")}
        </p>
        <form>
          <div className="mb-4">
            <label className="block dark:text-gray-200 font-bold mb-2" htmlFor="name">
            {t("contact:form.name.label")}
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder={t("contact:form.name.placeholder")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block dark:text-gray-200 font-bold mb-2"
              htmlFor="email"
            >
              {t("contact:form.email.label")}
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={t("contact:form.email.placeholder")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block dark:text-gray-200 font-bold mb-2"
              htmlFor="message"
            >
              {t("contact:form.message.label")}
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={5}
              placeholder={t("contact:form.message.placeholder")}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hovedark:r:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled
          >
            {t("contact:form.submit")}
          </button>
        </form>
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
      "footer",
      "contact",
    ])),
  },
});

export default index;
