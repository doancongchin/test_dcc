

export default function Left_Content() {
  return (
   <div className="lg:col-span-3 flex flex-col gap-3 h-full">
          
          <div className="bg-white rounded-lg border p-5 shadow-sm flex-1 flex flex-col overflow-y-auto">
            <h3 className="font-semibold text-base mb-4">Get started</h3>
            <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-center">
                    <span className="bg-[#102e52] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span> 
                    <span>Create device</span>
                </li>
                <li className="flex gap-3 items-center">
                    <span className="bg-[#102e52] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span> 
                    <span>Connect device</span>
                </li>
                <li className="flex gap-3 items-center">
                    <span className="bg-[#102e52] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span> 
                    <span>Create dashboard</span>
                </li>
                 <li className="flex gap-3 items-center">
                    <span className="bg-[#102e52] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span> 
                    <span>Configure alarm rules</span>
                </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border p-3 shadow-sm h-[140px] flex items-center justify-center">
             <span className="text-sm text-gray-400">Mobile App QR Code</span>
          </div>

        </div>
  )
}
