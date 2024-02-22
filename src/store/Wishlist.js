import { createSlice } from "@reduxjs/toolkit";
const initialState=localStorage.getItem("wishList")?JSON.parse(localStorage.getItem("wishList")):[]
export const wishListSlice=createSlice({
    name:"wishList",
    initialState:initialState,
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload);
            localStorage.setItem("wishList",JSON.stringify(state))
        },
        removeFromWishList:(state,action)=>{
            const newState= state.filter((item)=>item.id!==action.payload.id)
            localStorage.getItem("wishList",JSON.stringify(newState))
            return newState;
        },
        clearWishList:(state)=>{
            localStorage.setItem('wishList', JSON.stringify([]))
            return [];
        }
    }
})
export default wishListSlice.reducer;
export const {addToWishList,removeFromWishList,clearWishList}=wishListSlice.actions;