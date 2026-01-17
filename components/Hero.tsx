import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-white">

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-10">
        <h1 className="text-5xl md:text-6xl font-serif text-accent leading-tight">
          Where Tradition <br /> Drapes Elegance
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Handpicked sarees inspired by heritage, crafted for the modern woman.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="btn-primary">Explore Collection</button>

          <button className="btn-outline text-accent border-accent">
            Our Story
          </button>
        </div>
      </div>
      <div>
        <Image src={"/hero.png"} alt="Hero Image" width={800} height={500} />
      </div>
    </section>
  );
}

export default Hero;
