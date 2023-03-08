import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
interface LayoutProps {
  title: string;
  description: string;
  link: string;
  image:string;
}

const Gridimgleft: FC<LayoutProps> = ({ title, description, link, image }) => {
  return (
      <div className="max-sm:flex max-sm:flex-col-reverse md:grid md:grid-cols-2 gap-8 justify-around md:my-72  items-center justify-items-center ">
        <div className="flex justify-center items-center justify-items-center">
          <div className="h-64 relative hover:scale-105 max-w-sm mx-auto md:ml-4 max-sm:pt-5">
            <Image
              width={400}
              height={600}
              className="object-cover rounded-xl"
              src={image}
              alt="Instalaciones de redes"
            />
          </div>
        </div>
        <div className="flex justify-center items-center justify-items-center">
          <div className="max-w-sm flex flex-col ">
            <Link href={link}>
            <h2 className="text-2xl text-blue-600 py-4 font-bold ">
              {title}
            </h2>
            </Link>
            <p className="text-lg dark:text-white text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
  );
};

export default Gridimgleft;
