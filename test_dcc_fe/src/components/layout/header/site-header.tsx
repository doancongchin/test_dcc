import { SidebarIcon } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import logo from '../../../assets/logo.svg';
import { AiFillHome, AiTwotoneBell } from "react-icons/ai";
import { BiFullscreen } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="flex w-full items-center justify-between border-b px-4 h-[60px] bg-[#102e52] text-white">
      
      <div className="flex items-center gap-2">
        <Button
          className="h-8 w-8 text-white hover:bg-white/10"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>

        <div className="h-6 w-[1px] bg-white/20 mx-2"></div>

        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList className="text-white sm:gap-2">
            
            <BreadcrumbItem className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-6 w-auto brightness-0 invert" /> 
              <span className="font-semibold text-lg text-white">ThingsBoard</span>
            </BreadcrumbItem>

            <BreadcrumbItem className="ml-15">
              <Link to="/page" className="flex items-center gap-1 text-white/80 hover:text-white cursor-pointer">
                  <AiFillHome size={24} />
                  <span className="text-sm font-medium">Home</span>
              </Link>
            </BreadcrumbItem>

          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-4">
        
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <BiFullscreen size={24} />
        </button>

        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <AiTwotoneBell size={24} />
        </button>

        <div className="flex items-center gap-3 pl-2 border-l border-white/10">
          
          <FaUserCircle size={32} />

          <div className="hidden md:flex flex-col items-start leading-tight">
             <span className="font-bold text-sm">Đoàn Công Chín</span>
             <span className="text-xs text-gray-300">Tenant administrator</span>
          </div>

          <button className="p-1 hover:bg-white/10 rounded-full">
            <MdMoreVert size={20} />
          </button>
        </div>

      </div>
    </header>
  )
}