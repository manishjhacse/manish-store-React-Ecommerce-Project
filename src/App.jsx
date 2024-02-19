import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";
import WishlistPage from './pages/WishListPage'
import "react-toastify/dist/ReactToastify.css";
import Skelton from "./components/Skelton";
import ProductCard from "./components/ProductCard";
import SearchPage from "./pages/SearchPage";
import DetailCard from "./components/DetailCard";
import DetailPage from "./pages/DetailPage";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
function App() {

  return (
    <div className="bg-gray-200 min-h-screen pb-2">
      <NavBar/>
      <div className="pt-24 min-h-[calc(100vh-50px)] md:pt-32">
        <Routes path="/">
          <Route path="" element={<ProductPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path='/search/:searchName' element={<SearchPage/>}/>
          <Route path="/details/:productID" element={<DetailPage/>}/>
          <Route path="/placeorder" element={<PlaceOrder/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
