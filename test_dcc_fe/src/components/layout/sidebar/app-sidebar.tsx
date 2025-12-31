import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

import { AiFillHome } from "react-icons/ai";
import { 
  MdWarningAmber, MdDashboard, MdCategory, MdBadge, MdPeople, 
  MdSettingsInputAntenna, MdBuild, MdFolder, MdSmartphone,
  MdInsertChartOutlined, MdWebAsset, MdViewQuilt, MdDeviceHub, 
  MdChevronRight
} from "react-icons/md";
import { GoArrowBoth } from "react-icons/go";
import { BiSolidNotification } from "react-icons/bi";
import { TbDeviceSim1, TbDeviceSim2  } from "react-icons/tb";
import type {MenuItem} from "../../../type/sidebar"
import { Link } from "react-router-dom";


const navItems: MenuItem[] = [
  {
    title: "Home",
    url: "/page",
    icon: AiFillHome,
  },
  {
    title: "Alarms",
    url: "#",
    icon: MdWarningAmber,
  },
  {
    title: "Dashboards",
    url: "#",
    icon: MdDashboard,
  },
  {
    title: "Entities",
    url: "#",
    icon: MdCategory,
    isActive: false, 
    items: [
      { title: "Devices", url: "/devices", icon: MdInsertChartOutlined },
      { title: "Assets", url: "/assets", icon: MdWebAsset },
      { title: "Entity views", url: "#", icon: MdViewQuilt },
      { title: "Gateways", url: "#", icon: MdDeviceHub },
    ],
  },
  {
    title: "Profiles",
    url: "#",
    icon: MdBadge,
    isActive: false, 
    items: [
      { title: "Devices profiles", url: "#", icon: TbDeviceSim1  },
      { title: "Assets profiles", url: "#", icon: TbDeviceSim2  },
    ],
  },
  {
    title: "Customers",
    url: "#",
    icon: MdPeople,
  },
  {
    title: "Rule chains",
    url: "#",
    icon: GoArrowBoth,
  },
  {
    title: "Edge management",
    url: "#",
    icon: MdSettingsInputAntenna,
  },
  {
    title: "Advanced features",
    url: "#",
    icon: MdBuild,
  },
  {
    title: "Resources",
    url: "#",
    icon: MdFolder,
  },
  {
    title: "Notification center",
    url: "#",
    icon: BiSolidNotification,
  },
  {
    title: "Mobile center",
    url: "#",
    icon: MdSmartphone,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="mt-[60px] h-[calc(100svh-60px)] border-r-0 bg-[#102e52] text-black" 
  {...props}
    >
      <SidebarContent> 
        <SidebarMenu>
          {navItems.map((item) => (
            <React.Fragment key={item.title}>
              {item.items ? (
                <Collapsible 
                  key={item.title} 
                  asChild 
                  defaultOpen={item.isActive} 
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton size="lg" tooltip={item.title}>
                        <item.icon className="size-4" />
                        <span className="flex-1 truncate text-sm font-medium">{item.title}</span>
                        <MdChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild size="md">
                              <Link to={subItem.url} className="flex items-center gap-2">
                                {subItem.icon && <subItem.icon className="size-4" />}
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton size="lg" asChild>
                    <Link to={item.url}>
                      <item.icon className="size-4" />
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate text-xs">{item.title}</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </React.Fragment>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}