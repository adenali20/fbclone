import React from "react";
import {
  Link
} from "react-router-dom";
export default function Register() {
    return <div>
    <h2>Register</h2>
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