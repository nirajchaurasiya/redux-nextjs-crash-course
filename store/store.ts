import cartReducer from "@/features/cart";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});
