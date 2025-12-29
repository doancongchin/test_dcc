import { GoArrowUpRight } from "react-icons/go";
import StatsItem from "../statsItem/statsItem";
import { Button } from "@/components/ui/button"; 

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      
      <div className="bg-white rounded-lg border p-4 shadow-sm flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
            Devices <GoArrowUpRight className="text-gray-400 text-[18px]" />
          </span>
          <div className="flex gap-2">
            <Button variant="outline" className="h-7 px-3 text-xs font-medium border-gray-300 text-gray-700 hover:bg-gray-50">
               View docs
            </Button>
            <Button className="h-7 px-3 text-xs font-medium bg-[#102e52] text-white hover:bg-[#0a1e36]">
               Add device
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <StatsItem 
            label="Inactive" 
            value={28} 
            className="bg-red-50/50 border-red-100" 
          />
          <StatsItem 
            label="Active" 
            value={0} 
            className="bg-blue-50/50 border-blue-100" 
          />
          <StatsItem 
            label="Total" 
            value={28} 
            className="bg-gray-50/50 border-gray-100" 
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 shadow-sm flex flex-col gap-4">
        <div className="flex justify-between items-start h-[30px]">
          <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
            Alarms <GoArrowUpRight className="text-gray-400 text-[18px]" />
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <StatsItem 
            label="Critical" 
            value={0} 
            className="bg-red-50/50 border-red-100"
            hasWarning={true}
          />
          <StatsItem 
            label="Assigned to me" 
            value={0} 
            className="bg-blue-50/50 border-blue-100" 
          />
          <StatsItem 
            label="Total" 
            value={0} 
            className="bg-gray-50/50 border-gray-100" 
          />
        </div>
      </div>

    </div>
  );
}