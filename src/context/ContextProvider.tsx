import React, { createContext, useState, type ReactNode } from "react";
import type { Member } from "../types/member";
import Cookies from "universal-cookie";

interface GlobalInterface {
  name: string;
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined,
);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData");

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData"))
      : null,
  );

  console.log("=== verify ===");

  const name = "JOBLAND";
  return (
    <GlobalContext.Provider value={{ name, authMember, setAuthMember }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
