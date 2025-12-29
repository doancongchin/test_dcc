import { AppSidebar } from "@/components/layout/sidebar/app-sidebar"
import { SiteHeader } from "@/components/layout/header/site-header"
import Main_Content from "@/components/layout/content/main_Content/main_Content"
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
                <Main_Content />
             </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}