// src/App.tsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { CartProvider } from "@/context/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;

