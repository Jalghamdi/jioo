import React, {Components} from 'react';
import Navbar from "./Navbar";

class Landing extends   Component {
    render () {
        return (
            <nav classname ="Landing Landing-expand-sm navbar-dark bg-dark mb-4">
            <div classname="container">
            <a classname="Landing-brand" href="Landing.html">My Social Network</a>
        <button classname="Landing-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span classname="Landing-toggler-icon"></span>
            </button>

            <div classname="collapse Landing-collapse" id="mobile-nav">
            <ul classname="Landing-nav mr-auto">
            <li classname="nav-item">
            <a classname="nav-link" href="profiles.html"> Developers
            </a>
            </li>
            </ul>

            <ul classname="Landing-nav ml-auto">
            <li classname="nav-item">
            <a classname="nav-link" href="register.html">Sign Up</a>
        </li>
        <li classname="nav-item">
            <a classname="nav-link" href="login.html">Login</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>

    );
    }
}
export default Landing;