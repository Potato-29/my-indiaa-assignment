import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += action.payload.qty;
      } else {
        let obj = {
          ...action.payload,
          totalAmt: action.payload.price * 1,
        };
        state.items.push(obj);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseItemQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
        item.totalAmt = item.qty * item.price;
      }
    },
    decreaseItemQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
          item.totalAmt = item.qty * item.price;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
    },
  },
});
export const {
  addItem,
  removeItem,
  deleteItem,
  increaseItemQty,
  decreaseItemQty,
} = cartSlice.actions;
export default cartSlice.reducer;
