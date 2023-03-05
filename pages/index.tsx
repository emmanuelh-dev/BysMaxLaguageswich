import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "components/Layout";
import Image from "next/image";
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
        <h1 className="text-blue-700 font-extrabold text-6xl py-6">{t("homepage:title")}</h1>
        <div className="max-sm:flex max-sm:flex-col-reverse md:grid md:grid-cols-2 gap-8 justify-around md:my-72  items-center justify-items-center ">
          <div className="flex justify-center items-center justify-items-center">
            <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
              <Image
                width={400}
                height={600}
                className="object-cover rounded-xl"
                src="/media/material.jpg"
                alt="Instalaciones de redes"
              />
            </div>
          </div>
          <div className="flex justify-center items-center justify-items-center">
            <div className="max-w-sm flex flex-col ">
              <h2 className="text-2xl text-blue-600 py-4 font-bold ">
                {t("homepage:components")}
              </h2>
              <p className="text-lg dark:text-white text-black">
                {t("homepage:componentsDescription")}
              </p>
            </div>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-8 justify-around md:my-72 md:py-6 items-center justify-items-center">
          <div className="max-w-sm flex flex-col ">
            <h2 className="text-2xl text-blue-600 py-4 font-bold ">
              {t("homepage:office")}
            </h2>
            <p className="text-lg dark:text-white text-black">
              {t("homepage:officeDescription")}
            </p>
          </div>

          <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
            <Image
              width={400}
              height={600}
              className="object-cover rounded-xl"
              src="/media/mantenimiento.png"
              alt="Instalaciones de redes"
            />
          </div>
        </div>
        <div className="max-sm:flex max-sm:flex-col-reverse md:grid md:grid-cols-2 gap-8 justify-around md:my-72  items-center justify-items-center ">
          <div className="flex justify-center items-center justify-items-center">
            <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
              <Image
                width={400}
                height={600}
                className="object-cover rounded-xl"
                src="/media/redes.png"
                alt="Instalaciones de redes"
              />
            </div>
          </div>
          <div className="flex justify-center items-center justify-items-center">
            <div className="max-w-sm flex flex-col ">
              <h2 className="text-2xl text-blue-600 py-4 font-bold ">
                {t("homepage:redes")}
              </h2>
              <p className="text-lg dark:text-white text-black">
                {t("homepage:redesDescription")}
              </p>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 justify-around md:my-72 md:py-6 items-center justify-items-center">
          <div className="max-w-sm flex flex-col ">
            <h2 className="text-2xl text-blue-600 py-4 font-bold ">
              {t("homepage:others")}
            </h2>
            <p className="text-lg dark:text-white text-black">
              {t("homepage:othersDescription")}
            </p>
          </div>
          <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
            <Image
              width={400}
              height={600}
              className="object-cover rounded-xl"
              src="/media/pc.png"
              alt="Instalaciones de redes"
            />
          </div>
        </div>
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
      "calculators",
      "electronic",
    ])),
  },
});

export default index;
