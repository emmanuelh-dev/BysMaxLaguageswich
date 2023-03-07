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
  const pageTitle = `Mantenimiento en ${
    router.query.city || "Todo Nuevo Leon"
  }: Equipos y servicios para empresas.`; // Obtiene la ciudad de la URL o muestra 'tu ciudad' si no está presente
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
        description="Mantenimiento regular de equipos y servicios para empresas en {estado}. Prevenimos fallas y costosas reparaciones, mejoramos la eficiencia y productividad de tu empresa"
        keywords="Services"
        baseUrl={"/sercices/maintenance"}
      >
        <h1 className="font-bold text-5xl text-blue-700">{pageTitle}</h1>
        <p className="text-lg py-2">
          Importancia del mantenimiento de equipos y servicios: "El
          mantenimiento regular de equipos y servicios es esencial para
          mantenerlos en buen estado y prolongar su vida útil. En nuestra
          empresa, sabemos lo importante que es para ti mantener tu negocio
          funcionando sin interrupciones y por eso ofrecemos servicios de
          mantenimiento de alta calidad para garantizar que tus equipos y
          servicios estén en óptimas condiciones".
        </p>
        <p className="text-lg py-2">
          Importancia del mantenimiento de equipos y servicios: "El
          mantenimiento regular de equipos y servicios es esencial para
          mantenerlos en buen estado y prolongar su vida útil. En nuestra
          empresa, sabemos lo importante que es para ti mantener tu negocio
          funcionando sin interrupciones y por eso ofrecemos servicios de
          mantenimiento de alta calidad para garantizar que tus equipos y
          servicios estén en óptimas condiciones".
        </p>
        <h2 className="font-bold text-3xl text-blue-700 py-2">
          Mantenimiento preventivo y correctivo de equipos de cómputo, redes y
          servidores.
        </h2>
        <h2 className="font-bold text-3xl text-blue-700 py-2">
          Mantenimiento de aire acondicionado y sistemas eléctricos.
        </h2>
        <main className="py-10 md:py-52">
          <h2 className="font-bold text-6xl text-blue-700 py-12 text-center">
            Ventajas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">Precios competitivos.</div>
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              Experiencia y profesionalismo en el área de mantenimiento.
            </div>
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              Atención personalizada a las necesidades de cada cliente.
            </div>
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              Servicio de calidad y garantía de satisfacción.
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["header", "footer"])),
  },
});

export default services;
