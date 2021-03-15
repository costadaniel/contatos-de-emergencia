import React, { useContext, useState } from "react";

const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextTypes;
};

type Props = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<Object | null>(
    null
  );

  const updateAuthenticatedUser = (user: Object | null) => {
    setAuthenticatedUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, updateAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
