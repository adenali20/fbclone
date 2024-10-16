import {
  useNavigate,
  Link
} from "react-router-dom";
import { } from "react-router-dom"
import React, { useContext, useState, useEffect } from "react";
import { SocketContext } from '../../context/SocketContext'
import { UserContext } from "../../context/UserContext";
import { MessageContext } from "../../context/MessageContext";
import NavBar from '../NavBar'
import { jwtDecode } from "jwt-decode";
import '../login/Login.css'
import { encode } from 'base-64';
import { useDebounce } from 'use-debounce';
import {post,get} from '../../util/httpClient'
import {URI,FBC} from '../../util/Constants'
export default function Login() {

  const [friendRequests,setFriendRequests]=useState([])
  const [receivedList,setReceivedList]=useState([])
  const [sentList,setSentList]=useState([])



  useEffect(()=>{
    getFriends()
  },[])


  const acceptFriend=(value)=>{

    console.log(value);
    
    try {
      get(`acceptFriendRequest/${value.id}/accepted`)
    } catch (error) {
      
    }
    

  }
  const getFriends = () => {


    const jwt=window.sessionStorage.getItem("jwtToken")

    

    fetch(`${URI}/${FBC}/getFriendRequest`, {
      headers: new Headers({
        "Authorization": jwt
      }),
    }).then(response => {

      return response.json();
    }).then(res => {

      setFriendRequests(res)
      // console.log("res ", res);
      setReceivedList(res);

    }).catch(err => {
      console.log(err);

    })
  }

  return <div>
    
    {
      receivedList.length>0?<div className="w3-card w3-round w3-white w3-center">
      <div className="w3-container">
        <p>Friend Request</p>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" style={{"width":"50%"}}/><br/>
        <span>
          {receivedList[0].requestor.firstName} {receivedList[0].requestor.lastName}

        </span>
        <div className="w3-row w3-opacity">
          <div className="w3-half">
            <button className="w3-button w3-block w3-green w3-section" title="Accept" onClick={()=>acceptFriend(receivedList[0])}><i className="fa fa-check"></i></button>
          </div>
          <div className="w3-half">
            <button className="w3-button w3-block w3-red w3-section" title="Decline"><i className="fa fa-remove"></i></button>
          </div>
          {receivedList.length>1?<div> View All({receivedList.length-1})</div>:<div></div>}
         
        </div>
      </div>
    </div>:<div></div>
    }
    



  </div>;
}