import React, { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Skelton from "../components/Skelton";
import ProductCard from "../components/ProductCard";

export default function DetailPage() {
  const { productID } = useParams();
  const [category, setCategory] = useState("all");
  const { products, loading } = useFetch(`/category/${category}`);
  return (
    <div className="w-full px-2 flex flex-col gap-5 items-center ">
      <DetailCard setCategory={setCategory} productID={productID} />
      <div className="w-full flex flex-col justify-center gap-3 px-3 ">
        {products && (
          <h1 className=" w-full text-center font-bold text-2xl">
            Similar Products
          </h1>
        )}
        <div className="w-full flex flex-wrap gap-3 justify-center px-3 ">
          {loading && [1, 2, 3, 4, 5].map((index) => <Skelton key={index} />)}
          {!loading &&
            products?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
}
