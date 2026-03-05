import React from "react";

function CategoryCard({ title, count, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded shadow cursor-pointer hover:shadow-lg"
    >
      <h3 className="font-semibold text-indigo-600">{title}</h3>
      <p className="text-sm text-gray-500">{count} items</p>
    </div>
  );
}

export default CategoryCard;