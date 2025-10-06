"use client";
import React, { useEffect, useState } from "react";
import BlogGrid from "./BlogGrid";
import { staticBlogs } from "./blogData";

export default function Blog({ selectedTopic, searchTerm }) {
  const [filteredBlogs, setFilteredBlogs] = useState(staticBlogs);
  const [visibleCount, setVisibleCount] = useState(3);

  // Check if user is actively searching
  const isSearching = searchTerm && searchTerm.trim().length > 0;

  // SMART SEARCH FUNCTION with advanced features
  const smartSearch = (blogs, search, topic) => {
    let results = [...blogs];

    // 1. Filter by topic first
    if (topic && topic !== "All Topics") {
      results = results.filter(
        (blog) => blog.category.toLowerCase() === topic.toLowerCase()
      );
    }

    // 2. Smart search with multiple features
    if (search && search.trim()) {
      const searchLower = search.toLowerCase().trim();
      
      results = results.filter((blog) => {
        const title = blog.title.toLowerCase();
        const excerpt = blog.excerpt.toLowerCase();
        const category = blog.category.toLowerCase();
        
        // Feature 1: Exact phrase match (highest priority)
        if (title.includes(searchLower) || 
            excerpt.includes(searchLower) || 
            category.includes(searchLower)) {
          return true;
        }

        // Feature 2: Multi-word search (all words must match somewhere)
        const words = searchLower.split(/\s+/).filter(w => w.length > 0);
        if (words.length > 1) {
          const allWordsMatch = words.every(word => 
            title.includes(word) || 
            excerpt.includes(word) || 
            category.includes(word)
          );
          if (allWordsMatch) return true;
        }

        // Feature 3: Partial word matching (typo tolerance)
        const partialMatch = words.some(word => {
          if (word.length >= 3) { // Only for words 3+ characters
            return title.includes(word) || 
                   excerpt.includes(word) || 
                   category.includes(word);
          }
          return false;
        });

        return partialMatch;
      });

      // Feature 4: Relevance scoring and sorting
      results = results.map(blog => {
        let score = 0;
        const title = blog.title.toLowerCase();
        const excerpt = blog.excerpt.toLowerCase();
        const category = blog.category.toLowerCase();

        // Exact match in title = highest score
        if (title.includes(searchLower)) score += 10;
        
        // Exact match in category = high score
        if (category.includes(searchLower)) score += 8;
        
        // Exact match in excerpt = medium score
        if (excerpt.includes(searchLower)) score += 5;

        // Word matches
        const words = searchLower.split(/\s+/).filter(w => w.length > 0);
        words.forEach(word => {
          if (title.includes(word)) score += 3;
          if (category.includes(word)) score += 2;
          if (excerpt.includes(word)) score += 1;
        });

        return { ...blog, relevanceScore: score };
      });

      // Sort by relevance score (highest first)
      results.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }

    return results;
  };

  useEffect(() => {
    const results = smartSearch(staticBlogs, searchTerm, selectedTopic);
    setFilteredBlogs(results);
    
    // If searching, show ALL results. Otherwise, reset to 3
    if (isSearching) {
      setVisibleCount(results.length); // Show ALL when searching
    } else {
      setVisibleCount(3); // Show 3 when not searching
    }
  }, [selectedTopic, searchTerm, isSearching]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // When searching, show all. When not searching, show limited count
  const visibleBlogs = isSearching 
    ? filteredBlogs 
    : filteredBlogs.slice(0, visibleCount);

  // Calculate search quality indicator
  const getSearchQuality = () => {
    if (!searchTerm || !searchTerm.trim()) return null;
    
    if (filteredBlogs.length === 0) return "no-results";
    if (filteredBlogs.length === staticBlogs.length) return "too-broad";
    if (filteredBlogs.length <= 3) return "specific";
    return "good";
  };

  const searchQuality = getSearchQuality();

  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="container mx-auto">
        
        

        {/* No results with smart suggestions */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-2">
              No blogs found matching your search.
            </p>
           
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            <BlogGrid blogs={visibleBlogs} />

            {/* Load More Button - ONLY show when NOT searching and there are more blogs */}
            {!isSearching && visibleCount < filteredBlogs.length && (
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
                  Load More
                </button>

                <div className="hidden sm:block w-sm h-[1px] bg-gray-300 ml-6"></div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}