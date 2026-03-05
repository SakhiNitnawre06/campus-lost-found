import React from "react";

function StatusBadge({ s }) {
  const map = {
    Lost: "bg-red-500",
    Found: "bg-orange-500",
    Returned: "bg-green-500",
  };

  return (
    <span
      className={`px-2 py-1 text-white rounded text-sm ${
        map[s] || "bg-gray-500"
      }`}
    >
      {s}
    </span>
  );
}

export default StatusBadge;