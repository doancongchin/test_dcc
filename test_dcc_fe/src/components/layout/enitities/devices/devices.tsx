import { useState } from 'react';
import DevicesPagination from '../common/pagination';
import EntitiesTable from '../common/entitiesTable';
import EntitiesHeader from '../common/entitiesHeader';

const dataDevices = [
  { id: 1, createdTime: "2024-09-25 15:21:29", name: "okm2n", profile: "defaultok", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 2, createdTime: "2024-09-25 13:46:36", name: "weather", profile: "defaultok", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 3, createdTime: "2024-09-25 13:33:13", name: "deviceok", profile: "defaultok", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 4, createdTime: "2024-02-27 08:54:06", name: "rpc", profile: "default", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 5, createdTime: "2024-02-26 15:37:05", name: "test3", profile: "default", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 6, createdTime: "2024-02-26 08:13:34", name: "mnet2", profile: "default", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 7, createdTime: "2024-02-26 07:51:11", name: "mnet", profile: "default", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
  { id: 8, createdTime: "2024-02-23 14:59:38", name: "thermo", profile: "default", label: "", state: "Inactive", customer: "", public: false, gateway: false },
  { id: 9, createdTime: "2024-02-23 14:15:38", name: "sensor1", profile: "default", label: "", state: "Inactive", customer: "", public: false, gateway: false },
  { id: 10, createdTime: "2024-02-23 10:11:15", name: "gateway1", profile: "default", label: "", state: "Inactive", customer: "Public", public: false, gateway: false },
];

export default function Devices() {
  const [devices, setDevices] = useState(dataDevices);

  const handleTogglePublic = (id: number) => {
    setDevices(prev => prev.map(d => 
      d.id === id ? { ...d, public: !d.public } : d
    ));
  };

  const handleToggleGateway = (id: number) => {
    setDevices(prev => prev.map(d => 
      d.id === id ? { ...d, gateway: !d.gateway } : d
    ));
  };

  return (
    <div className="h-full w-full p-2">
      <div className="bg-white rounded shadow-sm border border-gray-200 flex flex-col h-full">
        
        <EntitiesHeader title="Devices" titlefilter="Devices Filter"/>
        <div className="flex-1 overflow-hidden flex flex-col">
            <EntitiesTable 
                data={devices} 
                onTogglePublic={handleTogglePublic}
                onToggleGateway={handleToggleGateway}
            />
        </div>
        <DevicesPagination />
      </div>
    </div>
  );
}