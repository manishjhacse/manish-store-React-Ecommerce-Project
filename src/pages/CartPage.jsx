import React, { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiCurrencyInrBold } from "react-icons/pi";
import ScrollToTop from "../components/ScrollToTop";

export default function CartPage() {
  const cartItem = useSelector((store) => store.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.price.toFixed(2) * item.itemCount;
    });
    setTotalAmount(total);
  }, [cartItem]);
  return (
    <div className="w-full flex-wrap gap-x-3 overflow-hidden justify-center pb-5 gap-y-5 flex px-5">
      <div className="flex flex-row flex-wrap justify-center  w-fit items-center md:items-start md:flex-col gap-2">
        {cartItem.length === 0 ? (
          <div className="flex gap-2 w-full flex-col justify-center items-center">
            <h1 className="text-xl font-bold">Your cart is empty</h1>
            <Link
               className="font-bold px-3 rounded-md py-1 w-fit bg-black text-white hover:bg-slate-800 transition-all duration-200 "
              to="/"
            >
              Go To Home
            </Link>
          </div>
        ) : (
          cartItem.map((item) => {
            return <CartCard key={item.id} item={item} />;
          })
        )}
      </div>
      {cartItem.length > 0 && (
        <div className="flex items-center flex-col md:w-[300px] ">
          <h1 className="flex items-center">
            <p className="md:text-xl font-semibold">
              Subtotal{`(${cartItem.length} items):`}
            </p>{" "}
            <p className="text-xl md:text-2xl font-bold flex items-center">
              <PiCurrencyInrBold /> {totalAmount.toFixed(2)}
            </p>
          </h1>
          {totalAmount > 499 ? (
            <h1 className="text-xs font-bold text-slate-700 text-center">
              your order is eligible for free delivery
            </h1>
          ) : (
            <h1 className="flex items-center gap-1 text-xs font-bold text-slate-700 text-center">
              <span>Add </span>
              <span className="flex items-center">
                <PiCurrencyInrBold />
                {(499 - totalAmount).toFixed(2)}
              </span>{" "}
              <span> more item for free delivery</span>
            </h1>
          )}
          <Link to="/placeorder">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 font-bold  px-4 py-2 mt-2 rounded-lg w-[200px]">
              Proceed to Buy
            </button>
          </Link>
        </div>
      )}
      <ScrollToTop/>
    </div>
  );
}
