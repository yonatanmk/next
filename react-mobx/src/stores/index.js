// https://medium.com/@suraj.kc/mobx-strategies-with-react-hooks-3de23932cb8c
import { createContext, useContext } from "react";

import SampleStore from "./SampleStore";
import TodoStore from "./TodoStore";

export const store = {
  sampleStore: new SampleStore(),
  todoStore: new TodoStore(),
};
// window.store = store;

export const StoreContext = createContext(store);

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => {
  return useContext(StoreContext);
};
