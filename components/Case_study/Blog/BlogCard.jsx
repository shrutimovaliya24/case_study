"use client";
import React, { useEffect, useState } from "react";

export default function BlogCard({ blog }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(blog.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(date);
  }, [blog.date]);

  return (
    <div className="bg-white shadow-2xl overflow-hidden  hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[300px]">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-950 transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">{blog.excerpt}</p>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium text-blue-950">{blog.category}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
