import DemoUseCasesSection from "./demoUseCasesSection/demoUseCasesSection";
import SystemStatsSection from "./systemStatsSection/systemStatsSection";
import DashboadsSection from "./dashboardsSection/dashboadsSection";
import ResourcesSection from "./resourcesSection/resourcesSection";

export default function Right_Content() {
  return (
        <div className="lg:col-span-7 flex flex-col gap-3 h-full">
          
            <DemoUseCasesSection/>
            <SystemStatsSection/>
            <DashboadsSection/>
            <ResourcesSection/>

        </div>
  )
}
