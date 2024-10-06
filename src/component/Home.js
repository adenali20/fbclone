import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from '../context/SocketContext'
import { UserContext } from "../context/UserContext";
import { MessageContext } from "../context/MessageContext";
import NavBar from '../component/NavBar'
import {
  // BrowserRouter as Router,
  // Route,
  useNavigate,
  Link
} from "react-router-dom";
import Post from "./post/Post";
export default function Home({ messages }) {
  const navigate = useNavigate()
  const socket = useContext(SocketContext)

  const userObj = useContext(UserContext)
  const messageObj = useContext(MessageContext)

  useEffect(() => {

    let jwtToken = window.sessionStorage.getItem("jwtToken")
    if (jwtToken == null || jwtToken == undefined) {
      navigate("/login")
    }
  }, [])

  const [value, setValue] = useState("");
  const sendMessage = () => {


    socket.emit('chat message', {
      text: value,
      name: "aden",
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
    console.log("sent");
    setValue("")

  }

  return <>
    <NavBar />

    <div className="w3-row">
      {/* <!-- Left Column --> */}
      <div className="w3-col m3 w3-hide-small w3-hide-medium" >
        <div className="w3-card w3-round w3-white">
          <div className="w3-container">
            <h4 className="w3-center">My Profile</h4>
            <p className="w3-center"><img src="/w3images/avatar3.png" className="w3-circle" style={{ "height": "106px", "width": "106px" }} alt="Avatar" /></p>
            <hr />
            <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Designer, UI</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
            <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
          </div>
        </div>
      </div>
      {/* <!-- End Left Column --> */}

      <div className="w3-col m7">
        <div className="w3-row-padding">
          <div className="w3-col m12">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding">

                <input value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="write something ..." />
                <button type="button" className="w3-button w3-theme"

                  onClick={() => sendMessage()}><i className="fa fa-pencil"></i>  Post</button>
              </div>
            </div>
            
          </div>
          
          {/* {
            messageObj.map(e => {
              return <h3>{e.text}</h3>
            })
          } */}
        </div>
        {
            messageObj.map(e => {
              return  <Post post={e}/>
            })
          }
          
       

      </div>


      {/* <!-- Right Column --> */}
    <div className="w3-col m2">
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Upcoming Events:</p>
          <img src="/w3images/forest.jpg" alt="Forest" style={{"width":"100%;"}}/>
          <p><strong>Holiday</strong></p>
          <p>Friday 15:00</p>
          <p><button className="w3-button w3-block w3-theme-l4">Info</button></p>
        </div>
      </div>
      <br/>
      
      <div className="w3-card w3-round w3-white w3-center">
        <div className="w3-container">
          <p>Friend Request</p>
          <img src="/w3images/avatar6.png" alt="Avatar" style={{"width":"50%"}}/><br/>
          <span>Jane Doe</span>
          <div className="w3-row w3-opacity">
            <div className="w3-half">
              <button className="w3-button w3-block w3-green w3-section" title="Accept"><i className="fa fa-check"></i></button>
            </div>
            <div className="w3-half">
              <button className="w3-button w3-block w3-red w3-section" title="Decline"><i className="fa fa-remove"></i></button>
            </div>
          </div>
        </div>
      </div>
      <br/>
      
      <div class="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p>ADS</p>
      </div>
      <br/>
      
      <div class="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i class="fa fa-bug w3-xxlarge"></i></p>
      </div>
      
    {/* <!-- End Right Column --> */}
    </div>

    </div>

  </>
}