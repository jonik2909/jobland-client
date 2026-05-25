import { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("usGlobals must be used within a GlobalsProvider");

  return context;
};
