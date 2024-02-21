import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assests/images/logo.png'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function NavBar() {
    const cartItems=useSelector((store)=>store.cart);
    const wishList=useSelector((store)=>store.wishList);
  return (
    <div className="fixed prevent-select z-50 left-0 right-0 bg-white w-screen items-center  flex justify-center shadow-md">
      <div className="w-full flex px-4 py-1 md:py-0 justify-between md:max-w-[90%]">
        <div>
          <Link to="/">
          <img className="w-12 md:w-20" src={logo} alt="" />
          </Link>
        </div>

        <div className=" flex items-center gap-2 md:gap-5">
            <Link className="relative px-1 py-1" to="/wishlist">
            <FaHeart className="text-red-500" size={30}/>
            <div className="absolute  font-bold -top-[8px] -right-1">{wishList.length}</div>
            </Link>
            <Link className="relative px-1 py-1" to="/cart">
            <FaShoppingCart size={30} />
            <div className="absolute text-red-700 font-bold -top-[10px] -right-1">{cartItems.length}</div>
            </Link>
        </div>
      </div>
    </div>
  );
}
