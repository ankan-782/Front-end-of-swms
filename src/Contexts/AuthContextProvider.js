import React, { createContext } from 'react';
import useFunctionalityOfAuthenticationAndDatabase from '../Hooks/useFunctionalityOfAuthenticationAndDatabase';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const authenticationFunctionalityContexts = useFunctionalityOfAuthenticationAndDatabase();
    return (
        <AuthContext.Provider value={authenticationFunctionalityContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;