import React from "react";
import logo from "../assets/Kata Jadi Nyata First Logo.png";

export default function NavigationBar() {
    return (
        <nav className="w-full max-w-12xl mx-auto px-4 py-8 flex items-center justify-between z-10">
            {/* Brand Name - Left */}
            <div className="flex items-center">
                <a href="#" className="font-bold text-2xl text-gray-800 hover:text-purple-600 transition-colors ml-12">
                    <img src={logo} alt="Logo" className="w-40 h-auto drop-shadow-xl" />
                </a>
            </div>

            {/* Navigation Links - Center */}
            <ul className="flex flex-row items-center gap-12">
                <li>
                    <a href="#">
                       <span className="text-gray-600 hover:text-purple-600 transition-colors font-medium text-lg">
                        Cerita Dibalik Kata Nyata
                       </span>
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <span className="text-gray-600 hover:text-purple-600 transition-colors font-medium text-lg">
                            Apa saja disini
                        </span>
                    </a>
                </li>
            </ul>

            {/* CTA Button - Right */}
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-900 transition-colors font-medium shadow-md cursor-pointer">
                Lihat peta disini!
            </button>
       </nav>
    );
}