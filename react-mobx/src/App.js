import { store, StoreProvider, StoreContext } from "./stores";
import Index from "./layout/Index";

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Index />
    </StoreContext.Provider>
  );
}

export default App;
