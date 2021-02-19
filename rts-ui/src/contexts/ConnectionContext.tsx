import { createContext } from 'react';


const ConnectionContext = createContext({
    connectedCtx: true,
    setConnectedCtx: (message: string) => { },
    sendMessage: (message: string) => { }
})

export default ConnectionContext;
