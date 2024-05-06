import { Button } from "@material-tailwind/react";
import React from "react";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";

function SortProducts({ onSortChange }) {
  return (
    <div className="h-[100%] w-[100%] flex items-center justify-start gap-12 pl-6 bg-[#EEEEEE]">
      <Button
        onClick={() => onSortChange("lowToHigh")}
        className="text-[#222831] flex items-center gap-2 border p-1 border-zinc-500 rounded-md active:bg-[#222831] active:text-white">
        <FaSortAmountDownAlt />
        <span>Price - Low to High</span>
      </Button>
      <Button
        onClick={() => {
          onSortChange("highToLow");
        }}
        className="text-[#222831] flex items-center gap-2 border p-1 border-zinc-500 rounded-md active:bg-[#222831] active:text-white">
        <FaSortAmountUpAlt />
        <span>Price - High to Low</span>
      </Button>
    </div>
  );
}

export default SortProducts;
