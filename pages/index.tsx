import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "components/Layout";
import Gridimgleft from "components/Gridimgleft";
import Gridimgright from "components/Gridimgright";

type Props = {
  // Add custom props here
};

const index = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["homepage"]);
  return (
    <>
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
            },
            "telephone": "+518126060795",
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
            "servesCuisine": "Electronics",
            "serviceArea": "Local",
            "hasMap": "https://goo.gl/maps/MdTSSHgHrgQ3j9dy6",
            "sameAs": [
              "https://www.facebook.com/bysmax",
              "https://www.instagram.com/bysmax1",
              "https://www.tiktok.com/@bysmax"
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:components")}",
                  "description": "${t("homepage:componentsDescription")}",
                  "image": "https://www.bysmax.com/img/components.jpg",
                  "brand": {
                    "@type": "Brand",
                    "name": "BysMax"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "MXN",
                    "price": "10"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:office")}",
                  "description": "${t("homepage:officeDescription")}",
                  "image": "https://www.bysmax.com/img/mantenimiento.png",
                  "brand": {
                    "@type": "Brand",
                    "name": "BysMax"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "MXN",
                    "price": "250"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:redes")}",
                  "description": "${t("homepage:redesDescription")}",
                  "image": "https://www.bysmax.com/img/pc.png",
                  "brand": {
                    "@type": "Brand",
                    "name": "BysMax"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "MXN",
                    "price": "2000"
                  }
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:others")}",
                  "description": "${t("homepage:othersDescription")}",
                  "image": "https://www.bysmax.com/img/othes.png",
                  "brand": {
                    "@type": "Brand",
                    "name": "BysMax"
                  },
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "MXN",
                    "price": "6000"
                  }
                }
              }
            ]
          }
            `,
        }}
      ></script>
      <Layout
        title={t("homepage:title")}
        description={t("homepage:description")}
        keywords="homepage"
        baseUrl={""}
      >
        <h1 className="text-blue-700 font-extrabold text-5xl pt-6">{t("homepage:title")}</h1>
        <Gridimgleft title={t("homepage:components")} description={t("homepage:componentsDescription")} link="/services" image="/media/material.jpg"/>
        <Gridimgright title={t("homepage:office")} description={t("homepage:officeDescription")} link="/services" image="/media/mantenimiento.png"/>
        <Gridimgleft title={t("homepage:redes")} description={t("homepage:redesDescription")} link="/services" image="/media/redes.png"/>
        <Gridimgright title={t("homepage:others")} description={t("homepage:othersDescription")} link="/services" image="/media/pc.png"/>
      </Layout>
    </>
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
    ])),
  },
});

export default index;
