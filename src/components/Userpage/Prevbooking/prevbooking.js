import React from "react";
import Usernav from "../Usernav/usernav.js";

function Previousbooking() {

    return(
        <>
            <Usernav/>
            <div className="container pt-5 txt">
                    <h2 className='text-center m-4'> Previous Bookings </h2>
                    <table className="table bg-white">
                        <thead>
                            <tr>
                                <th scope="col">FLIGHT</th>
                                <th scope="col">FROM</th>
                                <th scope="col">TO</th>
                                <th scope="col">DATE</th>
                                <th scope="col">TAKEOFF TIME</th>
                                <th scope="col">DURATION</th>
                                <th scope="col">FARE</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {upcomingFlights.map((flight, index) => (
                                <tr data-index={index}>
                                    <td>{flight.FlightNo}</td>
                                    <td>{flight.From}</td>
                                    <td>{flight.To}</td>
                                    <td>{flight.Date_}</td>
                                    <td>{flight.TakeOff_Time}</td>
                                    <td>{flight.Duration}</td>
                                    <td>{flight.Fare}</td>

                                </tr>
                            ))}

                        </tbody> */}
                    </table>
                    {/* <div className='text-center mt-4'>
                        <button className="btn btn-primary btn-block" type="submit" 
                            id="prevBooking"  >Previous Booking</button>
                    </div> */}
                </div>
        </>
    )
}

export default Previousbooking;