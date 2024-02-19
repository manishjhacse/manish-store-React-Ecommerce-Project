import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setProducts(null);
    setError(null);
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setProducts(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);
  return { products, loading, error };
};
export default useFetch;
