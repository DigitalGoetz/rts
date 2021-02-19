import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserContext from './contexts/UserContext';
import ConnectionContext from './contexts/ConnectionContext';
import { useState, useRef } from 'react'
import useSocket from 'use-socket.io-client';

function App() {

  let ws: WebSocket;

  const [userName, setUserName] = useState("noname");
  const [connected, setConnected] = useState(false);

  const startConnection = (name: string) => {
    setConnected(true);
    ws = new WebSocket("ws://localhost:8999/userws");

    ws.send(name)

    ws.onmessage = (data) => {
      console.log("WS received " + data)
    };
  }

  const sendMessage = (msg: string) => {
    ws.send(msg);
  }

  const updateUserName = (name: string) => {
    setUserName(name);
  }

  return (
    <div className="App">
      <ConnectionContext.Provider value={{ connectedCtx: connected, setConnectedCtx: startConnection, sendMessage: sendMessage }}>
        <UserContext.Provider value={{ userNameCtx: userName, updateUserNameCtx: updateUserName }}>
          <Header></Header>
          <MainContent></MainContent>
          <Footer></Footer>
        </UserContext.Provider>
      </ConnectionContext.Provider>
    </div>
  );
}

export default App;
