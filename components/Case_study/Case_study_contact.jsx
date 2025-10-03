import React from "react";

export default function CasestudyContact() {
    return (
        <section className="relative w-full flex flex-col py-12 md:py-16 lg:py-20 px-4 sm:px-6 items-center justify-center">
           
            <div className="absolute inset-0 bg-[url('/image/office.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-blue-900/90 bg-blend-lighten" />

            <div className="relative max-w-3xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center">
                <div className="max-w-2xl ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        Talk to our fleet security specialists today and discover how GPS technology can protect your assets
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        Connect with our experts to protect your fleet and optimize operations
                    </p>

                    <div className="mt-8 sm:mt-10">
                        <a
                            href="/#contact"
                            className="inline-block bg-blue-950 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-normal 
                            transition-all duration-300 ease-in-out 
                            hover:-translate-y-1 hover:scale-105 hover:bg-blue-950 active:scale-95"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
