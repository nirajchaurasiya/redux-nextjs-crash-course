export interface Products {
    id: number;
    name: string;
    price: number;
    dimensions: { length: number, width: number, height: number };
    weight: number;
    company: string;
    image: string;
}
export interface CartState {
    allCartProduct: Products[]; // Assuming Products is a type representing your products
}