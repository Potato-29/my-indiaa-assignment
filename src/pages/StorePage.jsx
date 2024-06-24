import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../helpers/fetchProducts";
import { saveProductList } from "../redux/slices/productReducer";
import { toast } from "react-toastify";
import { toastOptions } from "../constants/toastOptions";

const StorePage = () => {
  const products = useSelector((state) => (state ? state?.products.list : []));
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchAllProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getProducts();
      if (response.length > 0) {
        dispatch(saveProductList(response));
        setIsLoading(false);
      }
    } catch (error) {
      console.error("-----> err", error.message);
      toast.error("Something went wrong", toastOptions);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center text-5xl">
          Loading...
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Store</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.length > 0 &&
              products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StorePage;
