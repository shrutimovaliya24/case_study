
"use client";
import React, { useEffect, useState } from "react";
import BlogGrid from "./BlogGrid";
import { staticBlogs } from "./blogData";

export default function Blog({ selectedTopic, searchTerm }) {
  const [blogs, setBlogs] = useState(staticBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(staticBlogs);
  const [visibleCount, setVisibleCount] = useState(3);

  const availableCategories = [
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

  // Unique ID for new blogs
  const generateUniqueId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Generate AI Blog via API route
  const generateAIBlog = async (topic) => {
    try {
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      if (!res.ok) throw new Error(`API Error: ${res.status}`);

      const data = await res.json();

      return {
        title: data.title,
        excerpt: data.excerpt,
        image: `/image/cs${Math.floor(Math.random() * 12) + 1}.jpg`,
      };
    } catch (err) {
      // Fallback content
      return {
        title: `${topic} - Latest Insights`,
        excerpt:
          "Exploring innovative solutions in fleet management technology and how they improve operational efficiency.",
        image: `/image/cs${Math.floor(Math.random() * 12) + 1}.jpg`,
      };
    }
  };

  // Auto-generate AI blog at interval (e.g., 30 min = 1800000 ms)
  useEffect(() => {
    const interval = setInterval(async () => {
      const randomCategory =
        availableCategories[Math.floor(Math.random() * availableCategories.length)];

      const aiBlog = await generateAIBlog(randomCategory);

      const newBlog = {
        id: generateUniqueId(),
        title: aiBlog.title,
        excerpt: aiBlog.excerpt,
        category: randomCategory,
        image: aiBlog.image,
        date: new Date().toISOString(),
        isAI: true,
      };

      setBlogs((prev) => [newBlog, ...prev]);
    }, 18000000); // 30 minutes

    return () => clearInterval(interval);
  }, []);

  // Smart search & filtering
  const smartSearch = (blogs, search, topic) => {
    let results = [...blogs];

    if (topic && topic !== "All Topics") {
      results = results.filter(
        (blog) => blog.category.toLowerCase() === topic.toLowerCase()
      );
    }

    if (search && search.trim()) {
      const s = search.toLowerCase().trim();
      results = results.filter(
        (b) =>
          b.title.toLowerCase().includes(s) ||
          b.excerpt.toLowerCase().includes(s) ||
          b.category.toLowerCase().includes(s)
      );
    }

    return results;
  };

  // Re-filter on blogs/search/topic change
  useEffect(() => {
    const results = smartSearch(blogs, searchTerm, selectedTopic);
    setFilteredBlogs(results);
    setVisibleCount(searchTerm ? results.length : 3);
  }, [blogs, selectedTopic, searchTerm]);

  const handleLoadMore = () => setVisibleCount((p) => p + 3);

  const visibleBlogs =
    searchTerm && searchTerm.trim()
      ? filteredBlogs
      : filteredBlogs.slice(0, visibleCount);

  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Blogs</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
           
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 text-gray-600">No blogs found.</div>
        ) : (
          <>
            <BlogGrid blogs={visibleBlogs} />
            {!searchTerm && visibleCount < filteredBlogs.length && (
              <div className="text-center mt-10">
                <button
                  onClick={handleLoadMore}
                  className="border border-blue-950 px-8 py-3 font-medium text-blue-950 hover:bg-blue-950 hover:text-white transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
} 