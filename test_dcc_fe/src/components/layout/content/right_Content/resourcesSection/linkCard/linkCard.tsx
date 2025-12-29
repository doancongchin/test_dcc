import { MdEdit } from "react-icons/md";

const LinkPill = ({ label }: { label: string }) => (
  <div className="border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer text-center truncate">
    {label}
  </div>
);

const AddPill = () => (
  <div className="border border-dashed border-gray-300 rounded-full px-3 py-1.5 text-xs text-gray-400 hover:bg-gray-50 cursor-pointer flex justify-center items-center">
    +
  </div>
);

type LinkCardProps = {
  title: string;
  items: string[];
};

export default function LinkCard({ title, items, }: LinkCardProps) {
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm h-[140px] flex flex-col">
      <div className="flex justify-between items-start mb-3">
         <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
           {title}
         </span>
         <MdEdit className="text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
      
      <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full content-start">
          {items.map((label, index) => (
             <LinkPill key={index} label={label} />
          ))}
            <AddPill />
      </div>
    </div>
  );
};