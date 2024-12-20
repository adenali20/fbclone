import './App.css';
import Home from './component/Home'
import Login from './component/login/Login'
import Register from './component/Register'
import SearchUser from './component/searchUser/SearchUser'
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
  { path: "/searchUser",element: <SearchUser/>}
]);

export default function App() {


  const [user,setUser]=useState("adesh")
  const socket = socketIO.connect('http://159.203.107.86:30002');

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);





  useEffect(()=>{
    console.log("<>>>>>",window.sessionStorage.getItem("jwtToken"));
    

  },[])


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
      <div className="w3-container w3-content" style={{maxWidth:"1400px",marginTop:"80px"}}>
        <RouterProvider router={router}>
        
        
         
        </RouterProvider>
        </div>


       
      </div>
      </MessageContext.Provider>
      </UserContext.Provider>
      </SocketContext.Provider>
    // </Router>
   
  );
}


