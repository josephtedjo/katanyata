import React from "react";
import LogoHeroWebm from "../assets/kata-nyata-logo-chrome.webm";
import LogoHeroSafari from "../assets/kata-nyata-safari.mp4";

export default function LandingPage({PriLogo, SecLogo}) {
  return (
    <div className="w-full mx-auto h-[500px]">
              <video
        autoPlay
        muted
        playsInline
      >
        <source src={LogoHeroSafari} type='video/mp4; codecs="hvc1"' />
  <source src={LogoHeroWebm} type="video/webm" />
  Your browser does not support transparent video.
</video>    

    <div className="px-32 mt-16 pt-16 mb-4 flex flex-row h-[500px]">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800 pt-24">
          Apa itu Kata Jadi Nyata?
        </h1>
        <div className="flex flex-row justify-around w-full">
          <div className="w-1/2 flex items-center justify-center mr-48">
            <p className="text-xl text-gray-800 mt-8">
            Kata Jadi Nyata memiliki makna yang mengarah kepada <span className="text-purple-800 font-semibold">Kekuatan dari sebuah ucapan, tulisan, dan janji</span> yang diucapkan dari satu hati ke hati lainnya.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img className="w-full max-w-8xl" src={SecLogo} alt="" />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
