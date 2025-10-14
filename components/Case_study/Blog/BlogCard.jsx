"use client";
import React, { useEffect, useState } from "react";

export default function BlogCard({ blog }) {
  const [formattedDate, setFormattedDate] = useState("");
  const [imgSrc, setImgSrc] = useState(blog.image);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const date = new Date(blog.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(date);
  }, [blog.date]);

  // ✅ Reset image when blog changes
  useEffect(() => {
    setImgSrc(blog.image);
    setImgError(false);
  }, [blog.image]);

  // ✅ Handle image loading errors with multiple fallbacks
  const handleImageError = () => {
    if (!imgError) {
      console.log("Image load failed, using fallback:", blog.image);
      setImgError(true);
      // Fallback to Picsum if Pollinations fails
      setImgSrc(`https://picsum.photos/800/600?random=${Date.now()}`);
    }
  };

  return (
    <div className="bg-white shadow-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative bg-gray-200">
        {imgSrc && imgSrc !== "null" && imgSrc !== null ? (
          <img
            src={imgSrc}
            alt={blog.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-blue-950 to-blue-700 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{blog.category}</span>
          </div>
        )}
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