import React, { useState, useEffect } from "react";
import { FnBTenant, HobbyTenant, FunTenant, HealthTenant, EducationTenant, FashionBeautyTenant, HospitalityTenant, AutomotiveTenant, FinanceTenant, OthersTenant } from "../data";
import bazarTitle from "../assets/hero section KataNyata Bazar.png";
import CustFooter from "../component/Footer";
import { rundown } from "../data";
import RundownSection from "../component/RundownSection";
import denah from '../assets/denah.jpg'



export default function BazarPage() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const TenantGrid = ({ items }) => (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
            {items.map((item) => (
                <div key={item.name} className="flex items-center justify-center bg-gray-800/20 rounded-xl p-2 sm:p-3 shadow-sm">
                    <img
                        src={item.img}
                        alt={item.name}
                        className="object-contain w-14 h-14 sm:w-18 sm:h-18 md:w-50 md:h-50"
                    />
                </div>
            ))}
        </div>
    );


    return (
        <>
            <img src={bazarTitle} alt="Bazar KataNyata" className="w-full object-contain mb-20" />
            <div id="Bazar" className="flex flex-col px-4 sm:px-8 md:px-12 sm:my-8 md:my-12">
            <div className="flex flex-col w-full gap-6 mt-4">
                {/* Schedule */}
                <div id="schedule" className="flex flex-row gap-4">
                    <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-3">Jadwal Event Bazar</h2>
                    <RundownSection />
                </div>
                {/* Map Modal Pop up */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={toggleModal}>
                        <div 
                            className="relative rounded-2xl p-4 sm:p-6 w-[95vw] max-w-6xl max-h-[90vh] flex flex-col items-center" 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={toggleModal} 
                                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer align-end z-10"
                            >
                                ✕
                            </button>
                            <img 
                                src={denah} 
                                alt="Map Kata Nyata" 
                                className="max-w-none w-[700px] md:w-[1200px] sm:h-[900px] md:h-[700px] object-contain rotate-90 md:rotate-0" 
                            />
                        </div>
                    </div>
                )}
                {/* The Map image */}
                {/*  */}
                <div id="map" onClick={toggleModal} className="cursor-pointer">
                    <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-3 mt-12">Peta Market</h2>
                    <img src={denah} alt="Map Kata Nyata" className="w-full h-[250px] sm:h-[450px] md:h-[800px] rounded-2xl object-cover" />
                </div>

                <div id="tenants" className="mt-16">
                    <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-6 md:mb-10">Tenants</h2>

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#D9381E] to-[#F59E0B] bg-clip-text text-transparent">Food and Beverages Tenant</h3>
                    <TenantGrid items={FnBTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent">Hobby Tenant</h3>
                    <TenantGrid items={HobbyTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#EA580C] to-[#E11D48] bg-clip-text text-transparent">Fun Tenant</h3>
                    <TenantGrid items={FunTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#059669] to-[#34D399] bg-clip-text text-transparent">Health Tenant</h3>
                    <TenantGrid items={HealthTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8] bg-clip-text text-transparent">Education Tenant</h3>
                    <TenantGrid items={EducationTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#DB2777] to-[#FB7185] bg-clip-text text-transparent">Fashion & Beauty Tenant</h3>
                    <TenantGrid items={FashionBeautyTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#B45309] to-[#FBBF24] bg-clip-text text-transparent">Hospitality Tenant</h3>
                    <TenantGrid items={HospitalityTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#334155] to-[#0284C7] bg-clip-text text-transparent">Automotive Tenant</h3>
                    <TenantGrid items={AutomotiveTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#0F766E] to-[#10B981] bg-clip-text text-transparent">Finance Tenant</h3>
                    <TenantGrid items={FinanceTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#4B5563] to-[#9CA3AF] bg-clip-text text-transparent">Others Tenant</h3>
                    <TenantGrid items={OthersTenant} />
                </div>
            </div>
        </div>
        <CustFooter />
        </>
   );
}