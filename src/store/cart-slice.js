import { createSlice } from "@reduxjs/toolkit";

const UIslice = createSlice({
  name: "UI",
  initialState: { visibility: false },

  reducers: {
    toggleCart(state) {
      state.visibility = !state.visibility;
    },
  },
});
export const UIAction = UIslice.actions;
export default UIslice;
