import classNames from "classnames";
import { Layout } from "components/Layout";
import React, { useState } from "react";

const resistorcolorcode = () => {
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
      keywords=""
      baseUrl={"/electronic/resistorcolorcode"}
    >
      <div className=" container mx-auto m-8 p-4 rounded-md">
        <h1 className="text-5xl font-semibold mb-4">
          Ohm&rsquo;s Law Calculator
        </h1>
        <div className="mb-4">
          <p className="text-xl mb-2">
            Enter any two values (voltage, current, resistance or power) and
            click the &rsquo;Calculate&rsquo; button to calculate the other two
            values.
          </p>
          <p className="text-xl">
            Note: Use the correct units (volts for voltage, amps for current,
            ohms for resistance, and watts for power).
          </p>
        </div>
        <div className="mb-4">
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
        <div>
          <div className=" mx-auto m-8 p-4 max-w-md">
            <div className="mb-4">
              <label className="block mb-2 font-medium">Voltage (V)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md text-color-black"
                value={voltage}
                onChange={handleVoltageChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Current (A)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md text-color"
                value={current}
                onChange={handleCurrentChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Resistance (Ω)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md text-color"
                value={resistance}
                onChange={handleResistanceChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Power (W)</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-400 rounded-md text-color"
                value={power}
                onChange={handlePowerChange}
              />
            </div>
            <button
              className={classNames(
                "bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md",
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
        </div>
      </div>
    </Layout>
  );
};

export default resistorcolorcode;
