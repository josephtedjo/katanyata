import React from "react";

export default function RoundedButton({ text, link, className = "", spanClass = ""}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group overflow-hidden flex items-center justify-center rounded-2xl px-6 py-3 
             bg-[#D9C6EC] text-white font-medium 
             hover:shadow-lg hover:shadow-purple-400/30 hover:scale-105 active:scale-95
             transition-all duration-300
             w-40 sm:w-44 md:w-48
             text-lg sm:text-xl md:text-2xl
             ${className}`}
        >
            <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out ${spanClass}`} />
            <span className="relative z-10">{text}</span>
        </a>
    );
}