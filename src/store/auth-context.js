import { createContext } from "react";

const AuthContext = createContext({
  //we can leave this blank but if we add the corresponding values, auto compilation will be enabled.
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export default AuthContext;
