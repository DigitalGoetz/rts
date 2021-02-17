import './SessionControls.css';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import ConnectionContext from '../contexts/ConnectionContext';
import { allowedNodeEnvironmentFlags } from 'process';

function SessionControls() {

  let userName;

  const [inputValue, setInputValue] = useState("noname");
  const inputChange = (evt: any) => {
    setInputValue(evt.target.value);
  }

  const userContext = useContext(UserContext);
  const connectionContext = useContext(ConnectionContext);
  const startConnection = () => {
    userContext.updateUserNameCtx(inputValue);
    connectionContext.setConnectedCtx();
  }

  const [usernameComponent, setUsernameComponent] = useState(userName = <div><input type="text" onChange={inputChange}></input><button onClick={startConnection}>Connect</button></div>);

  useEffect(() => {
    if (connectionContext.connectedCtx) {
      setUsernameComponent(<div>{inputValue}</div>)
    }
  }, [connectionContext]);

  return (
    <div className="SessionControls">
      <label>User: </label>
      {usernameComponent}
    </div>
  );
}

export default SessionControls;
