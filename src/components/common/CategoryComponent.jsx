import React from "react";

function CategoryComponent({ cat_icon, cat_name }) {
  return (
    <div className="cat-container flex">
      <div className="p-2 h-28 w-28 bg-transparent border-4 border-[#222831] rounded-md flex flex-col flex-wrap justify-center items-center gap-2">
        <img src={cat_icon} />
        <span>{cat_name}</span>
      </div>
    </div>
  );
}

export default CategoryComponent;
