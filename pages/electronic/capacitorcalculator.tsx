import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "components/Layout";
import { useState } from "react";
import { Logo } from "richreults/Logo";

type Props = {
  // Add custom props here
};
const title =
  "Capacitance Calculator - Calculate Capacitance, Voltage, and Charge";
const calculator =
  "A capacitance calculator is a tool that helps you calculate the capacitance of a capacitor based on its physical dimensions and the material between its plates. Capacitance is a measure of a capacitor's ability to store an electric charge. ";
const calcuator2 =
  "It is determined by the distance between the capacitor's plates, the area of the plates, and the dielectric constant of the material between the plates. By inputting these values into the capacitance calculator, you can determine the capacitance of the capacitor.";

const services = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [capacitance, setCapacitance] = useState(0);
  const [voltage, setVoltage] = useState(0);
  const [charge, setCharge] = useState(0);

  const handleCapacitanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCapacitance(Number(event.target.value));
  };

  const handleVoltageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoltage(Number(event.target.value));
  };

  const handleChargeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharge(Number(event.target.value));
  };

  const calculateCapacitance = () => {
    return charge / voltage;
  };

  const calculateVoltage = () => {
    return charge / capacitance;
  };

  const calculateCharge = () => {
    return capacitance * voltage;
  };
  const { t } = useTranslation(["homepage"]);
  return (
    <Layout
      title={title}
      description={calculator}
      keywords="capacitor calculator"
      baseUrl={"/electronic/capacitorcalculator"}
    >
      <Logo
        title={title}
        description={calculator}
        baseUrl={"/electronic/capacitorcalculator"}
        category={"Calculator"}
        image={"https://www.bysmax.com/media/capacitance.png"}
      />
      <div className="container mx-auto md:max-w-xl">
        <h1 className="text-5xl p-4 font-extrabold text-center m-6 text-blue-700">
          {title}
        </h1>
        <div >

            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Capacitance (Farads)
            </label>
            <input
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-400 focus:outline-none focus:bg-white focus:border-blue-400"
              type="number"
              value={capacitance}
              onChange={handleCapacitanceChange}
            />

            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Voltage (Volts)
            </label>
            <input
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-400 focus:outline-none focus:bg-white focus:border-blue-400"
              type="number"
              value={voltage}
              onChange={handleVoltageChange}
            />

            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Charge (Coulombs)
            </label>
            <input
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:focus:border-blue-400 focus:outline-none focus:bg-white focus:border-blue-400"
              type="number"
              value={charge}
              onChange={handleChargeChange}
            />

            <button
              className="w-full py-2 font-medium text-white bg-blue-700 rounded-md hover:bg-blue-600"
              onClick={() => {
                if (capacitance && voltage) {
                  setCharge(calculateCharge());
                } else if (capacitance && charge) {
                  setVoltage(calculateVoltage());
                } else if (voltage && charge) {
                  setCapacitance(calculateCapacitance());
                }
              }}
            >
              Calculate
            </button>

          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="container col-span-2">
              <p className=" text-lg pt-4">{calculator}</p>
              <p className=" text-lg pt-4">{calcuator2}</p>
              <p>
                Para calcular la capacitancia de un circuito eléctrico, se puede
                usar la siguiente fórmula: C = q / v12, donde C es la
                capacitancia en faradios (F), q es la carga en coulombs © y v es
                el voltaje en voltios (V). Si se conoce la frecuencia y la
                inductancia del circuito, se puede usar otra fórmula: C =
                1/2πfL3, donde f es la frecuencia en hertz (Hz) y L es la
                inductancia en henrios (H). Para medir la capacitancia de un
                condensador, se puede usar un multímetro que tenga esa función4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
