import { useEffect, useState } from "react";
import api from "../lib/axios";
import CategoryCard from "../components/CategoryCard";

export default function Categories({ setPage }) {

  const [items,setItems] = useState([]);

  const categories = [
    "ID & Documents",
    "Electronics",
    "Personal Belongings",
    "Books & Study Material",
    "Accessories",
    "Others",
  ];

  useEffect(()=>{
    fetchItems();
  },[])

  const fetchItems = async ()=>{
    const res = await api.get("/items");
    setItems(res.data);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {categories.map((c)=>(
        <CategoryCard
          key={c}
          title={c}
          count={items.filter(i => i.category === c).length}
          onClick={()=>setPage("items")}
        />
      ))}

    </div>
  );
}