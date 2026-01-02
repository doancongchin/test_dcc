import { IoCopyOutline } from "react-icons/io5"; 
import qr from '../../../../assets/qr.jpg';
import ggplay from '../../../../assets/ggplay.webp';
import appstore from '../../../../assets/appstore.png';

export default function Left_Content() {
  
  const steps = [
    { id: 1, title: "Create device", active: false },
    { id: 2, title: "Connect device", active: false },
    { id: 3, title: "Create dashboard", active: false },
    { id: 4, title: "Configure alarm rules", active: false },
    { 
      id: 5, 
      title: "Create alarm", 
      active: true, 
      content: (
        <div className="space-y-3">
          <p className="text-gray-600 leading-snug">
            To trigger the alarm, send a new telemetry value of 26°C or higher.
          </p>
          <p className="text-gray-500">
            Replace $ACCESS_TOKEN with your device's token:
          </p>
          
          <div className="bg-gray-100 p-3 rounded border border-gray-200 relative group">
             <code className="text-gray-600 font-mono text-xs break-all block pr-6">
               curl -v -X POST -d "&#123;\"temperature\": 26&#125;" https://demo.thingsboard.io/api/v1/$ACCESS_TOKEN/telemetry --header "Content-Type:application/json sjnvsbsbjvbdjvbbjsbjsbdvjdbvjdbjdsbjsdbvjdbfjvbdjbjfd"
             </code>
             <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors">
                <IoCopyOutline size={16} />
             </button>
             
          </div>
        </div>
      )
    },
    
  ];

  return (
    <div className="lg:col-span-3 flex flex-col gap-3 h-full">
      
      <div className="bg-white rounded-lg border p-5 shadow-sm flex-1 flex flex-col overflow-y-auto max-h-[541px]
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-gray-200
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-gray-300
          ">
        <h3 className="font-semibold text-base mb-4 text-gray-700">Get started</h3>
        
        <div className="space-y-0 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative pl-0 pb-0">
               <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                      <span className="bg-[#102e52] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10">
                        {step.id}
                      </span>
                      {index !== steps.length - 1 && (
                        <div className="w-[2px] bg-gray-200 flex-1 my-1 min-h-[16px]"></div>
                      )}
                  </div>
                  <div className={`flex-1 ${index !== steps.length - 1 ? 'pb-4' : 'pb-0'}`}>
                      <h4 className="text-sm font-medium text-gray-800 mt-[2px]">{step.title}</h4>
                      {step.active && step.content && (
                        <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm border border-gray-100">
                          {step.content}
                        </div>
                      )}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border p-3 shadow-sm flex flex-col justify-center items-center h-[140px]">
         <h4 className="font-semibold text-sm text-gray-700">Connect mobile app</h4>
         <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded border border-gray-100 p-1 flex-shrink-0">
                <img src={qr} alt="QR Code" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-2 w-full justify-center">
               <button className="w-32 hover:opacity-80 transition-opacity">
                  <img 
                    src={appstore} 
                    alt="Download on App Store" 
                    className="w-full h-auto object-contain rounded" 
                  />
               </button>
               <button className="w-32 hover:opacity-80 transition-opacity">
                  <img 
                    src={ggplay} 
                    alt="Get it on Google Play" 
                    className="w-full h-auto object-contain rounded" 
                  />
               </button>
            </div>
         </div>
      </div>

    </div>
  )
}