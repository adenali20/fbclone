import {
  // BrowserRouter as Router,
  Switch,
  // Route,
  Link
} from "react-router-dom";
import React from "react";
import NavBar from '../component/NavBar'
export default function Login() {
    return <div>
       <NavBar/>
      <h2>Login</h2>
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
      </div>;
  }