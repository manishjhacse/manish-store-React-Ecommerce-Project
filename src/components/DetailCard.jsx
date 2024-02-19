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

const DetailCard = ({ productID }) => {
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return loading ? (
    <DetailCardSkelton />
  ) : (
    <div className="w-full  max-w-[1080px] flex md:flex-row flex-col items-center">
      <div className=" md:w-1/2 w-[80%] overflow-hidden">
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
        <div className="flex gap-x-2 md:space-x-4 mb-4">
          {cart.some((item) => item.id === product?.id) ? (
            <Link to="/cart">
              <button
                onClick={handleAddItem}
                className="bg-gray-500 text-sm md:text-base hover:bg-gray-600 text-white font-semibold md:py-3 md:px-6 px-2 py-1 rounded-md md:rounded-full transition duration-300"
              >
                Checkout
              </button>
            </Link>
          ) : (
            <button
              onClick={handleAddItem}
              className="bg-blue-500 text-sm md:text-base hover:bg-blue-600 text-white font-semibold md:py-3 md:px-6 px-2 py-1 rounded-md md:rounded-full transition duration-300"
            >
              Add to Cart
            </button>
          )}
          {wishList.some((item) => item.id === product?.id) ? (
            <button
              onClick={handleRemoveWishList}
              className="bg-gray-300  text-sm md:text-base hover:bg-gray-400 text-black font-semibold md:py-3 md:px-6 px-2 py-1 rounded-md md:rounded-full transition duration-300"
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              onClick={handleAddWishList}
              className="bg-gray-300 text-sm md:text-base hover:bg-gray-400 text-black font-semibold md:py-3 md:px-6 px-2 py-1 rounded-md md:rounded-full transition duration-300"
            >
              Add to Wishlist
            </button>
          )}
        </div>
        <div className="text-sm text-gray-700">
          Stock Left: {product?.stock}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
