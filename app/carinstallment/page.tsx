 
"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import carinstallment from "./../images/carinstallment.png";

export default function App() {
  const [name, setName] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [installmentRate, setInstallmentRate] = useState('');
  const [downPercent, setDownPercent] = useState('15');
  const [numPayments, setNumPayments] = useState('12'); // New state for number of payments
  const [monthlyPayment, setMonthlyPayment] = useState('0.00');

  const calculateInstallment = () => {
    const price = parseFloat(carPrice);
    const rate = parseFloat(installmentRate) / 100;
    const downPayment = price * (parseFloat(downPercent) / 100);
    const loanAmount = price - downPayment;
    const payments = parseInt(numPayments, 10);

    if (loanAmount > 0 && rate > 0) {
      const monthlyRate = rate / 12;
      const calculatedPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
      setMonthlyPayment(calculatedPayment.toFixed(2));
    } else {
      setMonthlyPayment('0.00');
    }
  };

  const handleClear = () => {
    setName('');
    setCarPrice('');
    setInstallmentRate('');
    setDownPercent('15');
    setNumPayments('60');
    setMonthlyPayment('0.00');
  };
  
  // Use useEffect to automatically recalculate when inputs change
  useEffect(() => {
    calculateInstallment();
  }, [carPrice, installmentRate, downPercent, numPayments]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          {/* Using a placeholder image instead of an imported local file */}
          <Image
            src={carinstallment}
            alt="Car Installment Icon"
            className="h-20 w-20 text-white items-center"
           
          />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Car Installment Calculator</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">คำนวณอัตราการผ่อนชำระรถยนต์</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ป้อนชื่อผู้คำนวณ</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ชื่อผู้คำนวณ"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="carPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ป้อนราคารถ(บาท)</label>
            <input
              type="number"
              id="carPrice"
              name="carPrice"
              placeholder="0.00"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="installment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ป้อนดอกเบี้ยต่อปี(%)</label>
            <input
              type="number"
              id="installment"
              name="installment"
              placeholder="0"
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              value={installmentRate}
              onChange={(e) => setInstallmentRate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">เลือกเงินดาวน์(%)</label>
            <div className="flex items-center space-x-4">
              <label htmlFor="downPercent-15" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  id="downPercent-15"
                  name="downPercent"
                  value="15"
                  checked={downPercent === '15'}
                  onChange={(e) => setDownPercent(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>15%</span>
              </label>
              <label htmlFor="downPercent-20" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  id="downPercent-20"
                  name="downPercent"
                  value="20"
                  checked={downPercent === '20'}
                  onChange={(e) => setDownPercent(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>20%</span>
              </label>
              <label htmlFor="downPercent-25" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  id="downPercent-25"
                  name="downPercent"
                  value="25"
                  checked={downPercent === '25'}
                  onChange={(e) => setDownPercent(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>25%</span>
              </label>
              <label htmlFor="downPercent-30" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  id="downPercent-30"
                  name="downPercent"
                  value="30"
                  checked={downPercent === '30'}
                  onChange={(e) => setDownPercent(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>30%</span>
              </label>
              <label htmlFor="downPercent-35" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  id="downPercent-35"
                  name="downPercent"
                  value="35"
                  checked={downPercent === '35'}
                  onChange={(e) => setDownPercent(e.target.value)}
                  className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span>35%</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="numPayments" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">เลือกจำนวนเดือนที่ผ่อน</label>
            <select
              id="numPayments"
              name="numPayments"
              value={numPayments}
              onChange={(e) => setNumPayments(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            >
              <option value="12">12 เดือน</option>
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <button
            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300"
            onClick={calculateInstallment}
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
            ยอดผ่อนชำระต่อเดือนของคุณคือ
            <span className="font-bold text-2xl text-green-600 dark:text-green-400 ml-2">
              {monthlyPayment}
            </span>
            <span className="ml-1">
              บาท
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
