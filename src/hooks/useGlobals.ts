import { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

export const useGlobals = () => {
  return useContext(GlobalContext);
};
