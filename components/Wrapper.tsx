"use client";
import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
}
