import { useState } from "react"
import UserContext from "./UserContext";



const UserContextProvider = ({children}) => {
    const [allUser,setAllUsers] = useState([]);

    return(<UserContext.Provider value={{allUser,setAllUsers}}>
        {children}

    </UserContext.Provider>)

}

export default UserContextProvider;