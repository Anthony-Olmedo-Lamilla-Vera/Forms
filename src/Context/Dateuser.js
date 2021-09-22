import React, { createContext, useState } from "react";
export const contextUSer = createContext();
export default function Dateuser({ children }) {
  const [DatesUser, setDatesUser] = useState([]);
  const [User, setUser] = useState(false);
  const [Token, setToken] = useState("");
  return (
    <contextUSer.Provider
      value={{ Token, setToken, User, setUser, DatesUser, setDatesUser }}
    >
      {children}
    </contextUSer.Provider>
  );
}
