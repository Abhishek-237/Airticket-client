import Homenav from "../Homenav/homenav.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

function Adminlogin(){

    let navigate = useNavigate();

    const [admin, setAdmin] = useState({
        email : "",
        key : ""
    });
    
    const handler = (e) => {
        const {name, value} = e.target;
        setAdmin({
            ...admin,
            [name] : value
        });
        console.log(name, value);
    };

    const login = (e) => {
        e.preventDefault();

        const namepattern = /\w{2,20}/;
		const emailpattern = /\w+@(gmail|outlook|hotmail|ac).(com|in|org)/;
		const keypattern = /\d{4}/;

        if( emailpattern.test(admin.email) && keypattern.test(admin.key) ){
            axios.post("http://localhost:8000/Adminlogin", admin)
            .then( res => {
                if(res.data==="success"){
                    navigate("/Scheduleflight");
                }else{
                    alert("Invalid admin");
                    setAdmin({
                        email : "",
                        key : ""
                    });
                }
            });
        }else{
            alert("Invalid pattern");
            setAdmin({
                email : "",
                key : ""
            });
        }
        
    }

    return (
        <>
            <Homenav/>
            <div className="d-flex justify-content-center mt-2 pt-5">
                <form method="POST" className="col-3  mt-5 bg-white border">

                    <h2 className="mt-5 text-center">Admin Login</h2>
                    <hr className="bg-primary"></hr>
                    <div className="form-group mt-5">
                        <input type="email" className="form-control" placeholder="Email" name="email"
                        value={admin.email} onChange={handler} required autoFocus/>
                    </div>
                    <div class="form-group">
                        <input type="password" className="form-control" placeholder="Admin Key" name="key" 
                        value={admin.key} onChange={handler} maxlength="6" required/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={login}>Login</button>
                    <div className="text-center mb-4 mt-4">
                        <a href="#">Forgot Key?</a>
                    </div>
                    
                </form>
            </div>

            <div className="d-flex justify-content-center">
                <div className="col-3 text-center my-2"><strong>OR</strong></div>
            </div>

            <div className="d-flex justify-content-center ">
                <div className="col-3 justify-content-center bg-white border">
                    <div className="text-center m-3 p-2">Don't have an account? <a href="Adminsignup">Sign up</a></div>
                </div>
            </div>
        </>
    );
}

export default Adminlogin;