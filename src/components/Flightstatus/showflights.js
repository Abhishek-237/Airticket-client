import React from "react";
import Homenav from "../Homepage/Homenav/homenav";
import Usernav from "../Userpage/Usernav/usernav";

function Showflight(props){

    let nav;
    if(props.isloggedin == "true"){
        nav = <Usernav/>
    }else{
        nav = <Homenav/>
    }

    return(
        <>
            {nav}
            <div className="container">
                <h2 className='text-center m-4'> Flight Status </h2>
                <table className="table bg-white">
                    <thead>
                        <tr>
                            <th scope="col">FLIGHT Code</th>
                            <th scope="col">FROM</th>
                            <th scope="col">TO</th>
                            <th scope="col">DATE</th>
                            <th scope="col">Departuretime</th>
                            <th scope="col">Arrivaltime</th>
                            <th scope="col">FARE</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default Showflight;