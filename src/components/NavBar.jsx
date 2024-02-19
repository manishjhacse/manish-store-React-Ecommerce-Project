import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../assests/images/logo.png'
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function NavBar() {
    const cartItems=useSelector((store)=>store.cart);
    const wishList=useSelector((store)=>store.wishList);
  return (
    <div className="fixed prevent-select z-50 left-0 right-0 bg-white w-screen items-center  flex justify-center shadow-md">
      <div className="w-full flex py-2 px-2  justify-between  max-w-[1080px]">
        <div>
          <Link to="/">
          <img className="w-12 md:w-20" src={logo} alt="" />
          </Link>
        </div>

        <div className=" flex items-center gap-2 md:gap-5">
            <Link className="relative px-1 py-1" to="/wishlist">
            <CiHeart size={30}/>
            <div className="absolute text-red-700 font-bold -top-1 right-0">{wishList.length}</div>
            </Link>
            <Link className="relative px-1 py-1" to="/cart">
            <CiShoppingCart size={30} />
            <div className="absolute text-red-700 font-bold -top-1 right-0">{cartItems.length}</div>
            </Link>
        </div>
      </div>
    </div>
  );
}
