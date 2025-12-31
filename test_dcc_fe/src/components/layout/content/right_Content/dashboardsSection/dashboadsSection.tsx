import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdStarBorder, MdKeyboardArrowDown, MdArrowDownward } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 
import  ActivityChart  from "./activityChart/activityChart";

const dashboardsData = [
  { id: 1, name: "test1", time: "year ago" },
  { id: 2, name: "test2", time: "year ago" },
  { id: 3, name: "test3", time: "year ago" },
  { id: 4, name: "test4", time: "year ago" },
  { id: 5, name: "test5", time: "year ago" },
  { id: 6, name: "test6", time: "year ago" },
];

export default function DashboardsSection() {
  const [deviceFilter, setDeviceFilter] = useState("Devices");
  const [sortType, setSortType] = useState("Last viewed");

  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-3 flex-1 min-h-[140px]">
      <div className="md:col-span-5 bg-white rounded-lg border p-4 shadow-sm flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
                Dashboards <GoArrowUpRight className="text-gray-400 text-[18px]"/>
            </span>
            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button type="button" className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 text-gray-600 cursor-pointer outline-none">
                            {sortType} <MdKeyboardArrowDown />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[120px]">
                        <DropdownMenuItem onClick={() => setSortType("Last viewed")}>Last viewed</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortType("Starred")}>Starred</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <button className="px-3 py-1.5 text-xs font-medium bg-[#102e52] text-white rounded shadow-sm hover:bg-[#0a1e36] transition-colors">
                    Add dashboard
                </button>
            </div>
        </div>
        <div className="flex justify-between px-2 py-1 mb-2 text-xs text-gray-400 font-medium">
          <span className="pl-8">Name</span>
          <button className="flex items-center gap-1 cursor-pointer hover:text-gray-600 outline-none">
             Last viewed <MdArrowDownward />
          </button>
        </div>
        <div className="overflow-y-auto space-y-1 max-h-[120px] pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-300">
          {dashboardsData.map((item) => (
            <div key={item.id} className="group flex justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <MdStarBorder className="text-gray-300 text-lg group-hover:text-yellow-500 transition-colors" />
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-span-5 bg-white rounded-lg border p-4 shadow-sm flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
           <span className="text-sm font-semibold text-gray-600">Activity</span>     
           <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <button type="button" className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 cursor-pointer outline-none">
                     {deviceFilter} <MdKeyboardArrowDown />
                  </button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end" className="w-[150px]">
                  <DropdownMenuItem onClick={() => setDeviceFilter("Devices")}>
                    Devices
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setDeviceFilter("Transport Messages")}>
                    Transport Messages
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="flex items-center gap-1 mb-2 text-xs text-gray-400 font-medium">
           <IoMdTime size={16}/> History - last 30 days
        </div>
        <ActivityChart label={deviceFilter} />
      </div>
    </div>
  );
}