import {
  useNavigate ,
  Link
} from "react-router-dom";
import {} from "react-router-dom"
import React,{useContext,useState} from "react";
import {SocketContext} from '../../context/SocketContext'
import { UserContext } from "../../context/UserContext";
import { MessageContext } from "../../context/MessageContext";    
import NavBar from '../NavBar'
import { jwtDecode } from "jwt-decode";
import {encode} from 'base-64';


export default function Post({post}) {
 
  console.log("#",post);
  
    return <div className="w3-container w3-card w3-white w3-round w3-margin"><br/>
    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"60px"}}/>
    <span className="w3-right w3-opacity">2 min</span>
    <h4>John Doe</h4><br/>
    <hr className="w3-clear"/>
    <p>{post?post.text:"random message"}</p>
      <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
        {/* <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/lights.jpg" style={{"width":"100%"}} alt="Northern Lights" className="w3-margin-bottom"/>
        </div>
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/nature.jpg" style={{"width":"100%"}} alt="Nature" className="w3-margin-bottom"/>
      </div> */}
    </div>
    <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>  Like</button> 
    <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>  Comment</button> 
  </div>
  }