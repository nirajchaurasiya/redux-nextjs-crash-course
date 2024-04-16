import { CartState, Products } from "@/types/utils";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "cart",
    initialState: {
        allCartProduct: [], // Initially, no user is logged in
    } as CartState,
    reducers: {
        addToCart: (state, action) => {
            state.allCartProduct = [...state.allCartProduct, action.payload]
        },
        removeFromCart: (state, action) => {
            state.allCartProduct = state.allCartProduct.filter((e: Products) => e.id !== action.payload)
        }
    },
});

export const { addToCart, removeFromCart } = authSlice.actions;

export default authSlice.reducer;
