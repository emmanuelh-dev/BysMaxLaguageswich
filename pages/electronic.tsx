import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CalculatorsComponent } from "components/CalculatorsComponent";
import { Layout } from "components/Layout";
import Image from "next/image";
import { Logo } from "richreults/Logo";
function getTranslations(lang: string) {
  switch (lang) {
    case "fr":
      return require("/public/locales/fr/calcs.json");
    case "es":
      return require("/public/locales/es/calcs.json");
    case "de":
      return require("/public/locales/de/calcs.json");
    // Agrega más casos según los idiomas que necesites soportar
    default:
      return require("/public/locales/en/calcs.json");
  }
}

type Props = {
  // Add custom props here
};

const electronic = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["electronic"]);
  const calculators = getTranslations(t("electronic:lang"));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          [  {    "@context": "https://schema.org",    "@type": "BreadcrumbList",    "itemListElement": [      {        "@type": "ListItem",        "position": 1,        "name": "Electronic",        "item": "/electronic"      },      {        "@type": "ListItem",        "position": 2,        "name": "Calculadora de Ley de Ohm",        "item": "/electronic/ohmlawcalculator"      }    ]
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Calculadoras de electrónica",
                "description": "Con estas calculadoras podrás calcular voltaje, corriente, resistencia y potencia utilizando la Ley de Ohm, la capacitancia, el voltaje o la carga almacenada en un capacitor, y el valor de la resistencia de una resistencia a partir de su código de colores.",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "${t("title")}",
                    "description": "Calcula voltaje, corriente, resistencia y potencia utilizando la Ley de Ohm.",
                    "url": "/electronic/ohmlawcalculator",
                    "image": "/ohm.png"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Calculadora de Capacitores",
                    "description": "Calcula la capacitancia, el voltaje o la carga almacenada en un capacitor.",
                    "url": "/electronic/capacitorcalculator",
                    "image": "/ohm.png"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Código de Colores de Resistencias",
                    "description": "Encuentra el valor de la resistencia de una resistencia a partir de su código de colores.",
                    "url": "/electronic/resistorcolorcode",
                    "image": "/ohm.png"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Resistencias en Paralelo",
                    "description": "Encuentra la resistencia.",
                    "url": "/electronic/resistorcolorcode",
                    "image": "/ohm.png"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Resistencias en Serie",
                    "description": "Encuentra la resistencia.",
                    "url": "/electronic/resistorcolorcode",
                    "image": "/ohm.png"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Calculadora de Capacitores",
                    "description": "Calcula la capacitancia, el voltaje o la carga almacenada en un capacitor.",
                    "url": "/electronic/capacitorcalculator",
                    "image": "/ohm.png"
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Calculadora de Capacitores",
                    "description": "Calcula la capacitancia, el voltaje o la carga almacenada en un capacitor.",
                    "url": "/electronic/capacitorcalculator",
                    "image": "/ohm.png"
                  }
                ]
              }
            ]

            `,
        }}
      ></script>
      <Layout
        title={t("electronic:title")}
        description={t("electronic:description")}
        keywords={t("electronic:keywords")}
        baseUrl={"/electronic"}
      >
        <div className="items-center justify-between container mx-auto max-w-7xl w-full p-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700">
            {t("electronic:h1")}
          </h1>
          <p className="text-lg md:text-xl">{t("electronic:p")}</p>
        </div>

        <div className="flex items-center justify-between container mx-auto max-w-7xl w-full p-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {calculators.map(
              (calculator: {
                name: string;
                link: string;
                description: string;
                image: string;
              }) => (
                <div
                  key={calculator.name}
                  className=" border-xl rounded-lg dark:bg-neutral-900 p-4 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto"
                >
                  <Link href={calculator.link}>
                    <span>
                      <Image
                        width={300}
                        height={300}
                        src={calculator.image}
                        alt=""
                      />
                      <h2 className="text-xl text-center font-semibold mb-4 text-blue-600">
                        {calculator.name}
                      </h2>
                      <p className="dark:text-neutral-100 text-center">
                        {calculator.description}
                      </p>
                      <Logo
                        title={calculator.name}
                        description={calculator.description}
                        baseUrl={calculator.link}
                        category={"Calculator"}
                        image={calculator.image}
                      />
                    </span>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
        <CalculatorsComponent />
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
      "electronic",
    ])),
  },
});

export default electronic;
