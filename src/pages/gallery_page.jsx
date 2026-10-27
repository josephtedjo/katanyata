import React, { useEffect, useRef, useState } from "react";
import RoundedButton from "../component/RoundedButton";

export default function GalleryPage({link}) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect once triggered if you only want it to animate once
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2, // Triggers when 20% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} id="gallery" className="flex flex-col w-full mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12 pb-12 sm:pb-24 md:pb-20">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-24">Cerita Kita</h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pl-0 sm:pl-4 md:pl-28">
                <svg
                    viewBox="0 0 120 120"
                    fill="none"
                    className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0 self-center sm:self-start transition-all duration-700 ease-out ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                >
                    {/* First Polaroid (Yellow) */}
                    <g
                        className="transition-transform duration-700 ease-out origin-[60px_60px]"
                        style={{
                            transform: isVisible ? "rotate(-10deg) translate(-4px, 2px)" : "rotate(0deg) scale(0.8)",
                            transitionDelay: "150ms",
                        }}
                    >
                        <rect x="24" y="24" width="52" height="60" rx="4" fill="#fdf3d0" stroke="#eadfa8" strokeWidth="1.5" />
                        <rect x="29" y="29" width="42" height="36" rx="2" fill="#fff9e8" />
                    </g>

                    {/* Second Polaroid (Teal) */}
                    <g
                        className="transition-transform duration-700 ease-out origin-[60px_60px]"
                        style={{
                            transform: isVisible ? "rotate(7deg) translate(3px, -2px)" : "rotate(0deg) scale(0.8)",
                            transitionDelay: "300ms",
                        }}
                    >
                        <rect x="32" y="22" width="52" height="60" rx="4" fill="#d2f3ee" stroke="#b6e3da" strokeWidth="1.5" />
                        <rect x="37" y="27" width="42" height="36" rx="2" fill="#e9faf6" />
                    </g>

                    {/* Front Camera Polaroid (Purple) */}
                    <g
                        className="transition-transform duration-700 ease-out origin-[60px_60px]"
                        style={{
                            transform: isVisible ? "rotate(-3deg)" : "rotate(0deg) scale(0.9)",
                            transitionDelay: "450ms",
                        }}
                    >
                        <rect x="28" y="20" width="56" height="66" rx="5" fill="#fff" stroke="#8D6FA8" strokeWidth="2" />
                        <rect x="34" y="26" width="44" height="40" rx="2.5" fill="#ece3f5" />
                        <circle cx="56" cy="46" r="9" fill="#fff" stroke="#9B85B8" strokeWidth="2" />
                        <circle cx="56" cy="46" r="3" fill="#9B85B8" />
                        <path d="M38 28h7l2.5-4h10l2.5 4" stroke="#9B85B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center sm:text-left pb-8">
                        Momen bersama keluarga
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-500 text-center sm:text-left">
                        Dapatkan momen kebersamaan yang diabadikan dalam sebuah gambar
                    </p>
                    <RoundedButton 
                        text={"Klik disini"} 
                        link={link} 
                        className={"mt-8 sm:mt-12 self-center sm:self-start hover:text-gray-400"}
                        spanClass={"bg-gradient-to-r from-[#D9C6EC] via-[#fdf3d0] to-[#d2f3ee]"}
                    />
                </div>
            </div>
        </div>
    );
}