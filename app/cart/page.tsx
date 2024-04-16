"use client";
import { removeFromCart } from "@/features/cart";
import { RootState } from "@/types/rootState";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.allCartProduct);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto">
      <div className="sm:flex shadow-md">
        <div className="w-full sm:w-3/4 bg-white px-10 py-5">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">
              {cart.length === 0 || cart.length === 1
                ? cart.length + " Item"
                : cart.length + " Items"}
            </h2>
          </div>

          {cart.length > 0 ? (
            cart.map((e) => (
              <div
                key={e.id}
                className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
              >
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img
                    src={e.image}
                    alt="Black Leather Purse"
                    className="h-full object-center object-cover md:block hidden"
                  />
                  <img
                    src={e.image}
                    alt="Black Leather Purse"
                    className="md:hidden w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs mb-2 leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <p className="text-base mb-1 font-black leading-none text-gray-800">
                    {e.name}
                  </p>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Dimensions: {e.dimensions.height}H {e.dimensions.width}W{" "}
                    {e.dimensions.length}L
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Company: {e.company}
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="">
                      <p
                        onClick={() => {
                          dispatch(removeFromCart(e.id));
                        }}
                        className="text-xs leading-3 underline text-red-500 cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      ${e.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-96">
              <p>Product added to cart can be viewed from here</p>
            </div>
          )}
          <Link
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-5">
          <h1 className="font-semibold text-2xl">Order Summary</h1>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${cart.reduce((acc, item) => acc + item.price, 0)}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              No Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
