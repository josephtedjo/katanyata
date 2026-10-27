import React from "react";
import LogoHeroWebm from "../assets/kata-nyata-logo-chrome.webm";
import LogoHeroSafari from "../assets/kata-nyata-safari.mp4";
import Carousel from "../component/Carousel";
import AboutPage from "./about_page";
import EventsPage from "./events_page";
import GalleryPage from "./gallery_page";
import SocMedPage from "./socmed_page";
import CustFooter from "../component/Footer";

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

<div className="w-full mx-auto h-[700px] bg-gradient-to-b from-white/0 via-white/10 to-white/30">
<Carousel />
</div>

<div className="bg-gradient-to-b from-white/30 to-white/90">
  <AboutPage SecLogo={SecLogo} />
  <div className="bg-gradient-to-b from-transparent via-white/20 via-white/40 to-white/60">
    <EventsPage />
    <div className="bg-gradient-to-b from-white/60 via-white/70 to-white/90">
      <GalleryPage link={"https://photos.app.goo.gl/SAY9odcueUCQQKy76"}/>
    </div>
    <div className="bg-gradient-to-b from-white/90 to-white/90">
      <SocMedPage />
      <CustFooter />
    </div>
  </div>
</div>

    </div>
  );
}
