import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdStarBorder, MdKeyboardArrowDown, MdArrowDownward } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dashboardsData = [
  { id: 1, name: "test1", time: "year ago" },
  { id: 2, name: "test2", time: "year ago" },
  { id: 3, name: "test3", time: "year ago" },
  { id: 4, name: "test4", time: "year ago" },
  { id: 5, name: "test5", time: "year ago" },
  { id: 6, name: "test6", time: "year ago" },
];

export default function DashboardsSection() {
  const [sortType, setSortType] = useState("Last viewed");
  const [devices, setDevices] = useState("Devices");

  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-3 flex-1 min-h-[140px]">
      
      <div className="md:col-span-5 bg-white rounded-lg border p-4 shadow-sm h-full flex flex-col">
        
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
              Dashboards <GoArrowUpRight className="text-gray-400 text-[18px]"/>
          </span>
          <div className="flex gap-2">
             
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <button
                   type="button"
                   className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 cursor-pointer select-none outline-none">
                      {sortType} <MdKeyboardArrowDown />
                   </button>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent align="end" className="w-[120px]">
                   <DropdownMenuItem onClick={() => setSortType("Last viewed")}>
                      Last viewed
                   </DropdownMenuItem>
                   <DropdownMenuItem onClick={() => setSortType("Starred")}>
                      Starred
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>

             <button className="px-3 py-1.5 text-xs font-medium bg-[#102e52] text-white rounded hover:bg-[#0a1e36] transition-colors shadow-sm">
                Add dashboard
             </button>
          </div>
        </div>

        <div className="flex justify-between items-center px-2 py-1 mb-2 text-xs text-gray-400 font-medium">
            <span className="pl-8">Name</span>

                <button
                  type="button"
                  className="flex items-center gap-1 cursor-pointer hover:text-gray-600 select-none outline-none">
                  Last viewed <MdArrowDownward />
                </button>
        </div>

        <div className="overflow-y-auto pr-1 space-y-1 max-h-[120px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-300"> 
            {dashboardsData.map((item) => (
            <div key={item.id} className="group flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors">
               
               <div className="flex items-center gap-3">
                  <MdStarBorder className="text-gray-300 text-lg group-hover:text-yellow-500 transition-colors" />
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
               </div>

               <span className="text-xs text-gray-400">{item.time}</span>
            </div>
            ))}
        </div>

      </div>

      <div className="md:col-span-5 bg-white rounded-lg border p-4 shadow-sm h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-gray-600">Activity</span>
            
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 cursor-pointer select-none outline-none">
                     {devices} <MdKeyboardArrowDown />
                  </button>
               </DropdownMenuTrigger>
               
               <DropdownMenuContent align="end" className="w-[120px]">
                  <DropdownMenuItem onClick={() => setDevices("Devices")}>
                     Devices
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDevices("Devices2")}>
                     Devices2
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>

          </div>

          <div className="flex-1 w-full flex flex-col justify-end pb-2">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400 font-medium">History - last 30 days</span>
            </div>
            <div className="relative h-32 w-full border-l border-b border-gray-200">
                <span className="absolute -left-4 top-0 text-[10px] text-gray-400">1</span>
                <span className="absolute -left-4 bottom-0 text-[10px] text-gray-400">0</span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#102e52]"></div>
                <div className="absolute -bottom-5 w-full flex justify-between text-[10px] text-gray-400 px-2">
                    <span>Dec</span>
                    <span>Dec 05</span>
                    <span>Dec 09</span>
                    <span>Dec 13</span>
                    <span>Dec 17</span>
                    <span>Dec 21</span>
                </div>
            </div>
          </div>
      </div>

    </div>
  )
}