import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Skelton from "../components/Skelton";
import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import ScrollToTop from "../components/ScrollToTop";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [url, setUrl] = useState("?limit=0");
  const { products, loading } = useFetch(selectedCategory + url);
  return (
    <div className="w-full px-2 flex flex-col gap-5 items-center ">
      <Search
        show={true}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setUrl={setUrl}
      />
      <div className="w-full flex flex-wrap gap-3 justify-center px-3 ">
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <Skelton key={index} />
          ))}
        {!loading &&
          products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>

      <ScrollToTop/>
    </div>
  );
}
