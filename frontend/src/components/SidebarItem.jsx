export default function SidebarItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 w-full rounded-lg ${
        active ? "bg-slate-700 text-white" : "hover:bg-slate-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}