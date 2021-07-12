// https://medium.com/@suraj.kc/mobx-strategies-with-react-hooks-3de23932cb8c
import { createContext, useContext } from "react";

import SampleStore from "./SampleStore";

export const store = {
  sampleStore: new SampleStore(),
};
// window.store = store;

export const StoreContext = createContext(store);

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => {
  return useContext(StoreContext);
};
