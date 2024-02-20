import React, { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Skelton from "../components/Skelton";
import ProductCard from "../components/ProductCard";

export default function DetailPage() {
  const { productID } = useParams();
  return (
    <div className="w-full px-2 flex flex-col gap-5 items-center ">
      <DetailCard productID={productID}
      />
    </div>
  );
}
