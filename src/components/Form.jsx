import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/CartSlice";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("meqygdaw");
  if (state.succeeded) {
    setTimeout(() => {
      navigate("/");
      dispatch(clearCart());
    }, 2000);
    return (
      <div className="w-full flex flex-col items-center">
        <p className="w-full text-center">
          Thanks for Providing Your Feedback!
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="block md:text-lg mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 rounded border border-gray-300 mb-4"
      />
      <label htmlFor="message" className="block md:text-lg mb-2">
        Feedback or Suggestion
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Feedback or Suggestion"
        className="w-full p-2 rounded border border-gray-300 mb-4"
      ></textarea>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 font-bold text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
