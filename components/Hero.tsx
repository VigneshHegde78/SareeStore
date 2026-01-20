import Image from "next/image";
import React from "react";
import Link from "next/link"; // Assuming you might want to link the buttons

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-50 px-4 py-12 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.2] md:leading-tight">
            Where Tradition <br className="hidden md:block" />
            <span className="text-accent italic">Drapes Elegance</span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-500 max-w-lg mx-auto md:mx-0">
            Handpicked sarees inspired by heritage, crafted for the modern
            woman. Experience the timeless beauty of artisanal weaving.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              Explore Collection
            </button>

            <button className="px-8 py-3 bg-transparent border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all">
              Our Story
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Optional: Background decorative blob/circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/10 rounded-full blur-3xl -z-10" />

          <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-square">
            <Image
              src="/hero.png"
              alt="Model wearing elegant saree"
              fill
              className="object-contain md:object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
