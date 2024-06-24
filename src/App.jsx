import { toast } from "react-toastify";
import "./App.css";
import axios from "./config/axios";
import { toastOptions } from "./constants/toastOptions";
import { getAllProducts } from "./constants/apiEndpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProductList } from "./redux/slices/productReducer";
import { getProducts } from "./helpers/fetchProducts";

function App() {
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
    <div className="h-screen bg-hero-pattern bg-cover bg-center w-full flex justify-center items-center">
      <div className="max-w-md p-10 w-full flex flex-col justify-center items-center bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Welcome to the FakeStore! this store is made for as an assignment
          submission for MyIndiaa, Hope you guys like it, please feel free to
          shop non stop here! XD
        </p>
        <a
          className="bg-teal-400 p-4 rounded-full hover:bg-teal-500 duration-300 transition-all"
          href="/store"
        >
          Browse Store
        </a>
      </div>
      {/* <img src={heroBg} className="object-cover" alt="" /> */}
      {/* {products.length > 0 &&
        products?.map((prod, index) => (
          <ProductCard key={`prod-${index}`} product={prod} />
        ))} */}
    </div>
  );
}

export default App;
