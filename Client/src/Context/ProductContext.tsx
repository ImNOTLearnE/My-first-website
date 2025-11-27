import * as React from "react";

type ProducstContextType = {
  phonesnewArrival: any[];
  phonesBestSaller: any[];
  headphonesNewArrival: any[];
  headphonesBestSaller: any[];
  setProduct: React.Dispatch<React.SetStateAction<any>>;
};

export const ProducstContext = React.createContext<ProducstContextType>({
  phonesnewArrival: [],
  phonesBestSaller: [],
  headphonesNewArrival: [],
  headphonesBestSaller: [],
  setProduct: () => {},
});
