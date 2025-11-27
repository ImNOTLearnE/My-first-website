import * as React from "react";

type ProducstInTheCartContextType = {
  addToCart: any[];
  setAddToCart: React.Dispatch<React.SetStateAction<any>>;
};

export const InTheCart = React.createContext<ProducstInTheCartContextType>({
  addToCart: [],
  setAddToCart: () => {},
});