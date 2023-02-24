import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <div className="bg-white dark:bg-black p-4  rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/ohmlawcalculator">
          <span>
            <Image
              src="/ohm.png"
              width={300}
              height={300}
              alt="Ohm's Law Calculator"
            />
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Ohm&rsquo;s Law Calculator
            </h2>
            <p className="text-gray-600">
              Calculate voltage, current, resistance and power using Ohm&rsquo;s Law.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4">
              Go to Calculator
            </button>
          </span>
        </Link>
      </div>
      <div className="bg-white dark:bg-black p-4  dark:border-white  rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/capacitorcalculator">
          <span>
            <Image
              src="/capacitance.png"
              width={300}
              height={300}
              alt="Capacitor Calculator"
            />
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Capacitor Calculator
            </h2>
            <p className="text-gray-600">
              Calculate the capacitance, voltage or charge stored on a
              capacitor.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4">
              Go to Calculator
            </button>
          </span>
        </Link>
      </div>
      <div className="bg-white dark:bg-black p-4  rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/resistorcolorcode">
          <span>
            <Image
              src="/resistence.png"
              width={300}
              height={300}
              alt="Resistor Color Code"
            />
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Resistor Color Code
            </h2>
            <p className="text-gray-600">
              Find the resistance value of a resistor from its color code.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4">
              Go to Calculator
            </button>
          </span>
        </Link>
      </div>
      <div className="bg-white dark:bg-black p-4  rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/resistorcolorcode">
          <span>
            <Image
              src="/develop.png"
              width={300}
              height={300}
              alt="Resistor Color Code"
            />
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Resistor Color Code
            </h2>
            <p className="text-gray-600">
              Find the resistance value of a resistor from its color code.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4">
              Go to Calculator
            </button>
          </span>
        </Link>
      </div>
      <div className="bg-white dark:bg-black p-4  rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <Link href="/electronic/resistorcolorcode">
          <span>
            <Image
              src="/develop.png"
              width={300}
              height={300}
              alt="Resistor Color Code"
            />
            <h2 className="text-xl font-semibold mb-4 text-yellow-500">
              Resistor Color Code
            </h2>
            <p className="text-gray-600">
              Find the resistance value of a resistor from its color code.
            </p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4">
              Go to Calculator
            </button>
          </span>
        </Link>
      </div>
      {/* add more calculators here */}
    </div>
  );
}
