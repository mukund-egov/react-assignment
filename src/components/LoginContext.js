import React, { createContext, useState } from 'react';

const LoginContext = createContext();


export const LoginProvider = ({children}) => {
    const [loginData, setLoginData] = useState(null);

    return (
        <LoginContext.Provider value={{ loginData, setLoginData }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContext;
