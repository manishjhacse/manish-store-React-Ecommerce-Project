import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { clearWishList } from "../store/Wishlist";

export default function WishlistPAge() {
  const [showAlert, setShowAlert] = useState(false)
  const dispatch =useDispatch()
  function handleClearWishList(){
    dispatch(clearWishList())
    setShowAlert(false)
  }
  const wishList = useSelector((store) => store.wishList);
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <div className="w-full flex flex-wrap gap-3 justify-center px-2">
        {wishList.length === 0 ? (
          <div className="flex gap-2 flex-col justify-center items-center">
            <h1 className="text-xl font-bold">Your wishlist is empty</h1>
            <Link
              className="font-bold px-3 rounded-md py-1 w-fit bg-black text-white hover:bg-slate-800 transition-all duration-200 "
              to="/"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          wishList.map((item) => <ProductCard key={item.id} product={item} />)
        )}
       </div>
     { wishList.length>0 && <button
            onClick={() => setShowAlert(true)}
            className="bg-red-500 px-3 py-2 mt-2 text-xs rounded-md text-white"
          >
            Clear Wishlist
          </button>}
       <div
        className={`fixed bg-opacity-85 bottom-1/2 left-[50%] -translate-x-1/2 translate-y-1/2 bg-black text-white w-[90%] px-2 flex flex-col items-center md:w-[400px] ${
          showAlert ? "scale-100" : "scale-0"
        } rounded-md h-[150px] justify-center transition-all duration-200`}
      >
        <p className="text-center">Are you sure to Clear the Wishlist?</p>
        <div className="flex gap-5 justify-center">
          <button
            onClick={handleClearWishList}
            className="bg-red-500 px-3 py-2 w-16 mt-2 text-xs rounded-md text-white"
          >
            Yes
          </button>
          <button
            onClick={() => setShowAlert(false)}
            className="bg-red-500 px-3 py-2 w-16 mt-2 text-xs rounded-md text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
