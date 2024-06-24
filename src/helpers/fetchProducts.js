import { toast } from "react-toastify";
import axios from "../config/axios";
import { getAllProducts } from "../constants/apiEndpoints";
import { toastOptions } from "../constants/toastOptions";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(getAllProducts);
    if (data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("-----> err", error.message);
    toast.error("Something went wrong", toastOptions);
  }
};
