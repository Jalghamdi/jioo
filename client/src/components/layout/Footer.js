import React, {Components} from 'react';
import Navbar from "./Navbar";

class Footer extends   Component {
    render () {
        return (
            <nav classname ="Footer Footer-expand-sm navbar-dark bg-dark mb-4">
            <div classname="container">
            <a classname="Footer-brand" href="landing.html">My Social Network</a>
        <button classname="Footer-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span classname="Footer-toggler-icon"></span>
            </button>

            <div classname="collapse Footer-collapse" id="mobile-nav">
            <ul classname="Footer-nav mr-auto">
            <li classname="nav-item">
            <a classname="nav-link" href="profiles.html"> Developers
            </a>
            </li>
            </ul>

            <ul classname="navbar-nav ml-auto">
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
export default Footer;