"use client";
import React, { useEffect, useState, useRef } from "react";
import BlogGrid from "./BlogGrid";
import { staticBlogs } from "./blogData";

export default function Blog({ selectedTopic, searchTerm }) {
  const [blogs, setBlogs] = useState(staticBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(staticBlogs);
  const [visibleCount, setVisibleCount] = useState(3);

  // ✅ Track used titles to prevent duplicates
  const usedTopics = useRef(new Set());

  // Initialize used topics
  useEffect(() => {
    blogs.forEach(blog => {
      usedTopics.current.add(blog.title.substring(0, 50).toLowerCase());
    });
  }, []);

  // ✅ Check if new blog is unique
  const isTopicUnique = (title) => {
    const topicKey = title.substring(0, 50).toLowerCase();
    return !usedTopics.current.has(topicKey);
  };

  // ✅ Generate a unique ID
  const generateUniqueId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // ✅ Request AI-generated blog
  const generateAIBlog = async () => {
    const res = await fetch("/api/generate-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: "fleet management" }),
    });

    const data = await res.json();

    return {
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      image: data.image,
    };
  };

  // ✅ Auto-generate new unique blog periodically
  useEffect(() => {
    const interval = setInterval(async () => {
      const aiBlog = await generateAIBlog();

      if (aiBlog?.title && isTopicUnique(aiBlog.title)) {
        const newBlog = {
          id: generateUniqueId(),
          title: aiBlog.title,
          excerpt: aiBlog.excerpt,
          category: aiBlog.category,
          image: aiBlog.image,
          date: new Date().toISOString(),
          isAI: true,
        };

        usedTopics.current.add(aiBlog.title.substring(0, 50).toLowerCase());
        setBlogs((prev) => [newBlog, ...prev]);
        console.log(`✅ Added new unique AI blog: ${aiBlog.title}`);
      } else {
        console.log("⚠️ Skipped duplicate AI blog");
      }
    }, 30000); // every 30 seconds — change to 300000 (5 min) for production

    return () => clearInterval(interval);
  }, []);

  // ✅ Smart search and filter
  const smartSearch = (blogs, search, topic) => {
    let results = [...blogs];

    if (topic && topic !== "All Topics") {
      results = results.filter(
        (blog) => blog.category?.toLowerCase() === topic.toLowerCase()
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

  // ✅ Filter blogs when inputs change
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
          {selectedTopic && selectedTopic !== "All Topics" && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                {selectedTopic}
              </span>
            </div>
          )}
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
