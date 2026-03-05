import { LayoutDashboard, List, PlusCircle, Layers } from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ page, setPage }) {

  return (
    <aside className="w-64 bg-slate-900 text-white p-6 space-y-4">

      <h2 className="text-2xl font-bold">Campus L&F</h2>

      <SidebarItem
        icon={<LayoutDashboard />}
        label="Dashboard"
        active={page==="dashboard"}
        onClick={()=>setPage("dashboard")}
      />

      <SidebarItem
        icon={<List />}
        label="Items"
        active={page==="items"}
        onClick={()=>setPage("items")}
      />

      <SidebarItem
        icon={<PlusCircle />}
        label="Complaint"
        active={page==="complaint"}
        onClick={()=>setPage("complaint")}
      />

      <SidebarItem
        icon={<Layers />}
        label="Categories"
        active={page==="categories"}
        onClick={()=>setPage("categories")}
      />

    </aside>
  );
}