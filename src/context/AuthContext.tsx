import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { User } from "../types/Auth";

interface IAuthContext {
  authenticatedUser: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] =
    useLocalStorage<User | null>("spotify-player.user", {} as User);

  const login = (user: User) => setAuthenticatedUser(user);
  const logout = () => localStorage.removeItem("spotify-player.user");

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, AuthContext, useAuthContext };
