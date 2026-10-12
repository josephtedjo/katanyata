import { useState } from 'react'
import './App.css'
import NavigationBar from './component/header'
import TeaserPage from './pages/teaser_page'
import LandingPage from './pages/landing_page';
import PriLogo from './assets/Kata Jadi Nyata First Logo.png';
import SecLogo from './assets/Kata Jadi Nyata Secondary Logo.png';
import BazarPage from './pages/bazar_page';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isBazar = location.pathname === "/bazar";

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden transition-colors duration-1000">
      {/* Background Blobs - Dynamically changes colors on /bazar */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-left blob: Emerald (Home) -> Luminous Sky Blue (Bazar) */}
        <div 
          className={`absolute -top-12 -left-12 sm:-top-16 sm:-left-16 md:-top-24 md:-left-24 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-2xl sm:blur-3xl animate-blob transition-all duration-1000 ${
            isBazar ? "bg-sky-400/45" : "bg-emerald-400/50"
          }`} 
        />
        
        {/* Top-right blob: Teal (Home) -> Kata Nyata Coral Red #E5533D (Bazar) */}
        <div 
          className={`absolute -top-10 -right-10 sm:-top-14 sm:-right-20 md:-top-40 md:-right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] rounded-full blur-2xl sm:blur-3xl animate-blob animation-delay-2000 transition-all duration-1000 ${
            isBazar ? "bg-[#E5533D]/40" : "bg-teal-400/35"
          }`} 
        />
        
        {/* Bottom-left blob: Purple (Home) -> Warm Orange-Amber (Bazar) */}
        <div 
          className={`absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-20 md:-bottom-32 md:-left-28 w-60 h-60 sm:w-80 sm:h-80 md:w-[32rem] md:h-[32rem] rounded-full blur-2xl sm:blur-3xl animate-blob animation-delay-4000 transition-all duration-1000 ${
            isBazar ? "bg-orange-500/45" : "bg-purple-400/40"
          }`} 
        />
        
        {/* Bottom-middle blob: Sky Blue (Home) -> Deep Indigo / Royal Blue (Bazar) */}
        <div 
          className={`absolute -bottom-14 left-1/4 sm:bottom-40 sm:left-1/3 md:-bottom-65 md:left-1/3 w-52 h-52 sm:w-72 sm:h-72 md:w-[32rem] md:h-[32rem] rounded-full blur-2xl sm:blur-3xl animate-blob transition-all duration-1000 ${
            isBazar ? "bg-indigo-500/45" : "bg-sky-400/30"
          }`} 
        />
        
        {/* Center-left blob: Warm Amber (Home) -> Luminous Lilac #9F86D9 (Bazar) */}
        <div 
          className={`absolute top-[1%] left-1/4 sm:top-[6%] sm:left-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-82 md:h-72 md:-translate-y-30 md:-translate-x-35 rounded-full blur-xl sm:blur-2xl animate-blob animation-delay-2000 transition-all duration-1000 ${
            isBazar ? "bg-[#9F86D9]/50" : "bg-amber-300/25"
          }`} 
        />
        
        {/* Bottom-right blob: Pink (Home) -> Deep Royal Purple #6F5A87 (Bazar) */}
        <div 
          className={`absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 md:-bottom-24 md:-right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] rounded-full blur-2xl sm:blur-3xl animate-blob animation-delay-4000 transition-all duration-1000 ${
            isBazar ? "bg-[#6F5A87]/50" : "bg-pink-400/35"
          }`} 
        />
      </div>

      {/* Main Page Content */}
      <div className="relative z-10 w-full min-h-dvh">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage PriLogo={PriLogo} SecLogo={SecLogo} />} />
          <Route path="/bazar" element={<BazarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
