import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
    router.query.city || "todo Nuevo Leon"
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
              }
            ]
          }
            `,
        }}
      ></script>
      <Layout
        title={pageTitle}
        description="Mantenimiento regular de equipos y servicios para empresas en {estado}. Prevenimos fallas y costosas reparaciones, mejoramos la eficiencia y productividad de tu empresa"
        keywords="Mantenimiento de computadoras,
        Reparación de equipos informáticos,
        Servicio técnico de computadoras,
        Soporte informático en Guadalupe,
        Instalación de software y hardware en computadoras,
        Mantenimiento preventivo y correctivo de PCs,
        Actualización de sistemas operativos y programas,
        Solución de problemas de rendimiento de la computadora,
        Limpieza de virus y malware,
        Servicio de mantenimiento y reparación de laptops,
        Redes informáticas en Nuevo León,
        Instalación de redes en Guadalupe,
        Configuración de redes para hogares y negocios,
        Solución de problemas de conectividad de redes,
        Servicio de mantenimiento y reparación de redes informáticas"
        baseUrl={"/sercices/maintenance"}
      >
        <h1 className="font-bold text-5xl text-blue-700 py-10">{pageTitle}</h1>
        <p className="text-lg py-2">
          <span className="font-bold">Importancia del mantenimiento de equipos y servicios:</span> "El
          mantenimiento regular de equipos y servicios es esencial para
          mantenerlos en buen estado y prolongar su vida útil. En nuestra
          empresa, sabemos lo importante que es para ti mantener tu negocio
          funcionando sin interrupciones y por eso ofrecemos servicios de
          mantenimiento de alta calidad para garantizar que tus equipos y
          servicios estén en óptimas condiciones".
        </p>
        <div className="max-sm:flex max-sm:flex-col-reverse md:grid md:grid-cols-2 gap-8 justify-around md:my-72  items-center justify-items-center ">
          <div className="flex justify-center items-center justify-items-center">
            <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
              <Image
                width={400}
                height={600}
                className="object-cover rounded-xl"
                src="/media/pc.jpg"
                alt="Instalaciones de redes"
              />
            </div>
          </div>
          <div className="flex justify-center items-center justify-items-center">
            <div className="max-w-sm flex flex-col ">
              <h2 className="text-2xl text-blue-600 py-4 font-bold container">
              Mantenimiento preventivo y correctivo de equipos de cómputo, redes y
          servidores.
              </h2>
            </div>
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-8 justify-around md:my-72 md:py-6 items-center justify-items-center">
          <div className="max-w-sm flex flex-col ">
            <h2 className="text-2xl text-blue-600 py-4 font-bold container">
            Mantenimiento de aire acondicionado y sistemas eléctricos.
            </h2>
          </div>

          <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
            <Image
              width={400}
              height={600}
              className="object-cover rounded-xl"
              src="/media/servidores.jpg"
              alt="Instalaciones de redes"
            />
          </div>
        </div>
        <main className="py-10 md:py-52">
          <h2 className="font-bold text-6xl text-blue-700 py-10 md:py-32 text-center">
            Ventajas
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              <Image
                width={400}
                height={400}
                className="rounded-md"
                src={"/media/search.svg"}
                alt="Ajedrez"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">Precios competitivos</h3>
              </div>
            </div>
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              <Image
                width={400}
                height={400}
                className="rounded-md"
                src={"/media/build.svg"}
                alt="Ajedrez"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">
                  Experiencia y profesionalismo.
                </h3>
              </div>
            </div>
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              <Image
                width={400}
                height={400}
                className="rounded-md"
                src={"/media/startup.svg"}
                alt="Ajedrez"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold">
                  Atención personalizada a las necesidades de cada cliente.
                </h3>
              </div>
            </div>
            <div className="text-center border-xl rounded-lg dark:bg-neutral-900 p-6 shadow-lg  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-lg overflow-auto">
              <Image
                width={400}
                height={400}
                className="rounded-md"
                src={"/media/idea.svg"}
                alt="Ajedrez"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold container">
                  Servicio de calidad y garantía de satisfacción.
                </h3>
              </div>
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
