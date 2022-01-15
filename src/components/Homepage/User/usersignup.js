import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Homenav from "../Homenav/homenav.js";
import "./userstyle.css";
import axios from "axios";

function Usersignup() {

	let navigate = useNavigate();

	const [user, setUser] = useState({
		name : "",
		email : "",
		password : "",
		confirmpassword : ""
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

	const register = (e) => {
		e.preventDefault();

		const namepattern = /\w{2,20}/;
		const emailpattern = /\w+@(gmail|outlook|hotmail|ac).(com|in|org)/;
		const passwordpattern = /[A-z0-9@?#$%^&*]{8,16}/;

		if(namepattern.test(user.name) && emailpattern.test(user.email) &&
			passwordpattern.test(user.password) && passwordpattern.test(user.confirmpassword) && (user.password==user.confirmpassword)){
				axios.post("http://localhost:8000/Usersignup", user)
				.then( (res) => {
					if(res.data == "success"){
						// console.log(res)
						alert("User created successfully");
						navigate("/Bookticket");
					}
				});
		}else{
			alert("Invalid Pattern");
			setUser({
				name : "",
				email : "",
				password : "",
				confirmpassword : ""
			});
		}

	}

    return (
    <>
		<Homenav/>
        <div className="d-flex justify-content-center pt-5">			
			<form method="POST" className="col-3  mt-4 bg-white border">
				<h2 className="mt-5 text-center">User Signup</h2>
				<hr className="bg-primary"></hr>
				<div className="form-group mt-5">
					<input type="text" className="form-control" placeholder="Name" name="name"
						value={user.name} onChange={handleChange} required autoFocus/>
				</div>
				<div class="form-group">
					<input type="email" className="form-control" placeholder="Email" name="email"
						value={user.email} onChange={handleChange} required/>
				</div>
				<div class="form-group">
					<input type="password" className="form-control" placeholder="Password" name="password"
						value={user.password} onChange={handleChange} maxlength="20" required/>
				</div>
				<div class="form-group">
					<input type="password" className="form-control" placeholder="Confirm Password" name="confirmpassword"
						value={user.confirmpassword} onChange={handleChange} maxLength="20" required/>
				</div>
				<button type="submit" className="btn btn-primary btn-block mb-4" onClick={register}>Sign up</button>
			</form>
		</div>

		<div className="d-flex justify-content-center">
			<div className="col-3 text-center my-2"><strong>OR</strong></div>
		</div>

		<div className="d-flex justify-content-center">
			<div className="col-3 justify-content-center bg-white border">
			    <div className="text-center m-3 p-2">Have an account? <a href="Userlogin">Log in</a></div>
			</div>
		</div>
    </>
    );
}

export default Usersignup; 