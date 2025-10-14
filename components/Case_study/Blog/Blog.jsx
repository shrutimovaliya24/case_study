"use client";
import React, { useEffect, useState, useRef } from "react";
import BlogGrid from "./BlogGrid";
import { staticBlogs } from "./blogData";

export default function Blog({ selectedTopic, searchTerm }) {
  const [blogs, setBlogs] = useState(staticBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(staticBlogs);
  const [visibleCount, setVisibleCount] = useState(3);
  
  // ✅ Track used categories and topics to prevent repeats
  const usedCategories = useRef(new Set());
  const usedTopics = useRef(new Set());

  // ✅ Blog categories
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

  // ✅ Initialize used categories from existing blogs
  useEffect(() => {
    blogs.forEach(blog => {
      usedCategories.current.add(blog.category);
      // Create a simple identifier for the topic (first 50 chars of title)
      const topicKey = blog.title.substring(0, 50).toLowerCase();
      usedTopics.current.add(topicKey);
    });
  }, []);

  // ✅ Get unused category
  const getUnusedCategory = () => {
    const unusedCategories = availableCategories.filter(
      cat => !usedCategories.current.has(cat)
    );

    // If all categories used, reset and start over
    if (unusedCategories.length === 0) {
      usedCategories.current.clear();
      return availableCategories[Math.floor(Math.random() * availableCategories.length)];
    }

    // Pick random unused category
    return unusedCategories[Math.floor(Math.random() * unusedCategories.length)];
  };

  // ✅ Check if topic is unique
  const isTopicUnique = (title) => {
    const topicKey = title.substring(0, 50).toLowerCase();
    return !usedTopics.current.has(topicKey);
  };

  // ✅ Unique ID for new blogs
  const generateUniqueId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const generateAIBlog = async (category) => {
    try {
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: category }),
      });

      if (!res.ok) throw new Error("API Error");

      const data = await res.json();

      // ✅ Ensure we ALWAYS have a valid image URL
      const imageUrl = data?.image && data.image !== "null" && data.image !== null
        ? data.image
        : `https://picsum.photos/800/600?random=${Date.now()}`;

      return {
        title: data?.title || `${category} - AI Blog`,
        excerpt:
          data?.excerpt ||
          "AI-generated content about fleet management and GPS technology.",
        image: imageUrl,
      };
    } catch (err) {
      console.error("Generate AI Blog Error:", err);
      const timestamp = Date.now();
      return {
        title: `${category} - AI Blog`,
        excerpt: "Exploring innovative solutions in fleet management.",
        image: `https://picsum.photos/800/600?random=${timestamp}`,
      };
    }
  };

  // ✅ Auto-generate AI blog every 30 seconds (or 5 minutes: 300000)
  useEffect(() => {
    const interval = setInterval(async () => {
      // Get unused category
      const selectedCategory = getUnusedCategory();

      // Generate blog
      const aiBlog = await generateAIBlog(selectedCategory);

      // ✅ Check if topic is unique before adding
      if (isTopicUnique(aiBlog.title)) {
        const newBlog = {
          id: generateUniqueId(),
          title: aiBlog.title,
          excerpt: aiBlog.excerpt,
          category: selectedCategory,
          image: aiBlog.image,
          date: new Date().toISOString(),
          isAI: true,
        };

        // Mark category and topic as used
        usedCategories.current.add(selectedCategory);
        const topicKey = aiBlog.title.substring(0, 50).toLowerCase();
        usedTopics.current.add(topicKey);

        setBlogs((prev) => [newBlog, ...prev]);
        
        console.log(`✅ Generated unique blog for: ${selectedCategory}`);
      } else {
        console.log(`⚠️ Duplicate topic detected, skipping...`);
      }
    }, 30000); // 30 seconds for testing, change to 300000 for 5 minutes

    return () => clearInterval(interval);
  }, []);

  // ✅ Smart search & filtering
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

  // ✅ Re-filter when blogs, search, or topic changes
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
            {selectedTopic && selectedTopic !== "All Topics" && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                {selectedTopic}
              </span>
            )}
          </div>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 text-gray-600">
            No blogs found.
          </div>
        ) : (
          <>
            <BlogGrid blogs={visibleBlogs} />
            {!searchTerm && visibleCount < filteredBlogs.length && (
              <div className="text-center mt-10">
                <button
                  onClick={handleLoadMore}
                  className="border border-blue-950 px-8 py-3 font-medium text-blue-950 hover:bg-blue-950 hover:text-white transition-all rounded-lg"
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