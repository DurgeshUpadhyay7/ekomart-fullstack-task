'use client';

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function HeroSection() {

  const slides = ["/hero1.jpg", "/hero2.jpg"];

  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full 
    h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]
    overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* ✅ Responsive Image */}
          <img
            src={slide}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* ✅ Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">

        <div className="max-w-3xl">

          <p className="text-yellow-400 mb-3 text-sm sm:text-base">
            Get up to 30% off on your first $150 purchase
          </p>

          <h1 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold mb-6 leading-tight">
            Do not miss our amazing <br className="hidden sm:block"/>
            grocery deals
          </h1>

          <button className="
          bg-green-600 hover:bg-green-700
          px-6 sm:px-8
          py-2 sm:py-3
          rounded-md font-semibold
          transition">
            Shop Now →
          </button>

        </div>
      </div>

      {/* ✅ Arrows hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 
        -translate-y-1/2 bg-white/30 hover:bg-white/50 
        backdrop-blur p-3 rounded-full"
      >
        <ArrowLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 
        -translate-y-1/2 bg-white/30 hover:bg-white/50 
        backdrop-blur p-3 rounded-full"
      >
        <ArrowRight className="text-white" />
      </button>

    </section>
  );
}