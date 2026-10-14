import React, { useState } from "react";
import { FnBTenant, HobbyTenant, FunTenant, HealthTenant, EducationTenant, BeautyTenant, FashionTenant, HospitalityTenant, AutomotiveTenant, FinanceTenant, OthersTenant } from "../data";
import bazarTitle from "../assets/hero section KataNyata Bazar.png";
import CustFooter from "../component/Footer";

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
                {/* Map Modal Pop up */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={toggleModal}>
                        <div className="bg-white rounded-2xl p-6 w-[90vw] max-w-2xl" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-xl font-bold mb-4 tex-black">Peta Market</h2>
                            <div className="text-black font-bold text-2xl flex items-center justify-center">Coming Soon</div>
                            <button onClick={toggleModal} className="absolute top-4 right-4 text-white text-2xl cursor-pointer">X</button>
                        </div>
                    </div>
                )}
                {/* The Map image */}
                {/*  */}
                <div id="map" onClick={toggleModal} className="cursor-pointer">
                    <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-3">Peta Market</h2>
                    {/* <img src={yourMapImg} alt="Map Kata Nyata" className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl object-cover" /> */}
                    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl object-cover bg-purple-300/50 flex items-center justify-center"><p className="text-black/50 text-2xl sm:text-3xl md:text-4xl font-bold">Coming Soon</p></div>
                </div>

                <div id="tenants" className="mt-16">
                    <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-6 md:mb-10">Tenants</h2>

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#7B9E87] to-[#A8C4AE] bg-clip-text text-transparent">Food and Beverages Tenant</h3>
                    <TenantGrid items={FnBTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#9B7EB8] to-[#C4AEDA] bg-clip-text text-transparent">Hobby Tenant</h3>
                    <TenantGrid items={HobbyTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#C9705A] to-[#E8A898] bg-clip-text text-transparent">Fun Tenant</h3>
                    <TenantGrid items={FunTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Health Tenant</h3>
                    <TenantGrid items={HealthTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Education Tenant</h3>
                    <TenantGrid items={EducationTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Beauty Tenant</h3>
                    <TenantGrid items={BeautyTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Fashion Tenant</h3>
                    <TenantGrid items={FashionTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Hospitality Tenant</h3>
                    <TenantGrid items={HospitalityTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Automotive Tenant</h3>
                    <TenantGrid items={AutomotiveTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Finance Tenant</h3>
                    <TenantGrid items={FinanceTenant} />

                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-[#A48456] to-[#F7C6D9] bg-clip-text text-transparent">Others Tenant</h3>
                    <TenantGrid items={OthersTenant} />
                </div>

                <div id="schedule">
                    <h2 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-4">Jadwal Bazar</h2>
                    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl object-cover bg-white/30 flex items-center justify-center"><p className="text-black/50 text-2xl sm:text-3xl md:text-4xl font-bold">Coming Soon</p></div>
                </div>
            </div>
        </div>
        <CustFooter />
        </>
   );
}