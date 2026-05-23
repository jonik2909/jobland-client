import React, { createContext, type ReactNode } from "react";

interface GlobalInterface {
  name: string;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined,
);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const name = "JOBLAND";
  return (
    <GlobalContext.Provider value={{ name }}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
