"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Service from "@/components/Case_study/Service";
import CasestudyContact from "@/components/Case_study/Case_study_contact";
import Blog from "@/components/Case_study/Blog/Blog";
import SearchBlog from "@/components/Case_study/Blog/SearchbBlog";

export default function CaseStudyHero() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="relative w-full min-h-screen flex py-12 md:py-16 lg:py-20 px-4 sm:px-6 items-center">
        <div className="absolute inset-0 bg-[url('/image/case_study_hero_background.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-blue-900/70" />

        <div className="relative max-w-4xl w-full mx-auto px-4  sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-xl pt-16 sm:pt-20 md:pt-24 lg:pt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Real Stories of Secured Fleets
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore our digital case studies on fleet security and learn how
              GPS technology is protecting assets worldwide.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/#contact"
                className="inline-block bg-blue-950 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-normal 
         transition-all duration-300 ease-in-out 
         hover:-translate-y-1 hover:scale-105 hover:bg-blue-950 active:scale-95"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Explore Our GPS Fleet Security Case Studies
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-4">
          Discover how businesses across logistics, transportation, delivery,
          and asset management have transformed their operations with our
          GPS-powered fleet security solutions. These case studies highlight
          real-world implementations where companies successfully prevented
          theft, improved route compliance, and enhanced driver and vehicle
          safety.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-4">
          Each case study provides a deep dive into challenges faced, strategies
          deployed, and measurable results achieved — from reducing unauthorized
          vehicle use to recovering stolen assets in record time. Explore how
          intelligent tracking, geofencing, and data-driven decision-making are
          shaping the future of fleet management.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
          Want to learn how these solutions can be tailored to your business?{" "}
          <Link
            href="/#contact"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Contact our team
          </Link>{" "}
          for a personalized consultation and discover how GPS technology can
          strengthen your fleet’s security and performance.
        </p>
      </section>

      <section className="container max-w-full mx-auto  ">
      <div>
      {/* Search and Filter Section */}
      <SearchBlog 
        onTopicChange={setSelectedTopic}
        onSearchChange={setSearchTerm}
      />
      
      {/* Blog Display Section */}
      <Blog 
        selectedTopic={selectedTopic}
        searchTerm={searchTerm}
      />
    </div>
      </section>

      <section className="bg-white ">
        <div className="container mx-auto px-4 pt-10 sm:px-6 md:px-12 lg:px-16 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Empowering Businesses with Intelligent Fleet Security
          </h2>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
            From small logistics startups to large-scale transportation
            networks, companies trust our GPS technology to keep their fleets
            secure and efficient. We provide intelligent tracking solutions that
            help businesses prevent theft, improve route compliance, and ensure
            safer operations.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
            Our expertise covers real-time vehicle tracking, route deviation
            alerts, driver behavior monitoring, and data-driven analytics. With
            a strong focus on safety and reliability, we empower organizations
            to optimize operations, reduce risk, and respond instantly to
            unexpected events on the road.
          </p>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Many of our deployed GPS solutions continue to evolve with emerging
            technology — helping fleets stay ahead of threats, reduce costs, and
            operate with greater confidence. Partner with us to transform your
            fleet management into a secure, future-ready operation.
          </p>

          <div className="mt-8 sm:mt-10 mb-2 sm:mb-10">
            <Image
              src="/image/client.jpg"
              alt="GPS fleet security system"
              width={1200}
              height={800}
              className="w-full max-w-3xl mx-auto object-cover"
            />
          </div>
        </div>

        <Service />
        <CasestudyContact />
      </section>
    </>
  );
}
