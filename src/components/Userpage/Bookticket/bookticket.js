import React from "react";
import Usernav from "../Usernav/usernav";
import "../../form.css";
import "./bookticket.css";

function Bookticket(props){
    
    
    return (
        <>
            <Usernav/> 
            <div className="container mt-5 pt-5">
                <form method="Post" className="col-7 bg-white border mx-auto">
                    <h2 className="mt-5 text-center headbb">Book Ticket</h2>
                    <hr className="bg-primary"></hr>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-3">
                            <input type="radio" id="oneway" name="ticket" value="Oneway" />
                            <label for="oneway" className="ml-1">One Way</label>
                        </div>
                        <div className="col-3">
                            <input type="radio" id="roundtrip" name="ticket" value="Roundtrip" />
                            <label for="roundtrip" className="ml-1">Round Trip</label>
                        </div>
                        <div className="col-3">
                            <input type="radio" id="multicity" name="ticket" value="Multicity" />
                            <label for="multicity" className="ml-1">Multicity</label>
                        </div>
                    </div>
                    <div className="row mt-4 text-center">
                        <div className="col">
                            <input type="text" className="bb" name="from" placeholder="From"/>
                        </div>
                        <div className="col">
                            <input type="text" className="bb" name="from" placeholder="To"/>
                        </div>
                    </div>
                    <div className="row mt-4 text-center">
                        <div className="col">
                            <input type="date" className="bb bbwidth" name="departuredate"/>
                        </div>
                        <div className="col">
                            <input type="date" className="bb bbwidth" name="returndate"/>
                        </div>
                    </div>
                    <div className="row mt-4 text-center">
                        <div className="col">
                            <input type="number" className="bb" name="Passengers" placeholder="1"/>
                        </div>
                        <div className="col">
                            <select id="class" className="bb bbwidth" name="class">
                                <option value="economy">Economy</option>
                                <option value="prmeconomy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First</option>
                            </select>
                        </div>
                    </div>
                    <div className="row my-5 justify-content-center">
                        <button type="submit" className="btn btn-primary btn">Search Flight</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Bookticket;