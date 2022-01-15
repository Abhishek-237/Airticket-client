import React from "react";
import Homenav from "../Homepage/Homenav/homenav";
import Usernav from "../Userpage/Usernav/usernav";

function Flightstatus(props){

    let nav;
    if(props.isloggedin == "true"){
        nav = <Usernav/>
    }else{
        nav = <Homenav/>
    }

    return(
        <>  
            {nav}
            <div className="container mt-5 pt-5">
                <form method="POST" className="col-7 bg-white border m-auto">
                    <h2 className="mt-5 text-center">Flight Status</h2>
                    <hr className="bg-primary"></hr>
                    <div className="row mt-5 text-center">
                        <div className="col">
                            <input type="text" className="bb" name="departing" placeholder="Departing"/>
                        </div>
                        <div className="col">
                            <input type="text" className="bb" name="arriving" placeholder="Arriving"/>
                        </div>
                    </div>
                    <div className="row mt-md-5 text-center">
                        <div className="col">
                            <input type="date" className="bb bbwidth" name="date" placeholder="Date"/>
                        </div>
                        <div className="col">
                            <input type="text" className="bb" name="flightno" placeholder="Flight No."/>
                        </div>
                    </div>
                    <div className="row my-md-5 justify-content-center">
                        <button type="submit" className="btn btn-primary btn">Search Flight</button>
                    </div>
                    
                </form>
            </div>
            
        </>
    );
}

export default Flightstatus;