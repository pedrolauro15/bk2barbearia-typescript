import React, { createContext, useState } from "react";
import { auth } from "../services/api";
import { AuthContextData } from "../@types/auth";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (usuario: string, senha: string) => {
    try {
      const response = await auth({ usuario, senha });
      setUser(response.data);
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
