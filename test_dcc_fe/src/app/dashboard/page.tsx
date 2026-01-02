import { Outlet } from "react-router-dom" 
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar"
import { SiteHeader } from "@/components/layout/header/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))] h-screen w-full overflow-hidden bg-gray-50">
      <SidebarProvider className="flex flex-col h-full"> 
        <SiteHeader />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          
          <SidebarInset className="flex-1 flex flex-col h-full overflow-hidden">
             <div className="flex-1 w-full h-full overflow-hidden p-1">
                <Outlet /> 
             </div>

          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}