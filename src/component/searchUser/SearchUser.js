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

import {post} from '../../util/httpClient'


export default function SearchUser() {
  const [searchValue, setSearchValue] = useState('')
  const [foundUsers, setFoundUsers] = useState([])
  const [debounceValue] = useDebounce(searchValue, 1000);



  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const socket = useContext(SocketContext)

  const userObj = useContext(UserContext)
  const messageObj = useContext(MessageContext)

  useEffect(() => {
    // console.log(searchValue);
    console.log("#v#", debounceValue);

    searchUser(debounceValue)
  }, [debounceValue])



  const searchUser = (value) => {
    const jwt = window.sessionStorage.getItem("jwtToken")
    if (debounceValue === '') {
      setFoundUsers([])
      return
    }

    fetch(`http://adenmali.com/api/fbc/post/${value}`, {
      headers: new Headers({
        "Authorization": jwt
      }),
    }).then(response => {

      return response.json();
    }).then(res => {
      console.log("res ", res);

      setFoundUsers(res)
    }).catch(err => {
      console.log(err);

    })
  }

  const sendFriendRequest = (value) => {
    const jwt = window.sessionStorage.getItem("jwtToken")
    try {
      post({"acceptorUserName":value.userName},'sendFriendRequest')
      
    } catch (error) {
      
    }

    // fetch("http://localhost:8080/api/fbcpost/sendFriendRequest", {
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //     "Authorization": jwt
    //   }),
    //   method: "POST",
    //   body:JSON.stringify({"acceptorUserName":value.userName}) ,
    //   // body: '{"foo": "bar"}'
    // }).then(response => {

    //   return response.json();
    // }).then(res => {
    //   console.log("res ", res);

    //   // setFoundUsers(res)
    // }).catch(err => {
    //   console.log(err);

    // })
  }




  return <div>
    <NavBar />
    <div class="loginbody">
      <div class="container">
        {/* <form> */}
        <div class="row">

          <div class="col">
            <input type="text" name="username" placeholder="Search user" required value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            {/* <button onClick={()=>handleLogin(userName,password)} value="Login">Search user</button> */}
            <div>{
              foundUsers.map(e => {
                return <li>{e.firstName} {e.lastName}<button onClick={() => sendFriendRequest(e)}>Send Friend Request</button></li>
              })
            }</div>
          </div>

        </div>

      </div>

    </div>


    {/* <div class="bottom-container">
        <div class="row">
          <div class="col">
            <a href="#" style={{"color":"white"}} class="btn">Sign up</a>
          </div>
          <div class="col">
            <a href="#" style={{"color":"white"}} class="btn">Forgot password?</a>
          </div>
        </div>
      </div> */}

  </div>;
}