"use client";
import React, { useState } from 'react';
import Image from "next/image";
import bmiImg from "./../images/bmi.png";

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('0.00');

  const handleCalBmi = () => {
    // Validate inputs
    if (weight === '' || parseFloat(weight) <= 0) {
      alert("กรุณาใส่น้ำหนักให้มากกว่า 0");
      return;
    }
    if (height === '' || parseFloat(height) <= 0) {
      alert("กรุณาใส่ส่วนสูงให้มากกว่า 0");
      return;
    }

    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (parsedWeight > 0 && parsedHeight > 0) {
      // BMI formula: weight (kg) / [height (m)]²
      // Convert height from cm to meters
      const heightInMeters = parsedHeight / 100;
      const calculatedBmi = parsedWeight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      setBmi("0.00");
    }
  };

  const handleClear = () => {
    setWeight('');
    setHeight('');
    setBmi('0.00');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src={bmiImg}
            alt="BMI Icon"
            className="h-20 w-20 text-white items-center"
           
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Money Share Calculator
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            คำนวณดัชนีมวลกายกัน
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ป้อนน้ำหนัก(กิโลกรัม)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="0.00"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ป้อนส่วนสูง(เซนติเมตร)</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="0.00"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <button
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300"
            onClick={handleCalBmi}
          >
            คำนวณ
          </button>
          <button
            className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-offset-gray-800 transition-colors duration-300"
            onClick={handleClear}
          >
            ล้างข้อมูล
          </button>
        </div>
        
        <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ค่า BMI ของคุณคือ
            <span className="font-bold text-2xl text-green-600 dark:text-green-400 ml-2">
              {bmi}
            </span>
            <span className="ml-1">
              kg/m²
            </span>
          </p>
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Dev by Dusit SAU Team</p>
      </footer>
    </div>
  );
}
