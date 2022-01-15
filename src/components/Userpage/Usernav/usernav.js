import axios from "axios";
import React from "react";
import "./usernav.css";

function Usernav(){

    // const logout = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:8000/logout")
    //     .then( res => {
    //         console.log(res);
    //     })
    // }

    return (
    <nav className="navbar navbar-expand-md ind">

        <ul className="navbar-nav ml-3">
            <a className="navbar-brand txt" href="UserBookticket">Air Ticket</a>
        </ul>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto mr-3">
                <li className="nav-item">
                    <a className="nav-link txt" href="Bookticket">Book Ticket</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="UserFlightstatus">Flight Status</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="Previousbooking">Pervious Booking</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="/">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Usernav;