import { MdEdit } from "react-icons/md";

const LinkPill = ({ label }: { label: string }) => (
  <div className="border border-gray-200 rounded-full px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer text-center truncate">
    {label}
  </div>
);
const AddPill = () => (
  <div className="border border-dashed border-gray-300 rounded-full px-2 py-1 text-xs text-gray-400 hover:bg-gray-50 cursor-pointer flex justify-center items-center">
    +
  </div>
);

type LinkCardProps = {
  title: string;
  items: string[];
};

export default function LinkCard({ title, items }: LinkCardProps) {
  const displayItems = items.slice(0, 5);

  return (
    <div className="bg-white rounded-lg border p-3 shadow-sm h-[140px] flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
          {title}
        </span>
        <MdEdit className="text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 overflow-hidden">
        {displayItems.map((label, index) => (
          <LinkPill key={index} label={label} />
        ))}
        <AddPill />
      </div>
    </div>
  );
}