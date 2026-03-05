import { useEffect, useState } from "react";
import api from "../lib/axios";
import StatusBadge from "../components/StatusBadge";
import { toast } from "react-toastify";

export default function Items() {

  const [items,setItems] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  const [editingItem,setEditingItem] = useState(null);

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
    try{
      const res = await api.get("/items");
      setItems(res.data);
    }catch{
      toast.error("Failed to load items");
    }
  }

  // UPDATE STATUS
  const updateStatus = async (id,status)=>{
    try{
      await api.put(`/items/${id}`,{status});
      toast.success("Status Updated");
      fetchItems();
    }catch{
      toast.error("Status update failed");
    }
  }

  // DELETE ITEM
  const deleteItem = async (id)=>{

    if(!window.confirm("Are you sure you want to delete this item?")) return;

    try{
      await api.delete(`/items/${id}`);
      toast.success("Item Deleted");
      fetchItems();
    }catch{
      toast.error("Delete failed");
    }
  }

  // UPDATE ITEM
  const updateItem = async ()=>{

    try{

      await api.put(`/items/${editingItem._id}`,editingItem);

      toast.success("Item Updated");

      setEditingItem(null);

      fetchItems();

    }catch{

      toast.error("Update failed");

    }

  }

  const filteredItems = items.filter(item =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-semibold mb-4">Reported Items</h2>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search items..."
        className="border px-3 py-2 rounded mb-4 w-full"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />

      {/* TABLE */}

      <table className="w-full border">

        <thead className="bg-slate-200">

          <tr>

            <th className="p-3 text-left">Item</th>
            <th>Category</th>
            <th>Description</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredItems.length === 0 && (

            <tr>

              <td colSpan="6" className="text-center p-4 text-gray-500">

                No items found

              </td>

            </tr>

          )}

          {filteredItems.map(i => (

            <tr key={i._id} className="border-t">

              <td className="p-3">{i.itemName}</td>
              <td>{i.category}</td>
              <td>{i.description}</td>
              <td>{i.location}</td>

              {/* STATUS */}

              <td>

                <select
                  value={i.status}
                  onChange={(e)=>updateStatus(i._id,e.target.value)}
                  className="border px-2 py-1 rounded"
                >

                  <option>Lost</option>
                  <option>Found</option>
                  <option>Returned</option>

                </select>

              </td>

              {/* ACTIONS */}

              <td className="flex gap-2 p-2">

                <button
                  onClick={()=>setEditingItem(i)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={()=>deleteItem(i._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* EDIT MODAL */}

      {editingItem && (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">

          <div className="bg-white p-6 rounded-lg w-96">

            <h2 className="text-xl font-bold mb-4">Edit Item</h2>

            {/* ITEM NAME */}

            <input
              className="border p-2 w-full mb-2"
              placeholder="Item Name"
              value={editingItem.itemName}
              onChange={(e)=>setEditingItem({...editingItem,itemName:e.target.value})}
            />

            {/* CATEGORY */}

            <select
              className="border p-2 w-full mb-2"
              value={editingItem.category}
              onChange={(e)=>setEditingItem({...editingItem,category:e.target.value})}
            >

              {categories.map(c => (
                <option key={c}>{c}</option>
              ))}

            </select>

            {/* LOCATION */}

            <input
              className="border p-2 w-full mb-2"
              placeholder="Location"
              value={editingItem.location}
              onChange={(e)=>setEditingItem({...editingItem,location:e.target.value})}
            />

            {/* DESCRIPTION */}

            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Description"
              value={editingItem.description}
              onChange={(e)=>setEditingItem({...editingItem,description:e.target.value})}
            />

            {/* STATUS */}

            <select
              className="border p-2 w-full mb-3"
              value={editingItem.status}
              onChange={(e)=>setEditingItem({...editingItem,status:e.target.value})}
            >

              <option>Lost</option>
              <option>Found</option>
              <option>Returned</option>

            </select>

            <div className="flex gap-2">

              <button
                onClick={updateItem}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>

              <button
                onClick={()=>setEditingItem(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}