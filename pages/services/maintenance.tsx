import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CalculatorsComponent } from "components/CalculatorsComponent";
import { Layout } from "components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
type Props = {
  // Add custom props here
};

const services = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["homepage"]);
  const router = useRouter();
  const pageTitle = `Mantenimiento en ${router.query.city || 'Todo Nuevo Leon'}`; // Obtiene la ciudad de la URL o muestra 'tu ciudad' si no está presente
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${t("title")}",
            "description": "${t("homepage:description")}",
            "url": "https://www.bysmax.com",
            "logo": "https://www.bysmax.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Athos 112, Fovissste La Talaverna",
              "addressLocality": "City",
              "postalCode": "67110",
              "addressCountry": "Guadalupe"
          }
            `,
        }}
      ></script>
      <Layout
        title={pageTitle}
        description={t('homepage:description')}
        keywords="Services"
        baseUrl={"/sercices/maintenance"}
      >
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", [
      "header",
      "footer",
      "homepage",
      "calculators",
      "electronic",
    ])),
  },
});

export default services;
