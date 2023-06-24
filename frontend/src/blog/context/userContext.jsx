/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem("userData"));
    if (!newUser) setUser(null);
    else setUser(newUser);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default function GetUser() {
  const user = useContext(UserContext);

  return user;
}

export { UserContext, UserContextProvider, GetUser };
