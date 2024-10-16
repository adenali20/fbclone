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

import {get,post} from '../../util/httpClient'

import {URI,FBC} from '../../util/Constants'


export default function Login() {

  const [friends,setFriends]=useState([])



  useEffect(()=>{
    getFriends()
  },[])


  const getFriends = () => {


    // await get(`getFriends`)
    // .then(res=>{
    //   setFriends(res)

    // }).catch(err=>{
    //   setFriends([])

    //   console.log("########",err);
      
    // });

    const jwt = window.sessionStorage.getItem("jwtToken")
    fetch(`${URI}/${FBC}/getFriends`, {
      headers: new Headers({
      "Authorization": jwt
    }),}).then(response => {

      return response.json();
    }).then(res => {

      setFriends(res)
      console.log("res ", res);

    }).catch(err => {
      console.log(err);

    })
  }

  return <div>
    {/* <NavBar /> */}
    <div class="loginbody">
      <p>Contacts</p>
    
        {
          friends.filter(e=>e.friend===true).map((e)=>{
            return <div id={e.friendId}>{e.firstName} {e.lastName}</div>
          })
        }
      
    </div>



  </div>;
}