import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppProvider.Provider value={{ val1: "brr" }}>
      {children}
    </AppProvider.Provider>
  );
};
