import calculator  from "./images/calculator.png";
import moneyshare  from "./images/moneyshare.png";
import carinstallment  from "./images/carinstallment.png";
import bmi  from "./images/bmi.png";
import bmr  from "./images/bmr.png";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex flex-col items-center ">
            <Image
              src={calculator}
              alt="Calculator Icon"
              className="h-10 w-10 text-white"
              width={140}
              height={140}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            Calculator Varity
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            เครื่องมือคำนวณ By DTI-SAU
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Link
            href="/moneyshare"
            className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center ">
            <Image
              src={moneyshare}
              alt="Money Share Icon"
              className="h-10 w-10 text-white"
              width={140}
              height={140}
            />
          </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Money Share
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
              คำนวณหารค่าใช้จ่ายและทิป
            </p>
          </Link>

          <Link
            href="/bmi"
            className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center ">
            <Image
              src={bmi}
              alt="BMI Icon"
              className="h-10 w-10 text-white"
              width={140}
              height={140}
            />
          </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              BMI Calculator
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
              คำนวณดัชนีมวลกาย
            </p>
          </Link>

          <Link
            href="/bmr"
            className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center ">
            <Image
              src={bmr}
              alt="BMR Icon"
              className="h-10 w-10 text-white"
              width={140}
              height={140}
            />
          </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              BMR Calculator
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
              คำนวณการเผาผลาญพลังงาน
            </p>
          </Link>

          <Link
            href="/carinstallment"
            className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center ">
            <Image
              src={carinstallment}
              alt="Car Installment Icon"
              className="h-10 w-10 text-white"
              width={140}
              height={140}
            />
          </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Car Installment
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
              คำนวณค่างวดรถยนต์
            </p>
          </Link>
        </main>
      </div>
      <footer className="mt-8 text-amber-50 text-center">
        Created by DTI-SAU Team
        <br />
        Copyright &copy; 2025 Southeast Asia University
      </footer>
    </div>
  );
}
