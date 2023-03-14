import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout } from "components/Layout";
import { useState } from "react";
import { reducirVoltage, elevarVoltage, copyToClipboard } from "./helpers";
import { Copy } from "react-feather";
import { Logo } from "richreults/Logo";
import Image from "next/image";
type Props = {
  // Add custom props here
};

const electronic = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { t } = useTranslation(["electronic"]);
  const [voltageIn, setVoltageIn] = useState(0);
  const [voltageOut, setVoltageOut] = useState(0);

  const handleChangeOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltageOut(Number(e.target.value));
  };
  const handleChangeIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltageIn(Number(e.target.value));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Cómo configurar un transformador en Proteus",
        "description": "Guía para configurar un transformador en Proteus",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Abre Proteus y crea un nuevo esquemático.",
            "text": "Abre el programa Proteus y crea un nuevo esquemático para empezar a trabajar."
          },
          {
            "@type": "HowToStep",
            "name": "Selecciona el componente 'transformador' de la biblioteca de Proteus y agrégalo al esquemático.",
            "text": "Busca el componente 'transformador' en la biblioteca de Proteus y agrégalo al esquemático."
          },
          {
            "@type": "HowToStep",
            "name": "Configura el voltaje de entrada y salida en la calculadora y copia los valores de impedancia del bobinado primario y secundario que te devuelve la calculadora.",
            "text": "Abre la calculadora de voltajes e ingresa los valores de voltaje de entrada y salida para obtener los valores de impedancia del bobinado primario y secundario. Copia estos valores para configurar el transformador en Proteus."
          },
          {
            "@type": "HowToStep",
            "name": "En el esquemático de Proteus, haz doble clic en el transformador y en la ventana de propiedades, pega los valores de impedancia del bobinado primario y secundario en los campos correspondientes.",
            "text": "Haz doble clic en el componente 'transformador' para abrir la ventana de propiedades. Pega los valores de impedancia del bobinado primario y secundario en los campos correspondientes."
          },
          {
            "@type": "HowToStep",
            "name": "Haz clic en 'Aceptar' para cerrar la ventana de propiedades y conectar los terminales del transformador a tu circuito.",
            "text": "Una vez que hayas pegado los valores de impedancia del bobinado primario y secundario, haz clic en 'Aceptar' para cerrar la ventana de propiedades y conectar los terminales del transformador a tu circuito."
          }
        ]
      }
      `,
        }}
      ></script>
      <Logo
        title={"Cómo configurar un transformador en Proteus"}
        description={"Calculadora para configurar el transformador en proteus"}
        baseUrl={"/electronic/transformator"}
        category={"Calculator"}
        image={""}
      />
      <Layout
        title={t("electronic:title")}
        description={t("electronic:description")}
        keywords={t("electronic:keywords")}
        baseUrl={"/electronic"}
      >
        <div className="container mx-auto md:max-w-xl">
          <h1 className="text-center font-bold text-blue-600 text-5xl py-10 leading-normal	">
            ¿Cómo configurar un transformador en Proteus?
          </h1>
        </div>
        <div className="container mx-auto md:max-w-xl">
          <div className="mb-3">
            <label htmlFor="voltageout">Voltaje de Salida</label>

            <input
              id="voltageout"
              type={"number"}
              className="w-full h6 dark:bg-neutral-900  bg-gray-200 py-2 dark:text-white rounded-md pl-2 mb-2"
              onChange={handleChangeOut}
              value={voltageOut}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="voltagein">Voltaje de Entrada</label>
            <input
              id="voltagein"
              type={"number"}
              className="w-full h6 dark:bg-neutral-900  bg-gray-200 py-2 dark:text-white rounded-md pl-2 mb-4"
              onChange={handleChangeIn}
              value={voltageIn}
            />
            <input
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 w-full p-3 text-white font-bold rounded-md cursor-pointer"
              value={"Calcular"}
            />
          </div>

          <div className="container mx-auto md:max-w-xl py-10">
            <div>
              {" "}
              <p className="py-3 font-bold text-3xl">
                La calculadora te devolverá los siguientes resultados:
                <br />
                <span className="font-normal text-lg">
                  Solo tienes que copiarlo
                </span>
              </p>
              <h3>
                <span className="font-bold">
                  Impedancia del bobinado primario: <br />
                </span>
                {reducirVoltage(voltageIn, voltageOut)}
                <button
                  className="px-2"
                  onClick={() =>
                    copyToClipboard(reducirVoltage(voltageIn, voltageOut))
                  }
                >
                  <Copy
                    className="dark:text-white hover:text-blue-700"
                    size={24}
                    aria-label={t("twitter")}
                  />
                </button>
              </h3>
              <h3>
                <span className="font-bold">
                  Impedancia del bobinado secundario: <br />
                </span>
                {elevarVoltage(voltageIn, voltageOut)}
                <button
                  className="px-2"
                  onClick={() =>
                    copyToClipboard(elevarVoltage(voltageIn, voltageOut))
                  }
                >
                  <Copy
                    className="dark:text-white hover:text-blue-700"
                    size={24}
                    aria-label={t("twitter")}
                  />
                </button>
              </h3>
            </div>
            <h2 className="text-3xl font-bold mb-5">
              Cómo utilizar la calculadora en Proteus
            </h2>
            <ul className="list-decimal list-inside">
              <li className="pb-2">
                Abre Proteus y crea un nuevo esquemático.
              </li>
              <li className="pb-2">
                Selecciona el componente "transformador" de la biblioteca de
                Proteus y agrégalo al esquemático.
              </li>
              <li className="pb-2">
                Configura el voltaje de entrada y salida en la calculadora y
                copia los valores de impedancia del bobinado primario y
                secundario que te devuelve la calculadora.
                <Image
                  width={600}
                  height={600}
                  objectFit="cover"
                  src={"/media/transformer/entrada.png"}
                  alt="Transformador proteus"
                />
              </li>

              <li className="pb-2">
                En el esquemático de Proteus, haz doble clic en el transformador
                y en la ventana de propiedades, pega los valores de impedancia
                del bobinado primario y secundario en los campos
                correspondientes.
                <Image
                  width={600}
                  height={600}
                  objectFit="cover"
                  src={"/media/transformer/confprimary.png"}
                  alt="Transformador proteus"
                />
                                <Image
                  width={600}
                  height={600}
                  objectFit="cover"
                  src={"/media/transformer/confprimarybysmax.png"}
                  alt="Transformador proteus"
                />
              </li>
              <li className="pb-2">
                Haz clic en "Aceptar" para cerrar la ventana de propiedades y
                conectar los terminales del transformador a tu circuito.
                <Image
                  width={600}
                  height={600}
                  objectFit="cover"
                  src={"/media/transformer/result.png"}
                  alt="Transformador proteus"
                />
              </li>
            </ul>
            <p className="text-xl">
              Ahora, el transformador está configurado correctamente en tu
              circuito de Proteus y listo para funcionar.
            </p>
          </div>
          <h2>
            Esta calculadora te permite obtener los valores necesarios para
            configurar el bobinado primario y secundario de un transformador en
            base al voltaje de entrada y salida que deseas obtener.
          </h2>
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
      "electronic",
    ])),
  },
});

export default electronic;
