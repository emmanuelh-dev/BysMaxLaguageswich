import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CalculatorsComponent } from "components/CalculatorsComponent";
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
                  "name": "${t("homepage:components")}"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "MXN"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:office")}"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "MXN"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:redes")}"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "MXN"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "${t("homepage:others")}"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "MXN"
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
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <p className="text-2xl text-blue-600 py-4 font-medium ">
                  {t("homepage:components")}
                </p>
                <p className="text-lg dark:text-white text-black">
                  {t("homepage:componentsDescription")}
                </p>
              </div>
            </div>
          </div>
          <div className=" md:grid md:grid-cols-2 gap-8 justify-around md:my-72 md:py-6 items-center justify-items-center">
            <div className="max-w-sm flex flex-col ">
              <p className="text-2xl text-blue-600 py-4 font-medium ">
                {t("homepage:office")}
              </p>
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
                <p className="text-2xl text-blue-600 py-4 font-medium ">
                  {t("homepage:redes")}
                </p>
                <p className="text-lg dark:text-white text-black">
                  {t("homepage:redesDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-8 justify-around md:my-72 md:py-6 items-center justify-items-center">
            <div className="max-w-sm flex flex-col ">
              <p className="text-2xl text-blue-600 py-4 font-medium ">
                {t("homepage:others")}
              </p>
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
        </div>
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
      "homepage",
      "calculators",
      "electronic",
    ])),
  },
});

export default index;
