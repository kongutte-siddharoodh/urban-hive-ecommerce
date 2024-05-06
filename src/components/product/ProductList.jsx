import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function ProductList({ sortBy }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    async function getProducts() {
      const options = {
        method: "GET",
        url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        params: {
          country: "in",
          lang: "en",
          currentpage: "0",
          pagesize: "30",
          categories: "men_all",
          concepts: "H&M MAN",
        },
        headers: {
          "X-RapidAPI-Key":
            "eb11727a47msh8c4b4de1b954a58p14e04ejsnfcf1b3e050bf",
          "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      };

      try {
        setSorting(true);
        const response = await axios.request(options);
        let sortedProducts = [...response.data.results];
        if (sortBy === "lowToHigh") {
          sortedProducts.sort((a, b) => a.price.value - b.price.value);
        } else if (sortBy === "highToLow") {
          sortedProducts.sort((a, b) => b.price.value - a.price.value);
        }
        setProducts(sortedProducts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setSorting(false);
        setLoading(false);
      }
    }
    getProducts();
  }, [sortBy]);

  if (loading || sorting) {
    return (
      <div className="flex h-[450px] w-full items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product-list-container h-[100%] w-[100%] flex flex-wrap justify-center gap-10 bg-[#EEEEEE] py-6">
      {products.map((product) => (
        <ProductCard
          key={product.code}
          img_src={product.images[0].url}
          product_name={product.name}
          product_price={product.price.value}
        />
      ))}
    </div>
  );
}

export default ProductList;
