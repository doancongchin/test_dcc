import { useState, useRef } from "react";

const chartData = [
  { date: "Dec 01", fullDate: "Dec 01 2025 10:00", value: 5, percent: 0 },
  { date: "Dec 05", fullDate: "Dec 05 2025 12:30", value: 12, percent: 20 },
  { date: "Dec 09", fullDate: "Dec 09 2025 08:00", value: 8, percent: 40 },
  { date: "Dec 13", fullDate: "Dec 13 2025 15:45", value: 15, percent: 60 },
  { date: "Dec 16", fullDate: "Dec 16 2025 20:00", value: 0, percent: 71 },
  { date: "Dec 17", fullDate: "Dec 17 2025 09:00", value: 3, percent: 80 },
  { date: "Dec 21", fullDate: "Dec 21 2025 23:00", value: 7, percent: 100 },
];

export default function ActivityChart({ label }: { label: string }) {
  const [activePoint, setActivePoint] = useState<typeof chartData[0] | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    
    const closest = chartData.reduce((prev, curr) => 
      Math.abs(curr.percent - percent) < Math.abs(prev.percent - percent) ? curr : prev
    );
    setActivePoint(closest);
  };

  return (
    <div 
      ref={chartRef}
      className="relative h-32 w-full border-l border-b border-gray-200 group mt-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActivePoint(null)}
    >
      <span className="absolute -left-4 top-0 text-[10px] text-gray-400">1</span>
      <span className="absolute -left-4 bottom-0 text-[10px] text-gray-400">0</span>
      <div className="absolute bottom-0 w-full h-[2px] bg-[#102e52]" />

      <div className="absolute -bottom-5 w-full h-4 pointer-events-none">
        {chartData.map((p, i) => (
          <span key={i} className={`absolute text-[10px] text-gray-400 whitespace-nowrap ${p.percent === 0 ? '' : p.percent === 100 ? '-translate-x-full' : '-translate-x-1/2'}`} style={{ left: `${p.percent}%` }}>
            {p.date}
          </span>
        ))}
      </div>
      {activePoint && (
        <>
          <div className="absolute bottom-[-4px] w-3 h-3 bg-[#102e52] rounded-full border-2 border-white shadow-sm z-10 transition-all duration-75" style={{ left: `calc(${activePoint.percent}% - 5px)` }} />
          
          <div className={`absolute bottom-10 bg-white p-2 rounded shadow-lg border border-gray-100 text-xs z-20 w-32 pointer-events-none transition-all duration-75 ${activePoint.percent > 60 ? 'right-2' : ''}`}
               style={activePoint.percent <= 60 ? { left: `calc(${activePoint.percent}% - 60px)` } : {}}>
            <div className="text-gray-500 mb-1 font-medium">{activePoint.fullDate}</div>
            <div className="flex justify-between font-semibold text-gray-700">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#102e52]" />{label}</div>
              <span>{activePoint.value}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}