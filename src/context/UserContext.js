import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const username = localStorage.getItem('username')
        console.log(username)
        if(username){
            setUser(username)
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => {
    return useContext(UserContext)
}

export default UserProvider