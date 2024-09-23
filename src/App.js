import './App.css';
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import socketIO from 'socket.io-client';
import React from "react";
import { SocketContext } from './context/SocketContext';
import { UserContext } from './context/UserContext';
import { MessageContext } from './context/MessageContext';

import { useEffect , useState } from 'react';
import {createBrowserRouter ,  RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  { path: "/",element: <Home/>},
  { path: "/login",element: <Login/>},
  { path: "/register",element: <Register/>},
]);

export default function App() {


  const [user,setUser]=useState("adesh")
  const socket = socketIO.connect('http://localhost:4000');

  // const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);







  useEffect(() => {
    function onConnect() {
     
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
      console.log("Message received : ", value);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('chat messagew', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('chat messagew', onFooEvent);
    };
  }, []);
  
  return (
    
    // <Router>
      <SocketContext.Provider  value={socket}>
        <UserContext.Provider value={{user,setUser}}>
        <MessageContext.Provider value={[...fooEvents]}>
      <div>
       
        <RouterProvider router={router}>
        <div className="w3-container w3-content" style={{maxWidth:"1400px",marginTop:"80px"}}>
        
          {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/register"  component={Register} />
        
            
          </Switch>  */}
        </div>
        </RouterProvider>

       
      </div>
      </MessageContext.Provider>
      </UserContext.Provider>
      </SocketContext.Provider>
    // </Router>
   
  );
}


