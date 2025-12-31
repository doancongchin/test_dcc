import demousecase1 from '../../../../../../assets/demousecase1.png';
import demousecase2 from '../../../../../../assets/demousecase2.png';
import demousecase3 from '../../../../../../assets/demousecase3.png';
import demousecase4 from '../../../../../../assets/demousecase4.png';
import demousecase5 from '../../../../../../assets/demousecase5.png';
import { GoArrowUpRight } from "react-icons/go";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

const demoItems = [
  { id: 1, title: "Environmental monitoring", img: demousecase1 },
  { id: 2, title: "Air quality", img: demousecase2 },
  { id: 3, title: "EV charging stations", img: demousecase3 },
  { id: 4, title: "Swimming pool SCADA", img: demousecase4 },
  { id: 5, title: "Device claiming", img: demousecase5 },
];

export default function UseCaseCard() {
  return (
    <div className="bg-white rounded-xl border p-2 shadow-sm flex flex-col justify-center h-auto">
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-xs text-gray-700 uppercase tracking-wide flex">
          Demo use cases
          <GoArrowUpRight className="pl-1" size={20}/>
        </h3>
        <div className="flex gap-1 text-gray-300 text-xs select-none">
           <span className="cursor-pointer hover:text-gray-600 text-xl font-bold">&lt;</span>
           <span className="cursor-pointer hover:text-gray-600 text-xl font-bold">&gt;</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
        
        {demoItems.map((item) => (
          
          <HoverCard key={item.id} openDelay={100} closeDelay={0}>
            
            <HoverCardTrigger asChild>
              <div className="group w-full h-[90px] bg-white rounded border shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer overflow-hidden flex flex-col">
                <div className="h-[70%] w-full bg-gray-50 overflow-hidden relative border-b border-gray-100">
                   <img
                     src={item.img}
                     alt={item.title}
                     className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="h-[30%] px-2 flex items-center bg-white">
                  <span className="text-center text-[10px] sm:text-[11px] font-medium text-gray-600 truncate w-full">
                    {item.title}
                  </span>
                </div>
              </div>
            </HoverCardTrigger>

            <HoverCardContent 
              className="w-auto p-2 bg-white border-gray-200 shadow-2xl z-[9999]" 
              side="bottom"    
              align="center"  
              sideOffset={5}   
            >
              <HoverCardPrimitive.Arrow className="fill-white" width={16} height={8} />
              <img 
                src={item.img} 
                alt="Preview" 
                className="w-[500px] max-w-[90vw] h-auto object-contain rounded border border-gray-100 shadow-inner" 
              />
            </HoverCardContent>
            
          </HoverCard>
        ))}
      </div>
    </div>
  )
}