import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Optional
import { carouselData } from "../data";

export default function Carousel() {
  // 1. Initialize Embla hook
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, // Options: loop, align, dragFree, etc.
    [Autoplay({ delay: 4000, stopOnInteraction: true })] // Optional plugin
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);


  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-4 py-8">
      {/* 2. Embla Viewport */}
      <div className="overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
        {/* 3. Embla Container */}
        <div className="flex">
          {carouselData.map((item) => (
            /* 4. Embla Slides */
            <div
              key={item.id}
              className="flex-[0_0_100%] min-w-0 aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition cursor-pointer"
        aria-label="Previous slide"
      >
        &#8592;
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md backdrop-blur transition cursor-pointer"
        aria-label="Next slide"
      >
        &#8594;
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === selectedIndex ? "w-8 bg-indigo-600" : "w-2.5 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
