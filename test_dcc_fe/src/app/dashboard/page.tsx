import { Outlet } from "react-router-dom" 
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar"
import { SiteHeader } from "@/components/layout/header/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export const iframeHeight = "800px"
export const description = "A sidebar with a header and a search form."

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))] h-screen w-full overflow-hidden bg-gray-50">
      <SidebarProvider className="flex flex-col h-full"> 
        <SiteHeader />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <SidebarInset className="flex-1 overflow-y-auto">
             <div className="p-1">
                <Outlet /> 
             </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}