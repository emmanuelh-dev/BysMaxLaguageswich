import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "components/Layout";

import { NextPage } from "next";

import classNames from "classnames";


import { useState } from "react";
import {Logo} from "richreults/Logo";
type Props = {
  // Add custom props here
};
const title =
  "Capacitance Calculator - Calculate Capacitance, Voltage, and Charge";
const calculator =
  "A capacitance calculator is a tool that helps you calculate the capacitance of a capacitor based on its physical dimensions and the material between its plates. Capacitance is a measure of a capacitor's ability to store an electric charge. ";
const calcuator2 =

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
      description="Calculate voltage, current, resistance and power using Ohm's Law." keywords={""}    >
      <div className="bg-white dark:bg-black">
        <div className="container max-w-7xl m-auto p-4">
          <h1 className="text-5xl font-semibold mb-4 text-center">
            Ohm&rsquo;s Law Calculator
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols- lg:grid-cols-3 gap-4">
            <div className="">
              <div className="mb-4">
                <label className="block mb-2 font-medium">Voltage (V)</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-400 rounded-md"
                  value={voltage}
                  onChange={handleVoltageChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Current (A)</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-400 rounded-md"
                  value={current}
                  onChange={handleCurrentChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Resistance (Ω)</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-400 rounded-md"
                  value={resistance}
                  onChange={handleResistanceChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Power (W)</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-400 rounded-md"
                  value={power}
                  onChange={handlePowerChange}
                />
              </div>
              <button
                className={classNames(
                  "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md",
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
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="container col-span-2">
                <div className="mb-4">
                  <p className="text-xl mb-2">
                    Enter any two values (voltage, current, resistance or power)
                    and click the &rsquo;Calculate&rsquo; button to calculate
                    the other two values.
                  </p>
                  <p className="text-xl">
                    Note: Use the correct units (volts for voltage, amps for
                    current, ohms for resistance, and watts for power).
                  </p>
                </div>
              </div>
            </div>

            <div></div>
          </div>
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
      "homepage",
      "calculators",
      "electronic",
    ])),
  },
});

export default ohmlawcalculator;
