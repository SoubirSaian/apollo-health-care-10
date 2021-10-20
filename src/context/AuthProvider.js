import React, { createContext } from 'react';
import useFireBase from '../hooks/useFireBase';

    //    AuthProvider component 
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFireBase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;