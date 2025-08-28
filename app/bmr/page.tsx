"use client";

import React, { useState } from "react";
import Image from "next/image";
import bmrImg from "./../images/bmr.png";

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState("0.00");

  // Function to handle the calculation
  const calculateBmr = () => {
    
      if (weight === "" || parseFloat(weight) <= 0) {
        alert("กรุณาใส่น้ำหนักให้มากกว่า 0");
        return;
      }
      if (height === "" || parseFloat(height) <= 0) {
        alert("กรุณาใส่ส่วนสูงให้มากกว่า 0");
        return;
      }
      if (age === "" || parseInt(age, 10) <= 0) {
        alert("กรุณาใส่อายุให้มากกว่า 0");
        return;
      }
      let calculatedBmr = 0;
      const parsedWeight = parseFloat(weight);
      const parsedHeight = parseFloat(height);
      const parsedAge = parseInt(age, 10);

      if (parsedWeight <= 0 || parsedHeight <= 0 || parsedAge <= 0) {
        alert("กรุณาใส่ข้อมูลให้ถูกต้อง");
        return;
      }
      if (gender === "male") {
        // BMR for men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
        calculatedBmr =
          (10 * parsedWeight) + (6.25 * parsedHeight) - (5 * parsedAge) + 5;
      } else {
        // BMR for women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
        calculatedBmr =
          (10 * parsedWeight) + (6.25 * parsedHeight) - (5 * parsedAge) - 161;
      }
      setBmr(calculatedBmr.toFixed(2));
  };
  const handleClear = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("0.00");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          {/* Using a placeholder image instead of an imported local file */}
          <Image
            src={bmrImg}
            alt="BMR Icon"
            className="h-20 w-20 text-white items-center"
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            BMR Calculator
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            คำนวณอัตราการเผาผลาญพลังงานพื้นฐาน
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              ป้อนน้ำหนัก(กิโลกรัม)
            </label>
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
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              ป้อนส่วนสูง(เซนติเมตร)
            </label>
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

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              ป้อนอายุ(ปี)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="0"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              เลือกเพศ
            </label>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="gender-male"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>ชาย</span>
              </label>
              <label
                htmlFor="gender-female"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>หญิง</span>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300"
            onClick={calculateBmr}
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
            ค่า BMR ของคุณคือ
            <span className="font-bold text-2xl text-green-600 dark:text-green-400 ml-2">
              {bmr}
            </span>
            <span className="ml-1">kcal/day</span>
          </p>
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Dev by Dusit SAU Team</p>
      </footer>
    </div>
  );
}
