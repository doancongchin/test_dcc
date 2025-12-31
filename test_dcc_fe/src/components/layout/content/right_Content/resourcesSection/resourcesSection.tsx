import { GoArrowUpRight } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import LinkCard from "./linkCard/linkCard";

const UsageRow = ({ label, current, total, percent }: { label: string, current: number, total: number | string, percent: number }) => (
  <div className="flex items-center justify-between text-xs">
    <span className="text-gray-500 font-medium w-24">{label}</span>
    <div className="flex items-center gap-3 flex-1 justify-end">
        <span className="text-gray-600 font-medium min-w-[60px] text-right">
            {current} / {total}
        </span>
        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#102e52] rounded-full" style={{ width: `${percent}%` }}></div>
        </div>
    </div>
  </div>
);

export default function ResourcesSection() {
  
  const quickLinkItems = ["Alarms", "Dashboards", "Devices"];
  const docItems = ["Getting started", "Rule engine", "API", "Device profiles"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      
      <LinkCard 
        title="Quick links" 
        items={quickLinkItems} 
        
      />
      <LinkCard 
        title="Documentation" 
        items={docItems} 
      />
      <div className="bg-white rounded-lg border p-2.5 shadow-sm h-[140px] flex flex-col"> 

          <div className="flex justify-between items-center mb-1"> 
              <span className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                  Usage <GoArrowUpRight className="text-gray-300" />
              </span>
              <button className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600">
                  Entities <MdKeyboardArrowDown className="text-sm"/>
              </button>
          </div>
          <div className="flex-1 flex flex-col justify-between pr-1">
              <UsageRow label="Devices" current={28} total={100} percent={28} />
              <UsageRow label="Assets" current={4} total={100} percent={4} />
              <UsageRow label="Users" current={6} total={100} percent={6} />
              <UsageRow label="Dashboards" current={23} total={100} percent={23} />
              <UsageRow label="Customers" current={6} total={"∞"} percent={0} />
          </div>
      </div>

    </div>
  )
}