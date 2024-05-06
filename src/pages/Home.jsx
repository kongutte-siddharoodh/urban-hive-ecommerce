import React from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import home_cat_img from "../assets/images/homepage-fashion-category-pic.png";
import sale_model from "../assets/images/sale-model.png";
import mens from "../assets/images/male.png";
import womens from "../assets/images/female.png";
import kids from "../assets/images/kids.png";
import footwear from "../assets/images/footwear.png";
import sportswear from "../assets/images/sportswear.png";
import sale from "../assets/images/sale.png";
import shoppingbycat from "../assets/images/shopbycategory.png";
import CategoryComponent from "../components/common/CategoryComponent";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className=" bg-[#EEEEEE] h-auto w-full">
      <Navbar />
      {/* Home Sale Banner */}
      <div className="sale-home-container bg-[#EEEEEE] text-[#222831] h-[500px] px-16 flex items-end justify-between">
        <div className="w-1/2 h-full flex flex-col gap-8 justify-center items-start text-start">
          <div className="font-bold text-6xl">
            Best Sellers: Shop the Most Popular Styles
          </div>
          <div className="font-semibold text-xl">
            Discover our best-selling products, loved by our customers for their
            quality, style, and value. Find your new favorites today!
          </div>
          <Link to="/shop">
            <Button Button_Name="Explore" class_button="explore-btn" />
          </Link>
        </div>
        <div className="w-1/2 h-full flex justify-end items-end">
          <img src={sale_model} className="w-[28.125rem]" />
        </div>
      </div>

      {/* Home Fashion Banner */}
      <div className="fashion-banner-home h-[500px] bg-[#76ABAE] text-[#EEEEEE] px-16 flex items-end gap-10">
        <div className="fashion-category-image w-[40%]">
          <img src={home_cat_img} className=" h-[28.125rem]" />
        </div>
        <div className="h-96 w-[60%] flex flex-col gap-8">
          <div className="title font-bold text-6xl">
            Trendsetters' Paradise: Dive into Fashion
          </div>
          <div className="description font-semibold text-xl">
            Explore our exclusive collection of stylish clothing and
            accessories, curated to inspire your next look.
          </div>
          <Link to="/shop">
            <Button Button_Name="Shop Now" class_button="shop-now-btn" />
          </Link>
        </div>
      </div>

      {/* Shop By Category Banner */}
      <div className="shop-by-category-banner bg-[#EEEEEE] text-[#222831] h-[500px] px-16 flex items-center justify-between">
        <div className="category-container h-[300px] w-1/2 font-bold flex flex-wrap justify-start items-center gap-20">
          <Link
            className="cat-comp h-28 rounded-md transition ease-in-out duration-300"
            onClick={() => alert("Category is coming soon!!")}>
            <CategoryComponent cat_name="Men's" cat_icon={mens} />
          </Link>
          <Link
            className="cat-comp h-28 rounded-md transition ease-in-out duration-300"
            onClick={() => alert("Category is coming soon!!")}>
            <CategoryComponent cat_name="Women's" cat_icon={womens} />
          </Link>
          <Link
            className="cat-comp h-28 rounded-md transition ease-in-out duration-300"
            onClick={() => alert("Category is coming soon!!")}>
            <CategoryComponent cat_name="Kid's" cat_icon={kids} />
          </Link>
          <Link
            className="cat-comp h-28 rounded-md transition ease-in-out duration-300"
            onClick={() => alert("Category is coming soon!!")}>
            <CategoryComponent cat_name="Footwear" cat_icon={footwear} />
          </Link>
          <Link
            className="cat-comp h-28 rounded-md transition ease-in-out duration-300"
            onClick={() => alert("Category is coming soon!!")}>
            <CategoryComponent cat_name="Sportswear" cat_icon={sportswear} />
          </Link>
          <Link
            className="cat-comp h-28 rounded-md transition ease-in-out duration-300"
            onClick={() => alert("Category is coming soon!!")}>
            <CategoryComponent cat_name="Sales/Deals" cat_icon={sale} />
          </Link>
        </div>
        <div className="sbc-text h-full w-1/2 flex flex-col justify-between gap-5 items-end">
          <div className="text-6xl pt-16 font-bold">Shop By Category</div>
          <div className="shop_fam_img flex items-end justify-center pr-10">
            <img src={shoppingbycat} className=" h-[350px] w-fit" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
