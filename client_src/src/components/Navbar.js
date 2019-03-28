import React, {Component} from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="blue darken-3">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center ">Meetupz</a>
                    <button style={buttonStyle} data-activates="main-menu" className="button-collapse show-on-large sidenav-trigger">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className="right show-on-large">
                        <li><Link to="/"><i className="fa fa-users"></i> Meetups</Link></li>         
                    </ul>
                    <ul className="sidenav" id="main-menu">
                        <li><Link to="/"><i className="fa fa-users"></i> Meetups</Link></li>  
                        <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Add Meetup</Link></li>  
                        <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li> 
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

const buttonStyle = {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    outline: "none"
};
export default Navbar;