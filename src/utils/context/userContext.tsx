import React, {createContext, useState} from "react";

type TokenContextType = {
    setToken: (val: string) => void,
    token: string
}
export const UserContext = createContext({} as TokenContextType);

const TokenContextProvider: React.FC = (props) => {
    const [token, setToken] = useState('')
    return <UserContext.Provider value={{token, setToken}}>
        {props.children}
    </UserContext.Provider>
};


export default TokenContextProvider
