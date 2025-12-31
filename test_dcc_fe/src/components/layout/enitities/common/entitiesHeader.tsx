import { MdAdd, MdRefresh, MdSearch, MdFilterList, MdClose } from 'react-icons/md';

type DevicesHeaderProps = {
  title: string; 
  titlefilter: string;
};

export default function EntitiesHeader({ title, titlefilter }: DevicesHeaderProps) {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-normal text-gray-800 tracking-tight">{title}</h1>
        
        {title === "Devices" ? (
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase font-medium">
            <MdFilterList className="text-lg" /> {titlefilter}
          </button>
        ) : (
          <div className="flex flex-col items-start cursor-pointer group select-none">
              <span className="text-[10px] text-gray-400 font-medium leading-none mb-1">
                {titlefilter}
              </span>
              <div className="flex items-center justify-between min-w-[150px] gap-2 border-b border-gray-400 group-hover:border-black transition-colors pb-0.5">
                  <span className="text-sm font-medium text-gray-700 truncate">All</span>
                  <MdClose className="text-gray-400 hover:text-gray-700 text-lg flex-shrink-0" />
              </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 text-gray-600">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title={`Add ${title}`}>
          <MdAdd size={24} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Refresh">
          <MdRefresh size={24} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Search">
          <MdSearch size={24} />
        </button>
      </div>
    </div>
  );
}