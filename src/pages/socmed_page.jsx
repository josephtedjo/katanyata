import React, { useRef, useState, useEffect } from "react";
import Mockup from '../assets/Instagram Mockup.png';
import RoundedButton from "../component/RoundedButton";

export default function SocMedPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // only trigger once
                }
            },
            { threshold: 0.2 } // fires when 20% of the section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div id="socmed" className="scroll-mt-24 pt-10 md:pt-14 mb-8 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 pt-8 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12 text-center md:text-left">
                Follow our journey on social media
            </h1>
            <div ref={sectionRef} className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-4 md:py-8">
                <div className="w-full flex justify-center lg:w-1/2">
                    <img 
                        src={Mockup} 
                        alt="Instagram Mockup" 
                        className={`w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl
                            transform transition-all duration-700 ease-out
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    />
                </div>
                <div className={`w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left
                    transform transition-all duration-700 ease-out delay-150
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 lg:mt-0">
                        Update terkini secara langsung
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500 mt-3 sm:mt-4 max-w-md">
                        Klik tombol di bawah untuk mengikuti journey kami di Instagram
                    </p>
                    <RoundedButton
                        text={"Klik disini"}
                        link={"https://www.instagram.com/bazarkatanyata?stkn=ZWMzOGk1aGk2OXY3"}
                        className="mt-6 sm:mt-8 lg:mt-10 !bg-gradient-to-tr !from-[#f09433] !via-[#dc2743] !to-[#bc1888] hover:!brightness-110 shadow-md"
                        spanClass="!bg-gradient-to-tr !from-[#f09433] !via-[#dc2743] !to-[#bc1888]"
                    />
                </div>
            </div>
        </div>
    );
}