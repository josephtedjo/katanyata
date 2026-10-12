import React from "react";
import EventsCarousel from "../component/Events";
import ChurchEvents from "../component/Church";

export default function EventsPage() {
    return (
        <div id="events" className="flex flex-col w-full mt-20 px-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Ibadah Mingguan</h1>
            <ChurchEvents />
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Acara yang Tersedia</h1>
            <EventsCarousel />
        </div>
    );
}