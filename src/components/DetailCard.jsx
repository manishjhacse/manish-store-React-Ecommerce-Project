import { CiDiscount1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { PiCurrencyInrBold } from "react-icons/pi";
import ProductCarousel from "./ProductCarousel";
import DetailCardSkelton from "./DetailCardSkelton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { addToWishList, removeFromWishList } from "../store/Wishlist";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const DetailCard = ({ productID, setCategory }) => {
  const cart = useSelector((state) => state.cart);
  const wishList = useSelector((store) => store.wishList);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleAddItem() {
    if (cart.some((item) => item.id === product.id)) {
      return;
    }
    dispatch(addToCart(product));
  }
  function handleAddWishList() {
    dispatch(addToWishList(product));
  }
  function handleRemoveWishList() {
    dispatch(removeFromWishList(product));
  }

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/${productID}`);
        setProduct(response.data);
        setCategory(response.data.category);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productID]);

  return loading ? (
    <DetailCardSkelton />
  ) : (
    <div className="w-full max-w-[1080px] px-3 flex md:flex-row flex-col items-start md:py-14">
      <div className=" md:w-1/2  w-[100%] overflow-hidden">
        <ProductCarousel images={product?.images} />
      </div>
      <div className="p-8">
        <h2 className="text-gray-900 font-semibold text-3xl mb-4">
          {product?.title}
        </h2>
        <p className="text-gray-900 text-lg mb-4">{product?.description}</p>
        <div className="flex items-center mb-4">
          <FaStar className="text-yellow-500 text-2xl" />
          <span className="text-yellow-500 text-2xl ml-2">
            {product?.rating}
          </span>
        </div>
        <div className="flex gap-5 items-center mb-4">
          <div className="text-green-600 font-semibold text-3xl flex items-center">
            <PiCurrencyInrBold className="text-xl" /> {product?.price}
          </div>
          {product?.discountPercentage && (
            <div className="flex items-center">
              <span className="text-red-600 text-xl font-semibold items-center">
                <CiDiscount1 />
              </span>
              <span className="text-red-600 text-xl font-semibold">
                {product?.discountPercentage}%
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center  w-full md:flex-row flex-col mb-3 md:space-x-4 md:mb-4">
          {cart.some((item) => item.id === product?.id) ? (
            <Link className="w-full md:w-fit" to="/cart">
              <button
                onClick={handleAddItem}
                className="md:w-fit w-[100%]  flex text-sm md:text-base items-center justify-center gap-2 bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-8 mt-2 rounded-full"
              >
                Checkout
              </button>
            </Link>
          ) : (
            <button
              onClick={handleAddItem}
              className="md:w-fit w-full bg-black text-sm md:text-base hover:bg-slate-800 text-white font-semibold py-2 px-8 mt-2 rounded-full"
            >
              Add to Cart
            </button>
          )}

          {wishList.some((item) => item.id === product?.id) ? (
            <button
              onClick={handleRemoveWishList}
              className="md:w-fit w-full bg-red-500 text-sm md:text-base hover:bg-red-700 text-white font-semibold py-2 px-8 mt-2 rounded-full"
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              onClick={handleAddWishList}
              className="md:w-fit w-full bg-red-500 text-sm md:text-base hover:bg-red-700 text-white font-semibold py-2 px-8 mt-2 rounded-full"
            >
              Add to Wishlist
            </button>
          )}
        </div>
        <div className="text-sm text-gray-700">
          Stock Left: {product?.stock}
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default DetailCard;
