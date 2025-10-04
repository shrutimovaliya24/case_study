
"use client";
import React, { useEffect, useState } from "react";
import BlogGrid from "./BlogGrid";
import { staticBlogs } from "./blogData";

export default function Blog({ selectedTopic }) {
  const [filteredBlogs, setFilteredBlogs] = useState(staticBlogs);
  const [visibleCount, setVisibleCount] = useState(3); 


  useEffect(() => {
    if (selectedTopic === "All Topics") {
      setFilteredBlogs(staticBlogs);
    } else {
      const filtered = staticBlogs.filter(
        (b) => b.category.toLowerCase() === selectedTopic.toLowerCase()
      );
      setFilteredBlogs(filtered);
    }
    setVisibleCount(3); 
  }, [selectedTopic]);

  
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); 
  };

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="container mx-auto">
      

        <BlogGrid blogs={visibleBlogs} />

        {visibleCount < filteredBlogs.length && (
  <div className="text-center mt-10 flex items-center justify-center">
 
    <div className="hidden sm:block w-sm h-[1px] bg-gray-300 mr-6"></div>

   
    <button
      onClick={handleLoadMore}
      className="
        relative bg-transparent text-blue-950 border border-blue-950 
        px-8 py-3 font-medium 
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:scale-105 hover:bg-blue-950 hover:text-white
        animate-pulse-slow
      "
    >
      Load More Stories
    </button>

   
    <div className="hidden sm:block w-sm h-[1px] bg-gray-300 ml-6"></div>
  </div>
)}


      </div>
    </section>
  );
}
