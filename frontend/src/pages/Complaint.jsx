import { useState } from "react";
import api from "../lib/axios";
import { toast } from "react-toastify";

export default function Complaint({ setPage }) {

  const categories = [
    "ID & Documents",
    "Electronics",
    "Personal Belongings",
    "Books & Study Material",
    "Accessories",
    "Others",
  ];

  const [loading,setLoading] = useState(false);

  const [form,setForm] = useState({
    itemName:"",
    category:"",
    description:"",
    location:"",
    dateTime:"",
    priority:"Medium",
    status:"Lost",
    contactInfo:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const validateForm = ()=>{

    if(!form.itemName.trim())
      return toast.error("Item name required");

    if(!form.category)
      return toast.error("Select category");

    if(!form.location.trim())
      return toast.error("Location required");

    if(!form.contactInfo.trim())
      return toast.error("Contact number required");

    if(!/^[0-9]{10}$/.test(form.contactInfo))
      return toast.error("Enter valid 10 digit phone number");

    if(!form.description.trim())
      return toast.error("Description required");

    return true;
  };

  const submitComplaint = async ()=>{

    if(!validateForm()) return;

    try{

      setLoading(true);

      await api.post("/items",form);

      toast.success("Complaint submitted successfully");

      setForm({
        itemName:"",
        category:"",
        description:"",
        location:"",
        dateTime:"",
        priority:"Medium",
        status:"Lost",
        contactInfo:""
      });

      setPage("items");

    }catch(err){

      toast.error("Failed to submit complaint");

    }finally{

      setLoading(false);

    }

  };

  return (

  <div className="min-h-screen bg-base-200 py-10 px-4">

  <div className="max-w-4xl mx-auto">

  <h1 className="text-3xl font-bold text-center mb-6">
  Raise Lost / Found Complaint
  </h1>

  <div className="card bg-base-100 shadow-xl p-6 space-y-4">

  {/* TYPE */}

  <div>

  <label className="font-semibold">Complaint Type</label>

  <div className="flex gap-4 mt-2">

  <button
  className={`btn ${form.status==="Lost" ? "btn-error":"btn-outline"}`}
  onClick={()=>setForm({...form,status:"Lost"})}
  >
  Lost
  </button>

  <button
  className={`btn ${form.status==="Found" ? "btn-success":"btn-outline"}`}
  onClick={()=>setForm({...form,status:"Found"})}
  >
  Found
  </button>

  </div>

  </div>

  {/* FORM GRID */}

  <div className="grid md:grid-cols-2 gap-4">

  <input
  name="itemName"
  className="input input-bordered"
  placeholder="Item Name"
  value={form.itemName}
  onChange={handleChange}
  />

  <select
  name="category"
  className="select select-bordered"
  value={form.category}
  onChange={handleChange}
  >
  <option value="">Select Category</option>
  {categories.map(c=>(
  <option key={c}>{c}</option>
  ))}
  </select>

  <input
  name="location"
  className="input input-bordered"
  placeholder="Location"
  value={form.location}
  onChange={handleChange}
  />

  <input
  type="datetime-local"
  name="dateTime"
  className="input input-bordered"
  value={form.dateTime}
  onChange={handleChange}
  />

  <select
  name="priority"
  className="select select-bordered"
  value={form.priority}
  onChange={handleChange}
  >
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
  </select>

  <input
  name="contactInfo"
  className="input input-bordered"
  placeholder="Contact Number"
  value={form.contactInfo}
  onChange={handleChange}
  />

  </div>

  <textarea
  name="description"
  className="textarea textarea-bordered"
  placeholder="Item Description"
  value={form.description}
  onChange={handleChange}
  />

  <button
  onClick={submitComplaint}
  className={`btn btn-primary ${loading ? "loading":""}`}
  disabled={loading}
  >

  {loading ? "Submitting..." : "Submit Complaint"}

  </button>

  </div>

  </div>

  </div>

  );
}