import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CalculatorsComponent } from "components/CalculatorsComponent";
import { Layout } from "components/Layout";
import Image from "next/image";
import Link from "next/link";

type Props = {
  // Add custom props here
};

 const index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["contact"]);
  return (
      <Layout title={t("contact:title")} description={t("contact:description")} keywords="Contact" baseUrl={"/contact"}>
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-center text-5xl md:text-6xl font-extrabold pt-6 md:pb-6 text-blue-700">
            {t("contact:h1")}
          </h1>
          <div className="pt-6 pb-6">
            <p className="text-lg ">{t("contact:p")}</p>
            <Link href="mailto:contacto@bysmax.com">{t("contact:sorry")}contacto@bysmax.com</Link>
          </div>
          <form>
            <div className="mb-4">
              <label
                className="block dark:text-neutral-200 font-bold mb-2"
                htmlFor="name"
              >
                {t("contact:form.name.label")}
              </label>
              <input
                className="appearance-none border rounded-md w-full py-2 px-3 dark:text-neutral-200 leading-tight focus:outline-none focus:shadow-outline dark:border-neutral-600 dark:bg-neutral-900"
                id="name"
                type="text"
                placeholder={t("contact:form.name.placeholder")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block dark:text-neutral-200 font-bold mb-2"
                htmlFor="email"
              >
                {t("contact:form.email.label")}
              </label>
              <input
                className="appearance-none border rounded-md w-full py-2 px-3 dark:text-neutral-200 leading-tight focus:outline-none focus:shadow-outline dark:border-neutral-600 dark:bg-neutral-900"
                id="email"
                type="email"
                placeholder={t("contact:form.email.placeholder")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block dark:text-neutral-200 font-bold mb-2"
                htmlFor="message"
              >
                {t("contact:form.message.label")}
              </label>
              <textarea
                className="appearance-none border rounded-md w-full py-2 px-3 dark:text-neutral-200 leading-tight focus:outline-none focus:shadow-outline dark:border-neutral-600 dark:bg-neutral-900"
                id="message"
                rows={5}
                placeholder={t("contact:form.message.placeholder")}
              ></textarea>
            </div>
            <button
              className="bg-blue-700 hovedark:r:bg-neutral-100 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline container"
              type="submit"
              disabled
            >
              {t("contact:form.submit")}
            </button>
          </form>
          <div className="container pt-6 pb-6 flex items-center">
            <Image
              width={400}
              height={400}
              objectFit="cover"
              src={"/media/contactus.svg"}
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
      </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", [
      "header",
      "footer",
      "contact",
    ])),
  },
});

export default index;
