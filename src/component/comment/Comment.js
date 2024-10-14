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
 
  const[showComment,setShowComment]=useState(false);

  const [value, setValue] = useState("");
    
  
    return   <div className="w3-row-padding">
    <div className="w3-col m12">
      <div className="w3-card w3-round w3-white">
        <div className="w3-container w3-padding">

          <input value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="write something ..." />
          <button type="button" className="w3-button w3-theme"

            onClick={() => alert('hey')}><i className="fa fa-pencil"></i>  Post</button>
        </div>
      </div>
      
    </div>
    
   
  </div>
  }