import React from "react";
import Img from "./Img";

export default function Skelton() {
  return (
    <div className="w-[250px] animate-pulse rounded-lg relative px-4 bg-white shadow-md py-2">
      <div className="h-[300px] prevent-select flex justify-center items-center overflow-hidden">
        {/* <img className="w-full " src={product.image} alt="" /> */}
        <Img src={""}/>
      </div>
      <div className="flex h-16 flex-col items-start gap-1">
        <h1 className="font-bold h-4 w-full bg-gray-400 rounded-md text-[14px]">
        </h1>
        <div className="flex items-center gap-2 text-white w-fit ">
          <span className="bg-green text-xs  px-4 py-2 rounded-sm bg-green-600 flex items-center gap-1">
            {/* {product.rating.rate} <FaStar /> */}
          </span>
          <div className="text-gray-500 text-[14px]">
            {/* {`(${product.rating.count})`} */}
            </div>
        </div>
        {/* <div className="flex items-center font-bold">
          <PiCurrencyInrBold />
           <span>
            {product.price}
            </span>
        </div> */}
      </div>
      <button
        className="bg-slate-400 h-10 hover:bg-slate-500 transition-all duration-200 w-full py-1 text-xl font-bold rounded-md"
      >
        {/* Add to Cart */}
      </button>
      {
        // !wishList.some((item)=>item.id===product.id)?
        // <div className="text-2xl absolute cursor-pointer text-gray-500 top-1 right-1">
        // <IoIosHeart/>
        // </div>:
        <div  className="text-2xl absolute cursor-pointer text-red-500 top-1 right-1">
        {/* <IoIosHeart/> */}
        </div>

      }

    </div>
   
  );
}
