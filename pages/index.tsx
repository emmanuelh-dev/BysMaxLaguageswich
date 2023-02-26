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
      <Layout
        title={t("homepage:title")}
        description={t("homepage:description")}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="max-sm:flex max-sm:flex-col-reverse">
              <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
                <Image
                  width={256 * 1.3}
                  height={171 * 1.3}
                  className="object-cover rounded-xl"
                  src="/media/material.jpg"
                  alt="Venta de materiales electrónicos"
                />
              </div>
              <div className="max-w-sm flex flex-col justify-center">
                <p className="text-2xl text-blue-600 py-4 font-medium ">
                  Venta de materiales electrónicos
                </p>
                <p className="text-lg dark:text-white text-black">
                  En nuestra tienda encontrarás una gran variedad de materiales
                  electrónicos, como arduinos, transistores, pics, entre otros.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-sm flex flex-col justify-center">
                <p className="text-2xl text-blue-600 py-4 font-medium ">
                  Mantenimiento de equipos de oficina
                </p>
                <p className="text-lg dark:text-white text-black">
                  Ofrecemos servicios de mantenimiento para equipos de oficina,
                  como impresoras y computadoras. Además, también vendemos
                  materiales para estos equipos.
                </p>
              </div>

              <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
                <Image
                  width={256 * 1.3}
                  height={171 * 1.3}
                  className="object-cover rounded-xl"
                  src="/media/mantenimiento.png"
                  alt="Instalaciones de redes"
                />
              </div>
            </div>
            <div className="max-sm:flex max-sm:flex-col-reverse">
              <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
                <Image
                  width={256 * 1.3}
                  height={171 * 1.3}
                  className="object-cover rounded-xl"
                  src="/media/redes.png"
                  alt="Instalaciones de redes"
                />
              </div>
              <div className="max-w-sm flex flex-col justify-center">
                <p className="text-2xl text-blue-600 py-4 font-medium ">
                  Instalaciones de redes
                </p>
                <p className="text-lg dark:text-white text-black">
                  Ofrecemos servicios de instalación y configuración de redes,
                  para que tengas una conexión rápida y estable en tu hogar o
                  negocio.
                </p>
              </div>
            </div>
      <div>
      <div className="max-w-sm flex flex-col justify-center">
              <p className="text-2xl text-blue-600 py-4 font-medium ">
                Otros servicios
              </p>
              <p className="text-lg dark:text-white text-black">
                Además de los servicios mencionados, también te ofrecemos
                hardware a la medida para tu empresa, casa o negocio, cuentas
                tus necesidades y te diremos que equipo es el mejor para ti.
              </p>
            </div>
            <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
              <Image
                width={256 * 1.3}
                height={171 * 1.3}
                className="object-cover rounded-xl"
                src="/media/pc.png"
                alt="Instalaciones de redes"
              />
            </div>
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
