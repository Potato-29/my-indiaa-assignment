import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import productReducer from "./slices/productReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
