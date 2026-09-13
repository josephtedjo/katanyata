import { useState } from 'react'
import './App.css'
import NavigationBar from './component/Header'
import TeaserPage from './pages/teaser_page'
import LandingPage from './pages/landing_page';

function App() {

const [currentPage, setCurrentPage] = useState('teaser');

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-left Emerald blob */}
        <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 md:-top-24 md:-left-24 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-emerald-400/50 rounded-full blur-2xl sm:blur-3xl animate-blob" />
        
        {/* Top-right Teal blob */}
        <div className="absolute -top-10 -right-10 sm:-top-14 sm:-right-20 md:-top-40 md:-right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] bg-teal-400/35 rounded-full blur-2xl sm:blur-3xl animate-blob animation-delay-2000" />
        
        {/* Bottom-left Purple blob */}
        <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-20 md:-bottom-32 md:-left-28 w-60 h-60 sm:w-80 sm:h-80 md:w-[32rem] md:h-[32rem] bg-purple-400/40 rounded-full blur-2xl sm:blur-3xl animate-blob animation-delay-4000" />
        
        {/* Bottom-middle Sky Blue blob */}
        <div className="absolute -bottom-14 left-1/4 sm:bottom-40 sm:left-1/3 md:-bottom-65 md:left-1/3 w-52 h-52 sm:w-72 sm:h-72 md:w-[32rem] md:h-[32rem] bg-sky-400/30 rounded-full blur-2xl sm:blur-3xl animate-blob" />
        
        {/* Center-left Warm Amber blob */}
        <div className="absolute top-[1%] left-1/4 sm:top-[6%] sm:left-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-82 md:h-72 md:-translate-y-30 md:-translate-x-35 bg-amber-300/25 rounded-full blur-xl sm:blur-2xl animate-blob animation-delay-2000" />
        
        {/* Bottom-right Pink blob */}
        <div className="absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 md:-bottom-24 md:-right-24 w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] bg-pink-400/35 rounded-full blur-2xl sm:blur-3xl animate-blob animation-delay-4000" />
      </div>

    {/* Main Page Content */}
     <div className="relative z-10 w-full min-h-dvh">
        {/* <NavigationBar /> */}
        <TeaserPage />
      </div>

    </div>
  )
}

export default App
