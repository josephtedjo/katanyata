import { useState, useEffect } from "react";
import { rundown } from "../data.js";


// Check the time each one hour
 function useNow(intervalMs = 60 * 60 * 1000) {
    // 1. remember the current time
  const [now, setNow] = useState(() => new Date());       

    // 2. update it every hour
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);  
    // 3. stop the timer when the component goes away
    return () => clearInterval(id);                        
  }, [intervalMs]);

  return now;
}

// Date Format
export const todayWIB = (d = new Date()) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jakarta" }).format(d);

// Rundown Section
export default function RundownSection() {
  const today = todayWIB(useNow());

  return (
    <section id="schedule" className="mx-auto max-w-6xl mb-12">
      <div className="grid gap-6 md:grid-cols-3 items-start">
        {rundown.map(({day, date, schedule}) => {
          const isToday = date === today;

          return (
            <div
              key={date}
              className={`self-start rounded-3xl bg-white/30 backdrop-blur-md p-4 border border-white/60 transition shadow-sm ${
    isToday ? "ring-2 ring-[#9B85B8] shadow-[0_10px_30px_rgba(150,120,180,0.25)]" : ""
  }`}
            >
              <div className={`mb-4 flex items-center rounded-2xl px-4 py-3 ${schedule}`}>
                <h3 className="font-bold text-gray-700 text-xl mr-2">{day},</h3><p className="text-gray-700">{date}</p>
                {isToday && (
                  <span className="rounded-full bg-[#8670A0] px-3 py-1 text-xs font-medium text-[#FFF8F0]">
                    Hari ini
                  </span>
                )}
              </div>

              <ul className="space-y-3">
                {schedule.map((it) => (
                  <li key={it.time + it.title} className="rounded-2xl bg-white/80 px-4 py-3">
                    <div className="text-sm font-semibold text-[#8670A0]">{it.time}</div>
                    <div className="font-medium text-gray-700">{it.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}