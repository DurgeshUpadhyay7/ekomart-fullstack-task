'use client';

import React from "react";

export default function CategorySection() {

  const categories = [
    { img: "/categories/01.jpg", title: "Cerelac" },
    { img: "/categories/02.jpg", title: "Pumpkin Mix" },
    { img: "/categories/03.jpg", title: "Aptamil Milk" },
    { img: "/categories/04.jpg", title: "Apple Juice" },
    { img: "/categories/05.jpg", title: "Fresh Orange" },
    { img: "/categories/06.jpg", title: "Sauces Pack" },
    { img: "/categories/07.jpg", title: "Bread Mix" },
    { img: "/categories/08.jpg", title: "Crackers" },
  ];

  return (
    <section className="bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex gap-8 overflow-x-auto scrollbar-hide">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-32.5 cursor-pointer group"
            >

              {/* Circle */}
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">

                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />

              </div>

              {/* Title */}
              <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                {cat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}