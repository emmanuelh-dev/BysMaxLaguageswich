import { Layout } from 'components/Layout';
import Head from 'next/head';

export default function CommentsPolicy() {
  return (
  <Layout title={'Política de comentarios'} description={'En nuestro sitio web, valoramos la participación y retroalimentación de nuestros usuarios y visitantes a través de los comentarios en nuestras publicaciones. Sin embargo, también queremos asegurarnos de mantener un ambiente respetuoso y constructivo para todos los usuarios, por lo que hemos establecido algunas reglas básicas que deberán ser respetadas por todos los comentarios publicados en nuestro sitio.'} keywords={''} baseUrl={''}>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-extrabold dark:text-neutral-50 text-gray-900 tracking-tight mb-8">
      Política de comentarios
    </h1>

    <div className="space-y-4">
      <p>
        En nuestro sitio web, valoramos la participación y retroalimentación de nuestros usuarios y visitantes a través de los comentarios en nuestras publicaciones. Sin embargo, también queremos asegurarnos de mantener un ambiente respetuoso y constructivo para todos los usuarios, por lo que hemos establecido algunas reglas básicas que deberán ser respetadas por todos los comentarios publicados en nuestro sitio.
      </p>

      <h2 className="text-2xl font-bold dark:text-neutral-50 text-gray-900 tracking-tight mt-8 mb-4">
        Reglas básicas de los comentarios
      </h2>

      <ul className="list-disc list-inside">
        <li>Los comentarios deben estar relacionados con el contenido de la publicación.</li>
        <li>Los comentarios no deben incluir contenido ofensivo, difamatorio, amenazante o ilegal.</li>
        <li>Los comentarios no deben incluir spam o publicidad no solicitada.</li>
        <li>Los comentarios no deben incluir información personal, como direcciones de correo electrónico, números de teléfono o direcciones físicas.</li>
      </ul>

      <p>
        Nos reservamos el derecho de moderar y eliminar cualquier comentario que viole estas reglas o cualquier otra que consideremos inapropiada o fuera de tema.
      </p>

      <h2 className="text-2xl font-bold dark:text-neutral-50 text-gray-900 tracking-tight mt-8 mb-4">
        Responsabilidad de los usuarios
      </h2>

      <p>
        Los usuarios son responsables de sus comentarios y de cualquier información que compartan en ellos. Nosotros no asumimos responsabilidad por el contenido de los comentarios publicados por los usuarios, ni por cualquier daño o consecuencia derivada de ellos.
      </p>

      <p>
        Al publicar un comentario en nuestro sitio, los usuarios aceptan nuestras reglas de comentarios y nos otorgan el derecho de moderar, editar y eliminar cualquier comentario o información compartida que consideremos inapropiada o fuera de tema.
      </p>

      <h2 className="text-2xl font-bold dark:text-neutral-50 text-gray-900 tracking-tight mt-8 mb-4">
        Contacto
      </h2>

      <p>
        Si tienes alguna pregunta o inquietud acerca de nuestra política de comentarios, no dudes en ponerte en contacto con nosotros a través de nuestro formulario de contacto.
      </p>
    </div>
  </div></Layout>
  
  );
}
