import { MdAdd, MdRefresh, MdSearch, MdFilterList } from 'react-icons/md';

export default function DevicesHeader() {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-normal text-gray-800 tracking-tight">Devices</h1>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase font-medium">
          <MdFilterList className="text-lg" /> Device Filter
        </button>
      </div>

      <div className="flex items-center gap-1 text-gray-600">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Add Device">
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