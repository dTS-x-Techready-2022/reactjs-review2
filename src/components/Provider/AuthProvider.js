import { createContext, useEffect, useState } from "react";
import { listener } from "../../utils/firebase/listener";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // set loading true
    listener((val) => {
      const pathname = window.location.pathname;
      if (val) {
        if (pathname !== "/") {
          window.location.replace("/");
          // set loading false
        }
      } else {
        if (pathname === "/") {
          window.location.replace("/signup");
          // set loading false
        }
      }
    });
  }, [user]);

  const onSetUser = (token) => {
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: onSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
