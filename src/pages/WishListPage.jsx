import React from "react";
import { useSelector } from "react-redux";
import store from "../store/store";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function WishlistPAge() {
  const wishList = useSelector((store) => store.wishList);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-wrap gap-3 justify-center px-2">
        {wishList.length === 0 ? (
          <div className="flex gap-2 flex-col justify-center items-center">
            <h1 className="text-xl font-bold">Your wishlist is empty</h1>
            <Link
              className="font-bold px-3 rounded-md py-1 w-fit bg-black text-white hover:bg-slate-800 transition-all duration-200 "
              to="/"
            >
              Go To Home
            </Link>
          </div>
        ) : (
          wishList.map((item) => <ProductCard key={item.id} product={item} />)
        )}
       </div>
    </div>
  );
}
