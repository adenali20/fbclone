
import React, { useEffect } from "react";
import {
    useNavigate,
    Link
} from "react-router-dom";

function App() {

    useEffect(() => {
        console.log("mounting");

    }, [])
    return (
        <div className="App">

            <div class="w3-top">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
                    {/* <a href="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Logo</a> */}
                    <div className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
                        <Link to="/" ><i className="fa fa-home w3-margin-right"> </i></Link>
                    </div>
                    <a href="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe"></i></a>
                    <a href="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i className="fa fa-user"></i></a>
                    <a href="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i className="fa fa-envelope"></i></a>
                    <div className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
                        <Link to="/searchUser" ><i className="fa fa-search"> </i></Link>
                    </div>
                    

                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>
                        <div class="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
                            <a href="/login" className="w3-bar-item w3-button">One new friend request</a>
                            <a href="/login" className="w3-bar-item w3-button">John Doe posted on your wall</a>
                            <a href="/login" className="w3-bar-item w3-button">Jane likes your post</a>
                        </div>
                    </div>
                    <div className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">
                        {window.sessionStorage.getItem("userName")}
                    </div>
                    <a href="/login" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
                        <img src="/w3images/avatar2.png" className="w3-circle" style={{ height: "23px", width: "23px" }} alt="Avatar" />
                    </a>
                </div>
            </div>

            {/* <!-- Navbar on small screens --> */}
            <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
                <a href="/login" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
                <a href="/login" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
                <a href="/login" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
                <a href="/login" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
            </div>
        </div>
    );
}

export default App;
