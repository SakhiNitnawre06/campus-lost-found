import { useState } from "react";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import Complaint from "./pages/Complaint";
import Categories from "./pages/Categories";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar page={page} setPage={setPage} />

      <main className="flex-1 overflow-auto p-6">

        {page === "dashboard" && <Dashboard />}
        {page === "items" && <Items />}
        {page === "complaint" && <Complaint setPage={setPage} />}
        {page === "categories" && <Categories setPage={setPage} />}

      </main>

      {/* IMPORTANT */}
      <ToastContainer position="top-right" autoClose={2000} />

    </div>
  );
}