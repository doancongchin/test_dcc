import { 
  MdArrowDownward, 
  MdShare, MdPerson, MdOutput, MdReply, MdSecurity, MdDelete 
} from 'react-icons/md';

export type Entity = {
  id: number;
  createdTime: string;
  name: string;
  profile: string;
  label: string;
  customer: string;
  public: boolean;
  state?: string; 
  gateway?: boolean; 
};

type EntitiesTableProps = {
  data: Entity[];
  onTogglePublic: (id: number) => void;
  onToggleGateway?: (id: number) => void; 
};

export default function EntitiesTable({ data, onTogglePublic, onToggleGateway }: EntitiesTableProps) {
  
  const isDevice = !!onToggleGateway;

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse min-w-[1000px]">
        <thead className="sticky top-0 bg-white z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
          <tr className="text-xs font-semibold text-gray-500">
            <th className="p-4 w-12 text-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
            </th>
            <th className="p-4 cursor-pointer hover:text-gray-700 group">
              <div className="flex items-center gap-1">
                Created time <MdArrowDownward className="opacity-0 group-hover:opacity-100 transition-opacity text-base" />
              </div>
            </th>
            <th className="p-4">Name</th>
            <th className="p-4">Device profile</th>
            <th className="p-4">Label</th>
            {isDevice && <th className="p-4">State</th>}
            
            <th className="p-4">Customer</th>
            <th className="p-4 text-center">Public</th>
            {isDevice && <th className="p-4 text-center">Is gateway</th>}
            
            <th className="p-4 w-[180px]"></th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
              <td className="p-4 text-center">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              </td>
              
              <td className="p-4 text-gray-500 whitespace-nowrap">{item.createdTime}</td>
              <td className="p-4 ">{item.name}</td>
              <td className="p-4">{item.profile}</td>
              <td className="p-4">{item.label}</td>
            
              {isDevice && (
                <td className="p-4">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                    item.state === 'Inactive'
                      ? 'bg-red-50 text-red-600 border-red-100'
                      : 'bg-green-50 text-green-600 border-green-100'
                  }`}>
                    {item.state}
                  </span>
                </td>
              )}

              <td className="p-4">{item.customer}</td>
              
              <td className="p-4 text-center">
                 <input 
                    type="checkbox" 
                    checked={item.public}
                    onChange={() => onTogglePublic(item.id)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                 />
              </td>

              {isDevice && onToggleGateway && (
                <td className="p-4 text-center">
                   <input 
                      type="checkbox" 
                      checked={item.gateway}
                      onChange={() => onToggleGateway(item.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                   />
                </td>
              )}
              
              <td className="p-4">
                <div className="flex items-center justify-end gap-1">
                  <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500" title="Share"><MdShare size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500" title="Assign"><MdPerson size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500" title="Export"><MdOutput size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500" title="Reply"><MdReply size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500" title="Credentials"><MdSecurity size={18} /></button>
                  <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500 hover:text-red-500" title="Delete"><MdDelete size={18} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}