import React from "react";
import { Lock, Currency, RouteIcon, TimerIcon } from "lucide-react";

export default function Result() {
  return (
    <section id="result" className="bg-white flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto text-center   items-center  ">


        <button className="bg-gray-100 px-4 py-2 rounded-2xl font-light mb-6 md:mb-8 text-black text-xs sm:text-sm transition">
          RESULT
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-sky-50/70 shadow-xl p-6 rounded-xl text-left h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950 rounded-xl text-sm text-white">
              <RouteIcon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-sm sm:text-base text-gray-600 mt-4 space-y-1">
              <p><strong>60% Decrease in route deviations</strong></p>
              <p>Drivers follow predefined routes more consistently.</p>
              <p>Reduced fuel wastage and improved delivery timelines.</p>
              <p>Helps managers track compliance more effectively.</p>
              <p>Boosts customer trust with on-time arrivals.</p>
            </div>
          </div>

          <div className="bg-sky-50/70 shadow-xl p-6 rounded-xl text-left h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950 rounded-xl text-sm text-white">
              <TimerIcon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-sm sm:text-base text-gray-600 mt-4 space-y-1">
              <p><strong>5-Minute Response to theft alerts</strong></p>
              <p>Immediate notifications sent to fleet managers.</p>
              <p>Quick action minimizes vehicle loss or damage.</p>
              <p>Helps coordinate with local authorities faster.</p>
              <p>Improves driver confidence and safety on roads.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-sky-50/70 shadow-xl p-6 rounded-xl text-left h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950 rounded-xl text-sm text-white">
              <Lock className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-sm sm:text-base text-gray-600 mt-4 space-y-1">
              <p><strong>70% Reduction in theft attempts</strong></p>
              <p>Smart GPS locks prevent unauthorized vehicle use.</p>
              <p>Acts as a strong deterrent against intruders.</p>
              <p>Ensures asset protection during off-duty hours.</p>
              <p>Contributes to lower operational risk overall.</p>
            </div>
          </div>

          <div className="bg-sky-50/70 shadow-xl p-6 rounded-xl text-left h-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950 rounded-xl text-sm text-white">
              <Currency className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="text-sm sm:text-base text-gray-600 mt-4 space-y-1">
              <p><strong>Lower Insurance Premiums</strong></p>
              <p>Security reduces claim risks for insurers.</p>
              <p>Long-term cost savings for fleet companies.</p>
              <p>Improves eligibility for special security discounts.</p>
              <p>Encourages sustainable financial planning.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
