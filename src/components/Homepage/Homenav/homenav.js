import React from "react"
import "./homenav.css"

function Homenav(){
    return (
    <nav className="navbar navbar-expand-md ind">

        <ul className="navbar-nav ml-3">
            <a className="navbar-brand txt" href="/">Air Ticket</a>
        </ul>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto mr-3">
                <li className="nav-item">
                    <a className="nav-link txt" href="Flightstatus">Flight Status</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="Adminlogin">Admin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link txt" href="Userlogin">User</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Homenav;