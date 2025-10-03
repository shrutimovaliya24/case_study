import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div
      id="home"
      className="bg-[url(/image/hero_background.jpg)] bg-no-repeat bg-cover bg-center "
    >
      <div className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-0">
        <div className="container flex flex-col-reverse md:flex-row mx-auto px-6 text-center items-center justify-center">

          <div className="md:text-center mt-10 md:mt-0 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white py-0">
              Securing Fleets with GPS Technology
            </h1>

            <h6 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-light mt-5 text-white">
              How businesses prevent theft, monitor route deviations, and improve fleet safety
            </h6>

            <div className="flex justify-center mt-5">
              <Link
                href="#solution"
                className="bg-yellow-400 p-3 rounded-xs font-semibold text-blue-950 text-sm sm:text-base md:text-lg hover:bg-yellow-400 transition"
              >
                Explore GPS Solutions
              </Link>
            </div>

            <div className="flex items-center justify-center w-full mt-6">
              <img
                src="/image/mobile.png"
                alt="mobile image"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
