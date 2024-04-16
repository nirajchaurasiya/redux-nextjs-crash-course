import { Products } from "@/types/utils";

export interface RootState {
    cart: {
        allCartProduct: Products[]
    }
}