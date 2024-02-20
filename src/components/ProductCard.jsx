import React from "react";
import { FaStar } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { IoIosHeart } from "react-icons/io";
import { addToWishList, removeFromWishList } from "../store/Wishlist";
import { CiDiscount1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import Img from "./Img";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  const wishList = useSelector((store) => store.wishList);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleAddWishList() {
    dispatch(addToWishList(product));
  }
  function handleAddItem() {
    if (cart.some((item) => item.id === product.id)) {
      return;
    }
    dispatch(addToCart(product));
  }
  function handleRemoveWishList() {
    dispatch(removeFromWishList(product));
  }
  return (
    <div className="w-56 h-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 relative">
      <Link to={`/details/${product.id}`}>
        <img
          className="w-full h-36 object-contain"
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>
      <div className="absolute top-2 right-2">
        {wishList.some((item) => item.id === product.id) ? (
          <IoIosHeart
            onClick={handleRemoveWishList}
            className="text-red-500 text-xl cursor-pointer"
          />
        ) : (
          <IoIosHeart
            onClick={handleAddWishList}
            className="text-gray-500 text-xl cursor-pointer"
          />
        )}
      </div>
      <div className="p-4">
        <Link to={`/details/${product.id}`}>
          <h2 className="text-gray-900 font-semibold text-lg mb-2">
            {product.title.length > 15
              ? product.title.slice(0, 15) + "..."
              : product.title}
          </h2>
          <div className="flex items-center mb-1">
            <FaStar className="text-yellow-500" />
            <span className="text-yellow-500 text-sm ml-1">
              {product.rating}
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <div className="text-green-600 font-semibold flex items-center">
              <PiCurrencyInrBold />
              {product.price}
            </div>
            <div className="flex items-center">
              {product.discountPercentage && (
                <span className="text-red-600 font-semibold mr-1">
                  <CiDiscount1 />
                </span>
              )}
              {product.discountPercentage && (
                <span className="text-red-600 text-sm font-semibold">
                  {product.discountPercentage}%
                </span>
              )}
            </div>
          </div>
          <div className="text-sm text-gray-700 font-bold mb-1">
            {product.brand}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            Stock Left: {product.stock}
          </div>
        </Link>
        {cart.some((item) => item.id === product?.id) ? (
          <Link to="/cart">
            <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 mt-2 rounded">
              Checkout <FaArrowRight />
            </button>
          </Link>
        ) : (
          <button
            onClick={handleAddItem}
            className="w-full bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 mt-2 rounded-md"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
