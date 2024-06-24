import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard"; // Adjust the import path
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../helpers/fetchProducts";
import { saveProductList } from "../redux/slices/productReducer";
import { toast } from "react-toastify";
import { toastOptions } from "../constants/toastOptions";

const StorePage = () => {
  const products = useSelector((state) => (state ? state?.products.list : []));
  const dispatch = useDispatch();
  const fetchAllProducts = async () => {
    try {
      const response = await getProducts();
      if (response.length > 0) {
        dispatch(saveProductList(response));
      }
    } catch (error) {
      console.error("-----> err", error.message);
      toast.error("Something went wrong", toastOptions);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default StorePage;
