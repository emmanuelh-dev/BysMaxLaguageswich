import { NextPage } from "next";
import Layout from "../components/Layout";
import { useState } from "react";
import classNames from "classnames";
import Main from "@/pages/electronic/Calcs";

const title =
  "Capacitance Calculator - Calculate Capacitance, Voltage, and Charge";
const calculator =
  "A capacitance calculator is a tool that helps you calculate the capacitance of a capacitor based on its physical dimensions and the material between its plates. Capacitance is a measure of a capacitor's ability to store an electric charge. ";
const calcuator2 =
  "It is determined by the distance between the capacitor's plates, the area of the plates, and the dielectric constant of the material between the plates. By inputting these values into the capacitance calculator, you can determine the capacitance of the capacitor.";
function CapacitanceCalculator() {
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

  return (
    <Layout
      title={title}
      description="Calculate voltage, current, resistance and power using Ohm's Law."
    >
      <div className="bg-white dark:bg-black">
        <div className="container max-w-6xl m-auto p-4">
          <h1 className="text-4xl p-4 font-bold text-center m-6">{title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols- lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-black p-4 rounded-md shadow-md">
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
                className="w-full py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="container col-span-2">
                <p className=" text-lg pt-4">{calculator}</p>
                <p className=" text-lg pt-4">{calcuator2}</p>
              </div>
            </div>
          </div>

          <Main />
        </div>
      </div>
    </Layout>
  );
}

export default CapacitanceCalculator;
