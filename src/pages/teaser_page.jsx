import React, { useState } from "react";
import NavigationBar from "../component/Header";
import GodFinger from "../assets/God's hand finger.png";
import HumanFinger from "../assets/Human's hand finger.png";


export default function TeaserPage() {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => setIsHovered((prev) => !prev);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full px-4 md:px-0 overflow-hidden">
            {/* Top on Mobile / Left on Desktop */}
            <img
                src={GodFinger}
                alt="God's Hand"
                className={`w-[85vw] translate-x-2 max-w-sm md:max-w-none md:w-80 lg:w-[32rem] xl:w-[40rem] max-h-[35vh] md:max-h-full object-contain md:object-cover md:object-right transition-all duration-700 ease-in-out md:-translate-y-6 ${
                    isHovered
                        ? "rotate-90 md:rotate-14 scale-105 md:scale-110 opacity-70"
                        : "rotate-60 md:rotate-6 opacity-0"
                }`}
            />

            {/* Center Content */}
            <div className="flex flex-col items-center justify-center my-6 md:my-0 text-center z-10">
                <h3 className="text-black text-lg md:text-xl font-medium mb-1">
                    It begins with a..
                </h3>
                <div className="flex flex-col items-center">
                    <span
                        className={`inline-block font-semibold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent overflow-hidden cursor-pointer select-none transition-all duration-500 ease-in-out hover:translate-y-1 md:hover:translate-y-2 ${
                            isHovered
                                ? "h-10 sm:h-14 md:h-16 translate-y-1 md:translate-y-2"
                                : "h-6 sm:h-7 md:h-8"
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={toggleHover}
                        onTouchStart={toggleHover}
                    >
                        Promise
                    </span>
                    <div className="w-48 sm:w-56 md:w-64 h-2 bg-gray-500 rounded-full blur-sm -mt-0.5" />
                </div>
            </div>

            {/* Bottom on Mobile / Right on Desktop */}
            <img
                src={HumanFinger}
                alt="Human's Hand"
                className={`w-[75vw] -translate-x-8 max-w-sm md:max-w-none md:w-96 lg:w-[32rem] xl:w-[40rem] max-h-[35vh] md:max-h-full object-contain md:object-cover md:object-left transition-all duration-700 ease-in-out md:translate-y-8 ${
                    isHovered 
                        ? "rotate-70 md:-rotate-14 scale-105 md:scale-110 md:translate-x-12 opacity-70" 
                        : "rotate-60 md:-rotate-6 md:translate-x-0 opacity-0"
                }`}
            />
        </div>
    );
}