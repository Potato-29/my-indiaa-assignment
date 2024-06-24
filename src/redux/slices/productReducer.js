import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProductList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { saveProductList } = productSlice.actions;

export default productSlice.reducer;
