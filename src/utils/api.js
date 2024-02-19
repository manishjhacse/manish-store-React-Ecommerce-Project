import axios from "axios";

export const BASE_URL="https://dummyjson.com/products";
export const fetchDataFromApi=async(url)=>{
    try{
        const res=await axios.get(BASE_URL+url);
        return res.data.products;
    }catch(error){
        return error;
    }
}