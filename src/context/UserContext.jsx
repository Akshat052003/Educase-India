import React from 'react'
import { useContext, createContext , useState } from 'react'

const UserContext = createContext()
export const MyProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext