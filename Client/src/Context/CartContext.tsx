import * as React from "react";

type ProductContextType = {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CartContext = React.createContext<ProductContextType>({
  cartCount: 0,
  setCartCount: () => {},
});
