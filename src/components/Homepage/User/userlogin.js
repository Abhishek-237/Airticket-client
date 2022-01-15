import axios from "axios";
import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import Homenav from "../Homenav/homenav.js";
import "./userstyle.css";
import mycontext from "../../../context/globalcontext";

function Userlogin(){

	const context = useContext(mycontext);

	let navigate = useNavigate();

	const [user, setUser] = useState({
		email : "",
		password : ""
	});

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setUser({
			...user,
			[name] : value
		})
		console.log(name, value);
	}

	const login = (e) =>{
		e.preventDefault();

		const emailpattern = /\w+@(gmail|outlook|hotmail|ac).(com|in|org)/;
		const passwordpattern = /[A-z0-9@?#$%^&*]{8,16}/;
		
		if(emailpattern.test(user.email) && passwordpattern.test(user.password)){
			axios.post("http://localhost:8000/Userlogin", user)
			.then( (res) => {
				if(res.data==="success"){
					console.log(res);
					// context.setState({})
					navigate("/Bookticket");
				}else{
					alert("Invalid user");
					setUser({
						email : "",
						password : ""
					});
				}
			})
		}else{
			alert("Invalid email or password pattern");
			setUser({
				email : "",
				password : ""
			});
		}
		
	}

    return (
        <>
		<Homenav/>
        <div className="d-flex justify-content-center mt-2 pt-5">
			<form method="Post" className="col-3  mt-5 bg-white border">

				<h2 className="mt-5 text-center">User Login</h2>
				<hr className="bg-primary"></hr>
				<div className="form-group mt-5">
					<input type="email" className="form-control" placeholder="Email" name="email" 
					value={user.email} onChange={handleChange} required autoFocus/>
				</div>
				<div class="form-group">
					<input type="password" className="form-control" placeholder="Password" name="password" 
					value={user.password} onChange={handleChange} required/>
				</div>
				<button type="submit" className="btn btn-primary btn-block" onClick={login}>Login</button>
				<div className="text-center mb-4 mt-4">
					<a href="#">Forgot Password?</a>
				</div>
				
			</form>
		</div>

		<div className="d-flex justify-content-center">
			<div className="col-3 text-center my-2"><strong>OR</strong></div>
		</div>

		<div className="d-flex justify-content-center ">
			<div className="col-3 justify-content-center bg-white border">
				<div className="text-center m-3 p-2">Don't have an account? <a href="Usersignup">Sign up</a></div>
			</div>
		</div>
        </>
    );
}

export default Userlogin;