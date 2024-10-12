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
import '../login/Login.css'
import {encode} from 'base-64';


export default function Login() {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const socket=useContext(SocketContext)

    const userObj=useContext(UserContext)
    const messageObj=useContext(MessageContext)
    console.log(messageObj);
    


const handleLogin=(un,pwd)=>{
  
  fetch("http://localhost:8081/api/users/login", {
    headers: new Headers({
      "Authorization": `Basic ${encode(`${un}:${pwd}`)}`
    }),
  }).then(response => {
    if (!response.ok) throw new Error(response.status);
    
    window.sessionStorage.setItem("jwtToken",response.headers.get("Authorization"));
    window.sessionStorage.setItem("userName",un);
    navigate(`/`)

    return response;
  })
}

    return <div>
       <NavBar/>
       <br/>
       <br/>
       <Link to="/">Home</Link>

       <div class="loginbody">
          <h2>Responsive Social Login Form</h2>
          <p>Resize the browser window to see the responsive effect. When the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other.</p>
          
          <div class="container">
            {/* <form> */}
              <div class="row">
                <h2 style={{textAlign:"center"}}>Login with Social Media or Manually</h2>
                <div class="vl">
                  <span class="vl-innertext">or</span>
                </div>
                <div class="col">
                  <a href="#" class="fb btn">
                    <i class="fa fa-linkedin fa-fw"></i> Login with LinkedIn
                  </a>
                  <a href="#" class="twitter btn">
                    <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                  </a>
                  <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                    </i> Login with Google+
                  </a>
                </div>

                <div class="col">
                  <div class="hide-md-lg">
                    <p>Or sign in manually:</p>
                  </div>

                  <input type="text" name="username" placeholder="Username" required value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                  <input type="password" name="password" placeholder="Password" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <button onClick={()=>handleLogin(userName,password)} value="Login">Login</button>
                </div>
                
              </div>
            
          </div>

       </div>

       <div class="bottom-container">
        <div class="row">
          <div class="col">
            <a href="#" style={{"color":"white"}} class="btn">Sign up</a>
          </div>
          <div class="col">
            <a href="#" style={{"color":"white"}} class="btn">Forgot password?</a>
          </div>
        </div>
      </div>
          
      </div>;
  }