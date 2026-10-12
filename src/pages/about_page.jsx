import React from "react";
import HUT from '../assets/logohut.png';
import { logoFilosofi } from "../data";

export default function AboutPage({ SecLogo }) {
  return (
    <div id="about" className="scroll-mt-24 pt-10 md:pt-14 mb-8 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 pt-8 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12">
          It begins <br /> with a <span className="text-purple-800 font-semibold">Promise</span>.
        </h1>

        {/* Story Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 mb-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              Setiap yang nyata bermula dari sebuah kata: janji yang diucapkan dan komitmen untuk tetap hadir. Sejalan dengan tema HUT ke -<img src={HUT} alt="HUT" className="mx-1 w-8 sm:w-10 inline align-middle" /> GKI Peterongan, "Kau Tuhan yang Setia", kata adalah janji yang diucapkan, dan nyata adalah pemenuhannya dalam tindakan.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
              Oleh karena itu, janji tidak berhenti pada ucapan. Ia menjadi nyata ketika kita menepatinya: dalam menemani, memberi ruang, menunggu, menjaga kepercayaan, dan melakukan apa yang kita katakan.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto object-contain" src={SecLogo} alt="Secondary Logo" />
          </div>
        </div>
        
        {/* Filosofi Logo */}
        <div className="pt-16 sm:pt-20 md:pt-24 w-full">
          <div> 
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 pb-6 sm:pb-8 text-center sm:text-left">Filosofi Logo</h2>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
              {logoFilosofi.map((item, key) => (
                <div key={item.id || key} className="flex flex-col items-center text-center gap-2">
                  {/* Centered Image */}
                  <div className="w-full max-w-[200px] sm:max-w-[220px] aspect-square flex items-center justify-center p-4 mb-2 sm:mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <span className="text-xl sm:text-2xl text-purple-800 font-semibold mb-1 sm:mb-2">{item.title}</span>
                  <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xs">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}