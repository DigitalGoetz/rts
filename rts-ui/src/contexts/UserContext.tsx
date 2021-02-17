import { createContext } from 'react';


const UserContext = createContext({
    userNameCtx: "noname",
    updateUserNameCtx: (name: string) => { }
})

export default UserContext;
