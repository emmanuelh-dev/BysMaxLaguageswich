import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "components/Layout";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { NextSeo } from "next-seo";
import React from "react";
type Props = {
  // Add custom props here
};

const title =
  "Capacitance Calculator - Calculate Capacitance, Voltage, and Charge";
const calculator =
  "A capacitance calculator is a tool that helps you calculate the capacitance of a capacitor based on its physical dimensions and the material between its plates. Capacitance is a measure of a capacitor's ability to store an electric charge. ";
const calcuator2 =
  "It is determined by the distance between the capacitor's plates, the area of the plates, and the dielectric constant of the material between the plates. By inputting these values into the capacitance calculator, you can determine the capacitance of the capacitor.";

const ohmlawcalculator = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [power, setPower] = useState(0);

  const handleVoltageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoltage(Number(event.target.value));
  };

  const handleCurrentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrent(Number(event.target.value));
  };

  const handleResistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResistance(Number(event.target.value));
  };

  const handlePowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPower(Number(event.target.value));
  };

  const calculateVoltage = () => {
    return current * resistance;
  };

  const calculateCurrent = () => {
    return voltage / resistance;
  };

  const calculateResistance = () => {
    return voltage / current;
  };

  const calculatePower = () => {
    return voltage * current;
  };

  return (
    <Layout
      title="Ohm's Law Calculator - BysMax"
      description="Calculate voltage, current, resistance and power using Ohm's Law."
      keywords={
        "Calculadora de la ley de Ohm,Ohm??metro,Ley de Ohm,C??lculo de resistencia,C??lculo de voltaje,C??lculo de corriente,Circuito el??ctrico,F??rmula de Ohm,Resistividad,Conductividad el??ctrica,Ley de Ohm para principiantes,F??sica el??ctrica,C??lculo de potencia l??ctrica,C??lculo de carga el??ctrica,"
      }
      baseUrl={"/electronic/ohmlawcalculator"}
    >
      <h1 className="text-6xl py-10 text-center font-extrabold text-blue-700">
        Ohm&rsquo;s Law Calculator
      </h1>
      <div className="container mx-auto md:max-w-xl">
        {" "}
        <div >
          <>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Voltage (V)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md dark:text-black"
                value={voltage}
                onChange={handleVoltageChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Current (A)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md dark:text-black"
                value={current}
                onChange={handleCurrentChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium ">Resistance (??)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md dark:text-black"
                value={resistance}
                onChange={handleResistanceChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Power (W)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md dark:text-black "
                value={power}
                onChange={handlePowerChange}
              />
            </div>
            <button
              className={classNames(
                "bg-blue-700 text-white font-medium py-2 px-4 rounded-md container",
                {
                  "opacity-50 cursor-not-allowed":
                    !voltage && !current && !resistance && !power,
                }
              )}
              disabled={!voltage && !current && !resistance && !power}
              onClick={() => {
                if (voltage && current) {
                  setResistance(calculateResistance());
                  setPower(calculatePower());
                } else if (voltage && resistance) {
                  setCurrent(calculateCurrent());
                  setPower(calculatePower());
                } else if (current && resistance) {
                  setVoltage(calculateVoltage());
                  setPower(calculatePower());
                }
              }}
            >
              Calculate
            </button>
          </>
        </div>
        <div className="justify-center flex container col-span-2 ">
          <Image
            width={1280 * 0.5}
            height={720 * 0.5}
            objectFit="cover"
            className="rounded-md shadow-lg dark:bg-neutral-800"
            src={"/media/ohmimage.png"}
            alt="Diagrama del circuito el??ctrico de la ley de Ohm"
          />
        </div>
        <p className="text-xl mb-2">
          Enter any two values{" "}
          <span className="font-bold">
            (voltage, current, resistance or power)
          </span>{" "}
          and click the{" "}
          <span className="font-bold">&rsquo;Calculate&rsquo;</span> button to
          calculate the other two values.
        </p>
        <p className="text-xl">
          <span className="font-bold">Note:</span> Use the correct units (volts
          for voltage, amps for current, ohms for resistance, and watts for
          power).
        </p>
        <p className="text-xl mb-2">
          Ohm&rsquo;s Law states that the current through a conductor between
          two points is directly proportional to the voltage across the two
          points.
        </p>
        <p className="text-xl">
          Mathematically, it is expressed as V = IR, where V is voltage, I is
          current, and R is resistance.
        </p>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", [
      "header",
      "footer",
      "ohmslaw",
    ])),
  },
});

export default ohmlawcalculator;
