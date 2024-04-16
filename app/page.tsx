"use client";
import React from "react";
import products from "@/data/products.json";
import { Products } from "@/types/utils";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/features/cart";
import { RootState } from "@/types/rootState";
export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.allCartProduct);
  const handleClickButton = (product: Products) => {
    if (cart.length === 0) {
      dispatch(addToCart(product));
      return;
    }
    const isAlreadyExist = cart?.find(
      (field: Products) => field.id === product.id
    );
    if (isAlreadyExist) {
      dispatch(removeFromCart(product.id));
      return;
    }
    dispatch(addToCart(product));
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore Mobiles
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.mobile.map((e: Products) => (
              <div key={e.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={e.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {e.company}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font ">
                    {e.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    ${e.price} {e.weight + "gm"}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    Dimensions:{e.dimensions.length}L {e.dimensions.width}W
                    {e.dimensions.height}H
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                      handleClickButton(e);
                    }}
                  >
                    {cart.find((field) => field.id === e.id)
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore Laptops
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.laptop.map((e: Products) => (
              <div key={e.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={e.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {e.company}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font ">
                    {e.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    ${e.price} {e.weight + "gm"}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    Dimensions:{e.dimensions.length}L {e.dimensions.width}W
                    {e.dimensions.height}H
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                      handleClickButton(e);
                    }}
                  >
                    {cart.find((field) => field.id === e.id)
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Explore ACs
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.AC.map((e: Products) => (
              <div key={e.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={e.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {e.company}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font ">
                    {e.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    ${e.price} {e.weight + "gm"}
                  </p>
                  <p className="leading-relaxed text-base mb-2">
                    Dimensions:{e.dimensions.length}L {e.dimensions.width}W
                    {e.dimensions.height}H
                  </p>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2 me-2 mb-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                      handleClickButton(e);
                    }}
                  >
                    {cart.find((field) => field.id === e.id)
                      ? "Remove From Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
