"use client";
import React, { useState } from "react";
import { CheckIcon } from "lucide-react";

export default function FleetSecurity() {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <section
      id="solution"
      className="w-full containermx-auto p-6 bg-sky-50 py-6 sm:py-4 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto text-center">

        <button className="bg-gray-100 px-4 py-2 rounded-2xl font-light mb-6 md:mb-8 text-black text-xs sm:text-sm transition">
          SOLUTIONS
        </button>


        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
          Our GPS-Based Approach
        </h2>


        <div className="flex flex-wrap justify-center mb-10 gap-3 sm:gap-4">
          <button
            onClick={() => setActiveTab("core")}
            className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${activeTab === "core"
              ? "bg-blue-900 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            Core Objectives
          </button>

          <button
            onClick={() => setActiveTab("implementation")}
            className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${activeTab === "implementation"
              ? "bg-blue-900 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            Implementation
          </button>
        </div>


        <div className="relative flex items-center justify-between ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl mx-auto lg:ml-30 items-center  lg:mr-30">

            <div className="flex justify-center">
              <img
                src={
                  activeTab === "core"
                    ? "/image/core-objectives.jpg"
                    : "/image/implementation.jpg"
                }
                alt={activeTab === "core" ? "Core Objectives" : "Implementation"}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-md transition-all duration-500 object-cover"
              />
            </div>


            <div className="text-left space-y-5 px-2 sm:px-4">
              {activeTab === "core" ? (
                <>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900 mb-4">
                    Core Objectives
                  </h3>
                  <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-900 mt-1" />
                      Secure vehicles with advanced anti-theft GPS devices, ensuring 24/7
                      safety and instant response in case of tampering.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-900 mt-1" />
                      Monitor routes in real time, detect deviations instantly, and prevent
                      misuse of vehicles or unauthorized detours.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-900 mt-1" />
                      Improve driver accountability with detailed tracking logs, promoting
                      safe driving practices and reducing fuel wastage.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-900 mt-1" />
                      Increase customer trust by ensuring timely deliveries and transparency in
                      fleet operations.
                    </li>
                  </ul>

                </>
              ) : (
                <>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900 mb-4">
                    Implementation
                  </h3>
                  <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                    <li>
                      <strong>Device Installation –</strong> GPS trackers installed across
                      all fleet vehicles with tamper-proof technology.
                    </li>
                    <li>
                      <strong>Route Mapping & Alerts –</strong> Predefined routes +
                      real-time deviation alerts via SMS/email/app notifications.
                    </li>

                    <li>
                      <strong>Continuous Monitoring –</strong> Centralized dashboard with
                      live analytics, trip history, and driver behavior insights.
                    </li>
                    <li>
                      <strong>Data Security –</strong> Encrypted communication ensures
                      sensitive fleet data remains private and protected.
                    </li>

                  </ul>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
