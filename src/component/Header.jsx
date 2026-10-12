import React, { useState } from "react";
import logo from "../assets/Kata Jadi Nyata Secondary Logo.png";
import { Link, useLocation } from "react-router-dom"

export default function NavigationBar({bazar}) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isBazarPage = location.pathname === "/bazar";

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/0 backdrop-blur-md w-full mx-auto px-6 py-4 md:py-6 transition-all duration-300">
            <div className="relative flex items-center justify-between min-h-[40px]">
                {/* Brand Name / Logo - Centered on mobile, Left on desktop */}
                <div className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <a href="/" className="text-gray-600 hover:text-[#6F5A87] transition-colors font-medium text-base lg:text-lg cursor-pointer">
                        <img src={logo} alt="Kata Nyata Logo" className="w-20 md:w-24 h-auto" />
                    </a>
                </div>

                {/* Navigation Links - Center (Desktop) */}
                <ul className="hidden md:flex flex-row items-center gap-8 lg:gap-12">
                    {isBazarPage ? (
                        <>
                            <li>
                                <a
                                    href="#map"
                                    onClick={(e) => scrollToSection(e, "map")}
                                    className="text-gray-700 hover:text-[#6F5A87] font-medium text-base lg:text-lg py-1 transition-colors"
                                >
                                    Peta Market
                                </a>                            
                            </li>
                            <li>
                                <a
                                    href="#tenants"
                                    onClick={(e) => scrollToSection(e, "tenants")}
                                    className="text-gray-700 hover:text-[#6F5A87] font-medium text-base lg:text-lg py-1 transition-colors"
                                >
                                    Tenants Market
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    onClick={(e) => scrollToSection(e, "schedule")}
                                    className="text-gray-700 hover:text-[#6F5A87] font-medium text-base lg:text-lg py-1 transition-colors"
                                >
                                    Jadwal Acara
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => scrollToSection(e, "about")}
                                    className="text-gray-700 hover:text-[#6F5A87] font-medium text-base lg:text-lg py-1 transition-colors"
                                >
                                    Cerita di Balik Kata Nyata
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#events"
                                    onClick={(e) => scrollToSection(e, "events")}
                                    className="text-gray-700 hover:text-[#6F5A87] font-medium text-base lg:text-lg py-1 transition-colors"
                                >
                                    Ibadah & Rangkaian Acara
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    onClick={(e) => scrollToSection(e, "gallery")}
                                    className="text-gray-700 hover:text-[#6F5A87] font-medium text-base lg:text-lg py-1 transition-colors"
                                >
                                    Dokumentasi Cerita Kita
                                </a>
                            </li>
                        </>
                    )}
                </ul>

                {/* CTA Button - Right (Desktop) */}
                <div className="hidden md:block">
                    {isBazarPage ? (
                        <Link
                            to="/"
                            className="relative group overflow-hidden inline-flex items-center justify-center bg-[#B29DE0] text-white px-5 py-2 rounded-lg hover:shadow-md hover:shadow-purple-300/25 transition-all duration-300 font-medium shadow-sm cursor-pointer text-center hover:scale-105 active:scale-95"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#B29DE0] via-[#EE7B6B] via-[#F9BE88] to-[#93D4FD] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                            <span className="relative z-10">Kembali ke Beranda</span>
                        </Link>
                    ) : (
                        <Link
                            to="/bazar"
                            className="relative group overflow-hidden inline-flex items-center justify-center bg-[#EE7B6B] text-white px-5 py-2 rounded-lg hover:shadow-md hover:shadow-orange-300/25 transition-all duration-300 font-medium shadow-sm cursor-pointer text-center hover:scale-105 active:scale-95"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#EE7B6B] via-[#F9BE88] via-[#B29DE0] to-[#93D4FD] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                            <span className="relative z-10">Kata Nyata Market</span>
                        </Link>
                    )}
                </div>

                {/* Animated Hamburger / 'X' Button (Mobile Only) */}
                <div className="md:hidden flex items-center ml-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-700 hover:text-[#6F5A87] focus:outline-none p-2 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {/* 3 lines that smoothly rotate into an X */}
                        <span
                            className={`h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ease-in-out origin-center ${
                                isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-200 ease-in-out ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ease-in-out origin-center ${
                                isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Smooth Expanding Dropdown Menu */}
            <div
                className={`md:hidden grid transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4 pt-3 border-t border-gray-200/40"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none mt-0 pt-0 border-t border-transparent"
                }`}
            >
                <div className="overflow-hidden flex flex-col gap-4">
                    <ul className="flex flex-col gap-3 bg-white/30 rounded-lg p-4">
                        {isBazarPage ? (
                            <>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => setIsOpen(false)}
                                        className="block text-gray-700 hover:text-[#6F5A87] font-medium text-base py-1 transition-colors"
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#tenants"
                                        onClick={(e) => scrollToSection(e, "tenants")}
                                        className="block text-gray-700 hover:text-[#6F5A87] font-medium text-base py-1 transition-colors"
                                    >
                                        Daftar Tenant
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#promo"
                                        onClick={(e) => scrollToSection(e, "promo")}
                                        className="block text-gray-700 hover:text-[#6F5A87] font-medium text-base py-1 transition-colors"
                                    >
                                        Aktivitas & Promo
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <a
                                        href="#about"
                                        onClick={(e) => scrollToSection(e, "about")}
                                        className="block text-gray-700 hover:text-[#6F5A87] font-medium text-base py-1 transition-colors"
                                    >
                                        Cerita di Balik Kata Nyata
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#events"
                                        onClick={(e) => scrollToSection(e, "events")}
                                        className="block text-gray-700 hover:text-[#6F5A87] font-medium text-base py-1 transition-colors"
                                    >
                                        Ibadah & Rangkaian Acara
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#gallery"
                                        onClick={(e) => scrollToSection(e, "gallery")}
                                        className="block text-gray-700 hover:text-[#6F5A87] font-medium text-base py-1 transition-colors"
                                    >
                                        Dokumentasi Cerita Kita
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="pb-3">
                        {isBazarPage ? (
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="relative group overflow-hidden flex items-center justify-center w-full bg-[#B29DE0] text-white px-5 py-2.5 rounded-lg hover:shadow-md hover:shadow-purple-300/25 transition-all duration-300 font-medium shadow-sm cursor-pointer text-center active:scale-95"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#B29DE0] via-[#EE7B6B] via-[#F9BE88] to-[#93D4FD] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                <span className="relative z-10">Kembali ke Beranda</span>
                            </Link>
                        ) : (
                            <Link
                                to="/bazar"
                                onClick={() => setIsOpen(false)}
                                className="relative group overflow-hidden flex items-center justify-center w-full bg-[#EE7B6B] text-white px-5 py-2.5 rounded-lg hover:shadow-md hover:shadow-orange-300/25 transition-all duration-300 font-medium shadow-sm cursor-pointer text-center active:scale-95"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#EE7B6B] via-[#F9BE88] via-[#B29DE0] to-[#93D4FD] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                <span className="relative z-10">Kata Nyata Market</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
