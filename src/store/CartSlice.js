import { createSlice } from "@reduxjs/toolkit";

// Load cart items from local storage if available
const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = {...action.payload, itemCount: 1};
        state.push(item);
        localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    increaseByOne: (state, action) => {
        state.forEach((item) => {
            if(item.id === action.payload.id)
                item.itemCount += 1;
        });
        localStorage.setItem("cart", JSON.stringify(state));
    },
    decreseByOne: (state, action) => {
        state.forEach((item) => {
            if(item.id === action.payload.id)
                item.itemCount -= 1;
        });
        localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart:(state)=>{
      return [];
    }
  },
});
export const { addToCart, removeFromCart, increaseByOne, decreseByOne, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
