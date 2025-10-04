import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function SearchBlog({ onTopicChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const topics = [
    "All Topics",
    "GPS Technology",
    "Fleet Security & Anti-Theft",
    "Real-Time Tracking",
    "Driver Behavior & Safety",
    "Telematics & IoT",
    "Route Optimization",
    "Asset & Cargo Monitoring",
    "Industry Case Studies",
    "Compliance & Regulations",
    "AI & Predictive Analytics",
    "Cost Optimization Strategies",
    "Future of Fleet Management",
  ];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setIsOpen(false);
    if (onTopicChange) onTopicChange(topic);
  };
  

  return (
    <section className="w-full bg-gray-50 py-2 sm:py-4 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:justify-between gap-4 sm:gap-5">
          
        
          <div ref={dropdownRef} className="relative w-full md:w-auto md:flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full md:w-[230px] lg:w-[250px] flex items-center justify-between bg-blue-950 text-white 
                         px-5 sm:px-6 md:px-7 lg:px-10
                         py-3 sm:py-3.5 md:py-4
                         text-sm sm:text-base md:text-lg
                         font-medium
                         transition-all duration-300 ease-in-out 
                         hover:-translate-y-1 hover:scale-105 hover:bg-blue-950 active:scale-95"
            >
              <span className="truncate">{selectedTopic}</span>
              <ChevronDown 
                className={`ml-3 h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`} 
              />
            </button>

            {isOpen && (
              <div
                className="absolute left-0 z-20 
                           mt-2 
                           w-full md:w-[290px] lg:w-[300px]
                           max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96
                           overflow-y-auto 
                           bg-white 
                           shadow-lg
                           animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="py-1">
                  {topics.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => handleTopicSelect(topic)}
                      className={`w-full text-left block  
                                 px-4 sm:px-5 md:px-6
                                 py-2 sm:py-2.5 md:py-3
                                 text-xs sm:text-sm md:text-base
                                 transition-colors duration-150
                                 ${selectedTopic === topic 
                                   ? "bg-blue-50 text-blue-950 font-medium" 
                                   : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                                 }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

         
          <div className="relative w-full md:w-[300px] lg:w-[400px] md:flex-shrink-0">
            <input
              name="term"
              type="text"
              placeholder="Search the blog"
              className="w-full 
                         px-5 sm:px-6 md:px-7 lg:px-8
                         py-3 sm:py-3.5 md:py-4
                         pr-12 shadow-md
                         text-sm sm:text-base md:text-lg
                         bg-white
                         placeholder:text-gray-400
                         focus:outline-none
                         focus:border-gray-400
                         transition-colors duration-200"
            />
            <Search 
              className="absolute right-4 sm:right-5 md:right-6 lg:right-7 top-1/2 -translate-y-1/2 
                         h-4 w-4 sm:h-5 sm:w-5
                         text-black                        pointer-events-none" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
