import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from "@/app/dashboard/page"
import Devices from "@/components/layout/enitities/devices/devices"
import Assets from "@/components/layout/enitities/assets/assets"
import Main_Content from "@/components/layout/content/main_Content/main_Content" 

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Main_Content />} />
            <Route path="page" element={<Main_Content />} />
            <Route path="devices" element={<Devices />} />
            <Route path="assets" element={<Assets />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}