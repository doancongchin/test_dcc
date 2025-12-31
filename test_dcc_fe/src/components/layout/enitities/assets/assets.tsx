import { useState } from 'react';
import Table from '../common/entitiesTable';
import DevicesPagination from '../common/pagination';
import EntitiesHeader from '../common/entitiesHeader';



const dataAssets = [
  { id: 1, createdTime: "2024-09-25 15:21:29", name: "okm2n", profile: "defaultok", label: "rfdv", customer: "Public", public: false },
  { id: 2, createdTime: "2024-09-25 13:46:36", name: "weather", profile: "defaultok", label: "eegegr", customer: "Public", public: false },
  { id: 3, createdTime: "2024-09-25 13:33:13", name: "deviceok", profile: "defaultok", label: "", customer: "Public", public: false },
  { id: 4, createdTime: "2024-02-27 08:54:06", name: "rpc", profile: "default", label: "", customer: "Public", public: false },
];

export default function Assets() {
  const [assets, setAssets] = useState(dataAssets);

  const handleTogglePublic = (id: number) => {
    setAssets(prev => prev.map(d => 
      d.id === id ? { ...d, public: !d.public } : d
    ));
  };

  return (
    <div className="h-full w-full p-2">
      <div className="bg-white rounded shadow-sm border border-gray-200 flex flex-col h-full">
        
        <EntitiesHeader title="Assets" titlefilter="Asset Profile" />
        <div className="flex-1 overflow-hidden flex flex-col">
            <Table 
                data={assets} 
                onTogglePublic={handleTogglePublic}
            />
        </div>
        <DevicesPagination />
      </div>
    </div>
  );
}