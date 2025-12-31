import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from 'react-icons/md';

export default function DevicesPagination() {
  return (
    <div className="p-2 border-t border-gray-200 flex justify-end items-center gap-6 text-xs text-gray-500 bg-white rounded-b">
      <div className="flex items-center gap-2">
        <span>Items per page:</span>
        <select className="border border-gray-300 rounded p-1 bg-white focus:outline-none focus:border-blue-500">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>

      <span>1 - 10 of 28</span>

      <div className="flex items-center gap-1">
        <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"><MdFirstPage size={20} /></button>
        <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"><MdChevronLeft size={20} /></button>
        <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"><MdChevronRight size={20} /></button>
        <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"><MdLastPage size={20} /></button>
      </div>
    </div>
  );
}