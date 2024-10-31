import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from '../context/SocketContext'
import { UserContext } from "../context/UserContext";
import { MessageContext } from "../context/MessageContext";
import NavBar from '../component/NavBar'

import Friend from './friends/Friends'
import FriendRequest from './FriendRequests/FriendRequest'
import {
  // BrowserRouter as Router,
  // Route,
  useNavigate,
  Link
} from "react-router-dom";
import Post from "./post/Post";
import {URI,FBC} from '../util/Constants'
import {get,post} from '../util/httpClient'
export default function Home({ messages }) {
  const navigate = useNavigate()
  const [posts,setPosts]=useState([])
  const socket = useContext(SocketContext)

  const userObj = useContext(UserContext)
  const messageObj = useContext(MessageContext)

  useEffect(() => {

    let jwtToken = window.sessionStorage.getItem("jwtToken")
    if (jwtToken == null || jwtToken == undefined) {
      navigate("/login")
    }else{

    }
  }, [])

  
  useEffect(()=>{
    getPosts()
  },[])


  const getPosts = () => {


    const jwt=window.sessionStorage.getItem("jwtToken")

    fetch(`${URI}/${FBC}/getPost`, {
      headers: new Headers({
        "Authorization": jwt
      }),
    }).then(response => {

      return response.json();
    }).then(res => {

      // setFriendRequests(res)
      setPosts(res)
      console.log("res ", res);
      // setReceivedList(res);

    }).catch(err => {
      console.log(err);

    })
  }

  const [value, setValue] = useState("");
  const sendMessage = () => {

    let userName=window.sessionStorage.getItem("userName");

    socket.emit('chat message', {
      text: value,
      name: userName,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
    console.log("sent");
    setValue("")

  }

  const makePost = () => {

    let userName=window.sessionStorage.getItem("userName");

    try {
      post({
        "content":value,
        "parentId":"",
        "mainPostId":"",
        "inks":[],
        "isMain":true,
        "isComment":false
      },"makePost")
      setValue("")
  
    } catch (error) {
      console.log(error)
    }
   
    

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

                  onClick={() => makePost()}><i className="fa fa-pencil" style={{backgroundColor:"green"}}></i>  Post</button>
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
            posts.map(e => {
              console.log("MMMMM...",e);
              
              return  <Post post={e}/>
            })
          }
          
       

      </div>


      {/* <!-- Right Column --> */}
    <div className="w3-col m2">
      <FriendRequest/>
      
      
        <Friend/>
      <br/>
      
      
    {/* <!-- End Right Column --> */}
    </div>

    </div>

  </>
}