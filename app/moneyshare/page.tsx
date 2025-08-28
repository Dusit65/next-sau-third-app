"use client";
import React, { useState } from "react";
import Image from "next/image";
import moneyshare from "./../images/moneyshare.png";

export default function Page() {
  const [money, setMoney] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShare] = useState("0.00");

  //Func Calculate
  const handleCalClick = () => {
    //validate
    if (money === "" || money <= "0") {
      alert("กรุณาป้อนจำนวนเงินให้มากกว่า 0");
      return;
    }
    if (person === "" || person <= "0") {
      alert("กรุณาป้อนจำนวนคนให้มากกว่า 0");
      return;
    }
    const result = parseFloat(money) / parseInt(person);
    setMoneyShare(result.toFixed(2));
  };
  //Func Clear data
  const handleClearClick = () => {
    setMoney("");
    setPerson("");
    setMoneyShare("0.00");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src={moneyshare}
            alt="Money Share Icon"
            className="h-20 w-20 text-white items-center"
            width={140}
            height={140}
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Money Share Calculator
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            คำนวณเงินที่ต้องหารกัน
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ป้อนจำนวนเงิน
            </label>
            {/* Input Money */}
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="0.00"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ป้อนจำนวนคน
            </label>
            {/* Input Person */}
            <input
              type="number"
              id="person"
              name="person"
              placeholder="0"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleCalClick}
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300"
          >
            คำนวณ
          </button>
          <button
            onClick={handleClearClick}
            className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-offset-gray-800 transition-colors duration-300"
          >
            ล้างข้อมูล
          </button>
        </div>

        <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            หารกันคนละ
            <span className="font-bold text-2xl text-green-600 dark:text-green-400">
              {moneyShare}
            </span>
            บาท
          </p>
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Dev by Dusit SAU Team</p>
      </footer>
    </div>
  );
}
