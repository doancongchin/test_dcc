import { GoArrowUpRight } from "react-icons/go";
import { MdWarning } from "react-icons/md";
import type { StatsItemProps } from "../../../../../../type/stats";


export default function StatsItem({ 
  label, 
  value, 
  className, 
  hasWarning = false 
}: StatsItemProps) {
  return (
    <div className={`${className} border rounded-lg p-2 flex flex-col justify-between h-[55px]`}>
      <div className="flex justify-between items-start">
        <span className="text-[11px] font-medium text-gray-500 truncate" title={label}>
          {label}
        </span>
        <GoArrowUpRight className="text-gray-300 text-[18px] flex-shrink-0" />
      </div>

      <div className="flex items-center gap-1">
        <span className="text-15 font-bold text-gray-800">{value}</span>
        {hasWarning && <MdWarning className="text-red-500 text-sm mb-0.5" />}
      </div>
    </div>
  );
}