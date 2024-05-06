import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SortProducts from "../components/product/SortProducts";
import ProductList from "../components/product/ProductList";

function Shop() {
  const [sortBy, setSortBy] = useState(null);

  const handleSortChange = (sortPreference) => {
    setSortBy(sortPreference);
  };

  return (
    <div className=" bg-[#EEEEEE]">
      <Navbar />
      <div className="product-filter-sort-wrapper flex">
        <div className="sort-product-list-section flex flex-col w-[100%] h-[100%]">
          <div className="sort-container w-[100%] h-14 border border-l-0 border-r-0 border-[#222831] border-opacity-10">
            <SortProducts onSortChange={handleSortChange} />
          </div>
          <div className="product-container">
            <ProductList sortBy={sortBy} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
