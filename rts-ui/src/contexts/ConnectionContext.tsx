import { createContext } from 'react';


const ConnectionContext = createContext({
    connectedCtx: true,
    setConnectedCtx: () => { }
})

export default ConnectionContext;
