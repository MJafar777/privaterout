import { configureStore } from "@reduxjs/toolkit";
import UIslice from "./cart-slice";

const store = configureStore({
  reducer: { ui: UIslice.reducer },
});
export default store;
