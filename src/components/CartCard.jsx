import React from "react";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreseByOne,
  increaseByOne,
  removeFromCart,
} from "../store/CartSlice";
import { Link } from "react-router-dom";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  const handleIncreseItem = () => {
    dispatch(increaseByOne(item));
  };

  const handleDecreseItem = () => {
    if (item.itemCount === 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decreseByOne(item));
    }
  };

  return (
    <div className="flex  md:h-fit bg-white rounded-md px-3 py-2 relative items-center shadow-md md:w-[900px] gap-1  md:gap-5 w-[250px] flex-col md:flex-row">
      <Link to={`/details/${item.id}`}>
        <div className="h-[150px] w-[200px] prevent-select flex justify-center items-center overflow-hidden">
          {/* <img className="w-full " src={product.image} alt="" /> */}
          <img src={item.thumbnail} className=" object-cover" alt="" />
        </div>
      </Link>
      <div className="flex flex-col w-full items-start gap-1">
        <Link to={`/details/${item.id}`}>
          <h1 className=" font-bold text-[14px]">{item.title}</h1>
          <div className="md:block hidden"> {item.description} </div>
          <div className="flex items-center gap-2 text-white w-fit ">
            <span className="bg-green text-xs px-1 py-1 rounded-sm bg-green-600 flex items-center gap-1">
              {item.rating}
              <FaStar />
            </span>
            {/* <div className="text-gray-500 text-[14px]">{`(${item.rating})`}</div> */}
          </div>
          <div className="flex items-center font-bold">
            <PiCurrencyInrBold /> <span>{item.price}</span>
          </div>
        </Link>
        <div className="flex prevent-select items-center gap-2 text-xs bg-gray-200 px-2 py-1 rounded-sm">
          <FaMinus className="cursor-pointer" onClick={handleDecreseItem} />
          <span className="font-bold">{item.itemCount}</span>
          <FaPlus className="cursor-pointer" onClick={handleIncreseItem} />
        </div>
      </div>
      <div
        onClick={handleRemove}
        className="absolute top-1 text-red-500 cursor-pointer right-1 text-xl"
      >
        <MdDelete />
      </div>
    </div>
  );
}
