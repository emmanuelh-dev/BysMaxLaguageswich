import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function main() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <div className="border border-gray-500 border-md rounded-lg bg-white dark:bg-black p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/ohmlawcalculator">
          <span>
            
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Ohm&rsquo;s Law Calculator
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
              Calculate voltage, current, resistance and power using Ohm&rsquo;s Law.
            </p>
          </span>
        </Link>
      </div>
      <div className="border border-gray-500 border-md rounded-lg bg-white dark:bg-black p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/capacitorcalculator">
          <span>
            
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Capacitor Calculator
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
              Calculate the capacitance, voltage or charge stored on a
              capacitor.
            </p>
          </span>
        </Link>
      </div>
      <div className="border border-gray-500 border-md rounded-lg bg-white dark:bg-black p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/resistorcolorcode">
          <span>
            
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Resistor Color Code
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
              Find the resistance value of a resistor from its color code.
            </p>
          </span>
        </Link>
      </div>
      <div className="border border-gray-500 border-md rounded-lg bg-white dark:bg-black p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/resistorcolorcode">
          <span>
            
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Resistor Color Code
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
              Find the resistance value of a resistor from its color code.
            </p>
          </span>
        </Link>
      </div>
      <div className="border border-gray-500 border-md rounded-lg bg-white dark:bg-black p-4 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/resistorcolorcode">
          <span>
            
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Resistor Color Code
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
              Find the resistance value of a resistor from its color code.
            </p>
          </span>
        </Link>
      </div>
      {/* add more calculators here */}
    </div>
  );
}
