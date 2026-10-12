import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { carouselEvent } from "../data";

export default function Events() {
  // 1. Initialize Embla hook with loop: true (infinite scrolling, no autoplay)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

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
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-6">
      {/* Embla Viewport */}
      <div className="overflow-hidden p-1 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        {/* Embla Container */}
        <div className="flex -ml-4 md:-ml-6">
          {carouselEvent.map((item, index) => (
            /* Embla Slides: 3 visible cards on md/lg screens */
            <div
              key={item.id || index}
              className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] min-w-0 pl-4 md:pl-6 flex flex-col"
            >
              {/* {Rounded Image Container} */}
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center group select-none">
                {item.imgsrc ? (
                  <>
                    <img
                      src={item.imgsrc}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-3xl pointer-events-none transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    {item.title && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-white/20 p-5 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      </div>
                    )}
                  </>
                ) : (
                  <span className="text-6xl sm:text-7xl font-bold text-white tracking-tight">
                    Coming Soon
                  </span>
                )}
              </div>
              {/* {Title of the slide} */}
              <h2 className="text-3xl font-bold text-gray-800 pt-12 pb-8">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Navigation Controls on the bottom right */}
      <div className="flex items-center justify-end gap-3 mt-12 px-2">
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          type="button"
          aria-label="Previous Slide"
          className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 shadow-sm transition-all text-gray-700 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          type="button"
          aria-label="Next Slide"
          className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 shadow-sm transition-all text-gray-700 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}


