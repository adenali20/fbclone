import React,{useContext,useState} from "react";
import {SocketContext} from '../context/SocketContext'
import { UserContext } from "../context/UserContext";
import { MessageContext } from "../context/MessageContext";
import NavBar from '../component/NavBar'
import {
    // BrowserRouter as Router,
    // Route,
    Link
  } from "react-router-dom";
export default function Home({messages}) {

    const socket=useContext(SocketContext)

    const userObj=useContext(UserContext)
    const messageObj=useContext(MessageContext)

  
    const[value, setValue] = useState(""); 
    const sendMessage=()=>{
        
      
      socket.emit('chat message', {
          text: value,
          name: "aden",
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id,
        });
        console.log("sent");
        
    }
   
    return <div>
         <NavBar/>
          <div classNameName="w3-col m7">
    {userObj.user}
                <div className="w3-row-padding">
                    <div classNameName="w3-col m12">
                        <div className="w3-card w3-round w3-white">
                        <div className="w3-container w3-padding">
                            <h6 className="w3-opacity">Social Media template by w3.css</h6>
                            <input value={value} onChange={(e) => {setValue(e.target.value)}} />
                            {/* <p contenteditable="true" className="w3-border w3-padding" >Status: Feeling Blue</p> */}
                            <button type="button" className="w3-button w3-theme"
                            
                            onClick={()=>sendMessage()}><i className="fa fa-pencil"></i>  Post</button> 
                        </div>
                        </div>
                    </div>
                </div>
                <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
          </ul>
            </div>
            {
                messageObj.map(e=>{
                    return <h3>{e.text}</h3>
                })
            }
    </div>
  }