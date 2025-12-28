import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { AiFillHome } from "react-icons/ai";
import { MdWarningAmber,
         MdDashboard,
         MdCategory,
         MdBadge,
         MdPeople,
         MdSettingsInputAntenna,
         MdBuild,
         MdFolder,
         MdSmartphone 

      } from "react-icons/md";
import { GoArrowBoth } from "react-icons/go";
import { BiSolidNotification } from "react-icons/bi";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <AiFillHome size={50}/>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Home</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdWarningAmber className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Alarms</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdDashboard className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Dashboards</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdCategory  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Entities</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdBadge  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Profiles</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdPeople  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Customers</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <GoArrowBoth className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Rule chains</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdSettingsInputAntenna  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Edge management</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdBuild  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Advanced features</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdFolder  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Resources</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <BiSolidNotification className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Notification center</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <MdSmartphone  className="size-4" />

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Mobile center</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
      </SidebarContent>
    </Sidebar>
  )
}
