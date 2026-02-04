import * as React from "react";

type ProducstContextType = {
  phonesnewArrival: any[];
  phonesBestSaller: any[];
  headphonesNewArrival: any[];
  headphonesBestSaller: any[];
  watchesNewArrival: any[];
  watchesBestSaller: any[];
  camerasNewArrival?: any[];
  camerasBestSaller?: any[];
  laptopsNewArrival?: any[];
  laptopsBestSaller?: any[];
  setProduct: React.Dispatch<React.SetStateAction<any>>;
};

export const ProducstContext = React.createContext<ProducstContextType>({
  phonesnewArrival: [],
  phonesBestSaller: [],
  headphonesNewArrival: [],
  headphonesBestSaller: [],
  watchesNewArrival: [],
  watchesBestSaller: [],
  camerasNewArrival: [],
  camerasBestSaller: [],
  laptopsNewArrival: [],
  laptopsBestSaller: [],
  setProduct: () => {},
});
