import React from "react";
import "./adminnav.css";

function Adminnav(){
    return (
    <nav className="navbar navbar-expand-md ind">

        <ul className="navbar-nav ml-3">
            <a className="navbar-brand txt" href="Scheduleflight">Air Ticket</a>
        </ul>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto mr-3">
                <li className="nav-item">
                    <a className="nav-link txt" href="Scheduleflight">Schedule Flights</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="#">Update Flights</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="/">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Adminnav;