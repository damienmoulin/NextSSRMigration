"use client";

import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export type CartContextType = {
  cart: Product[];
  addProduct: (product: Product) => void;
  summaryIsShowed: boolean;
  showSummary: (show: boolean) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addProduct: () => {},
  summaryIsShowed: false,
  showSummary: () => {},
});

const CartProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [summaryIsShowed, showSummary] = useState<boolean>(false);

  const addProduct = useCallback(
    (product: Product) => {
      setCart([...cart, product]);
      console.log(cart);
    },
    [cart]
  );

  const context = useMemo(
    () => ({
      cart,
      addProduct,
      summaryIsShowed,
      showSummary,
    }),
    [cart, addProduct, summaryIsShowed, showSummary]
  );

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
