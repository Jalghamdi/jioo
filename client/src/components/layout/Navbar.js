import React, {Components} from 'react';

class Navbar extends   Component {
    render () {
        return (
            <nav classname ="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div classname="container">
            <a classname="navbar-brand" href="landing.html">My Social Network</a>
        <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span classname="navbar-toggler-icon"></span>
            </button>

            <div classname="collapse navbar-collapse" id="mobile-nav">
            <ul classname="navbar-nav mr-auto">
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
export default Navbar;