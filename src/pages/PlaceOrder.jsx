import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { PiCurrencyInrBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
export default function PlaceOrder() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const cartItem = useSelector((store) => store.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let total = 0;
    if (cartItem.length === 0) {
      navigate("/");
      return;
    }
    cartItem.forEach((item) => {
      total += item.price.toFixed(2) * item.itemCount;
    });
    setTotalAmount(total.toFixed(2));
  }, [cartItem]);

  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const address1 = useRef("");
  const address2 = useRef("");
  const pincode = useRef("");
  const handleOrder = (event) => {
    event.preventDefault();
    setPaymentCompleted(true);
  };
  const [paymentMethod, setPaymentMethod] = useState("card");
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return !paymentCompleted ? (
    <form onSubmit={handleOrder} className="w-full pb-5 gap-y-5 flex md:justify-evenly md:flex-row flex-col px-5">
      <div className="flex  w-full md:w-fit items-center md:items-start flex-col gap-2">
        {/* address field */}
        <div>
          <h1>Name:</h1>
          <input
            ref={name}
            required
            type="text"
            placeholder="Name"
            className="w-[300px] px-2 py-1.5 outline-none border border-black rounded-md text-black"
          />
        </div>
        <div>
          <h1>Email:</h1>
          <input
            ref={email}
            required
            type="email"
            placeholder="Email"
            className="w-[300px] px-2 py-1.5 outline-none border border-black rounded-md text-black"
          />
        </div>
        <div>
          <h1>Phone:</h1>
          <input
            ref={phone}
            required
            type="number"
            placeholder="Contact no."
            className="w-[300px] px-2 py-1.5 outline-none border border-black rounded-md text-black"
          />
        </div>
        <div>
          <h1>Address</h1>
          <input
            ref={address1}
            required
            type="text"
            placeholder="Street or Area name"
            className="w-[300px] px-2 py-1.5 outline-none border border-black rounded-md text-black"
          />
        </div>
        
        <div>
          <h1>Pincode:</h1>
          <input
            ref={pincode}
            required
            type="number"
            placeholder="Pincode"
            className="w-[300px] px-2 py-1.5 outline-none border border-black rounded-md text-black"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl">Payment method:</h1>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
            />
            Credit/Debit Card
          </label>
          <br />
          <label className="cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
          <br />
          <label className="cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
        </div>
        {/* address field */}
      </div>

      <div className="border flex items-center flex-col md:w-[300px] ">
        <h1 className="flex text-lg font-bold items-center">Order Summary</h1>
        <div className="w-full text-sm flex flex-col gap-1.5">
          <div className="w-full flex justify-between ">
            <span>Items:</span>{" "}
            <span className="flex items-center">
              <PiCurrencyInrBold />
              {totalAmount}
            </span>
          </div>
          <div className="w-full flex justify-between ">
            <span>Delivery:</span>{" "}
            <span className="flex items-center">
              <PiCurrencyInrBold />
              {"75.00"}
            </span>
          </div>
          <div className="w-full flex justify-between ">
            <span>Total:</span>{" "}
            <span className="flex items-center">
              <PiCurrencyInrBold />
              {(Number(totalAmount) + Number(75)).toFixed(2)}
            </span>
          </div>
          <div className="w-full flex justify-between ">
            <span>Promotion Applied:</span>{" "}
            <span className="flex items-center">
              <PiCurrencyInrBold />
              {totalAmount > 499 ? "-75.00" : "0.00"}
            </span>
          </div>
          <div className="w-full border-b border-black"></div>
          <div className="w-full flex justify-between ">
            <span>Order Total:</span>{" "}
            <span className="flex items-center">
              <PiCurrencyInrBold />
              {totalAmount > 499
                ? totalAmount
                : (Number(totalAmount) + Number(75)).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          // onClick={handleOrder}
          className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 font-bold  px-4 py-2 mt-2 rounded-lg w-[200px]"
        >
          Place Order
        </button>
      </div>
    </form>
  ) : (
    <div className="flex flex-col items-center justify-center px-2 mb-3">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="md:text-2xl text-xl flex-col flex font-bold mb-4 text-center">
          <p>Thank You </p><span className="text-blue-500">{name.current && name.current.value}</span> <p>for Exploring My
          Project!</p>
        </h1>

        <p className="text-base mb-2 text-center">
          This is just a demo project, so you don't need to make any payment.
        </p>
        <p className="mb-2 text-center">
          I appreciate your time and would love to hear your feedback.
        </p>
        {/* <p className="text-lg mb-8 text-center font-bold">Thank you!</p> */}
        <h1 className="text-lg text-center font-bold mb-2">
          Please give you Feedback
        </h1>
        <Form />
      </div>
    </div>
  );
}
