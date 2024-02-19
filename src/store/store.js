import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import Wishlist from "./Wishlist";

const store=configureStore({
    reducer:{
        cart:CartSlice,
        wishList:Wishlist
    }
})
export default store;