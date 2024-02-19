import React from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";
import Skelton from "../components/Skelton";
import ProductCard from "../components/ProductCard";

export default function SearchPage() {
    const {searchName}=useParams();
  const { products, loading } = useFetch(`/search?q=${searchName}&limit=0`);
  return (
    <div className="w-full px-2 flex flex-col gap-5 items-center ">
      <Search show={false}/>
      <div className="w-full flex flex-wrap gap-3 justify-center max-w-[1080px] px-2">
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <Skelton key={index} />
          ))}
          {
            products?.length===0 && <div>Sorry No Products Found</div>
          }
        {!loading &&
          products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
