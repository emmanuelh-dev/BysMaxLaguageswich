import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { CalculatorsComponent } from "components/CalculatorsComponent";
import { Layout } from "components/Layout";

function getTranslations(lang: string) {
  switch(lang) {
    case "fr":
      return require("/public/locales/fr/calcs.json");
    case "es":
      return require("/public/locales/es/calcs.json");
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
  console.log(t("electronic:lang"))
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
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
      <Layout title={t("electronic:title")} description={t("electronic:description")}>
      <div className="items-center justify-between container mx-auto max-w-7xl w-full p-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700">{t("electronic:h1")}</h1>
        <p className="text-lg md:text-xl">{t("electronic:p")}</p>
      </div>

      <div className="flex items-center justify-between container mx-auto max-w-7xl w-full p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {calculators.map((calculator:{ name: string, link:string, description:string }) => (
            <div
              key={calculator.name}
              className=" border-xl rounded-lg bg-white p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={calculator.link}>
                <span>
                  <h2 className="text-xl font-semibold mb-4 text-blue-600">
                    {calculator.name}
                  </h2>
                  <p className="text-neutral-800 ">
                    {calculator.description}
                  </p>
                </span>
              </Link>
            </div>
          ))}
        </div>
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
      "electronic",
      "footer",
      "calculators",
      "electronic",
    ])),
  },
});

export default electronic;
