import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserContext from './contexts/UserContext';
import ConnectionContext from './contexts/ConnectionContext';
import { useState } from 'react'

function App() {

  const [userName, setUserName] = useState("noname");
  const [connected, setConnected] = useState(false);

  const toggleConnected = () => {
    setConnected(!connected);
  }

  const updateUserName = (name: string) => {
    setUserName(name);
  }

  return (
    <div className="App">
      <ConnectionContext.Provider value={{ connectedCtx: connected, setConnectedCtx: toggleConnected }}>
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
