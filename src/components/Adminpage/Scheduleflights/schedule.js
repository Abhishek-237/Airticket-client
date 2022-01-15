import React from "react";
import axios from "axios";
import {useState} from "react";
import Adminnav from "../Adminnav/adminnav.js";

function Scheduleflight(){

    const [flight, setFlight] = useState({
		From : "",
		To : "",
        Date : "",
        Departuretime : "",
        Arrivaltime : "",
        Flightcode : "",
        Flightcost : ""
	});

    const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setFlight({
			...flight,
			[name] : value
		})
		console.log(name, value);
	};

    const addflight = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/Addflight", flight)
        .then( (res) => {
            if( res.data == "success"){
                console.log(res)
                alert("Flight added successfully")
                setFlight({
                    From : "",
                    To : "",
                    Date : "",
                    Departuretime : "",
                    Arrivaltime : "",
                    Flightcode : "",
                    Flightcost : ""
                })
            }
        })
    };
    
    return (
        <>
            <Adminnav/> 
            <div className="container mt-5 pt-5">
                <form method="Post" className="col-7 bg-white border mx-auto">
                    <h2 className="mt-5 text-center headbb">Schedule Flights</h2>
                    <hr className="bg-primary"></hr>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <input type="text" className="bb" name="From" placeholder="From" 
                            value={flight.From} onChange={handleChange} required/>
                        </div>
                        <div className="col">
                            <input type="text" className="bb" name="To" placeholder="To" 
                            value={flight.To} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <input type="date" className="bb bbwidth" name="Date"
                             value={flight.Date} onChange={handleChange} required/>
                        </div>
                        <div className="col">
                            <input type="date" className="bb bbwidth" name="returndate" disabled/>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <input type="time" className="bb bbwidth" name="Departuretime" 
                            value={flight.Departuretime} onChange={handleChange} required/>
                        </div>
                        <div className="col">
                            <input type="time" className="bb bbwidth" name="Arrivaltime" 
                            value={flight.Arrivaltime} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <input type="text" className="bb bbwidth" name="Flightcode" placeholder="Flight code" 
                            value={flight.Flightcode} onChange={handleChange} required/>
                        </div>
                        <div className="col">
                            <input type="text" className="bb bbwidth" name="Flightcost" placeholder="Flight cost"
                            value={flight.Flightcost} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="row my-5 justify-content-center">
                        <button type="submit" className="btn btn-primary btn" onClick={addflight}>Add Flight</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Scheduleflight;

