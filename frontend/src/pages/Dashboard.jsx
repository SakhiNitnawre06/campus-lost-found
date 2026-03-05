import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import api from "../lib/axios";

export default function Dashboard() {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetchItems();
  },[])

  const fetchItems = async ()=>{
    const res = await api.get("/items");
    setItems(res.data);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <DashboardCard title="Total Complaints" value={items.length} />

      <DashboardCard
        title="Lost"
        value={items.filter(i => i.status === "Lost").length}
      />

      <DashboardCard
        title="Found"
        value={items.filter(i => i.status === "Found").length}
      />

      <DashboardCard
        title="Returned"
        value={items.filter(i => i.status === "Returned").length}
      />

    </div>
  );
}