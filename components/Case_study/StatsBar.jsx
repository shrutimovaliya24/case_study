import React from "react";

export default function StatsBar() {
    return (
        <section className=" bg-sky-50 py-8 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="flex flex-col items-center text-center">
                        <div className="text-xl md:text-2xl font-bold text-blue-950">200+</div>
                        <div className="text-blue-950 text-sm md:text-base">Fleet Vehicles</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="text-xl md:text-2xl font-bold text-blue-950">70%</div>
                        <div className="text-blue-950 text-sm md:text-base">Theft Reduction</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="text-xl md:text-2xl font-bold text-blue-950">5 Min</div>
                        <div className="text-blue-950 text-sm md:text-base">Alert Response</div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="text-xl md:text-2xl font-bold text-blue-950">24/7</div>
                        <div className="text-blue-950 text-sm md:text-base">Monitoring</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
