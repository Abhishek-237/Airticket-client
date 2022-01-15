import Homenav from "../Homenav/homenav.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

function Adminsignup(){

	let navigate = useNavigate();

	const [admin, setAdmin] = useState({
		name : "",
		email : "",
		key : "",
		confirmkey : ""
	});

	const handlechange = (e) => {
		const {name, value} = e.target;
		setAdmin({
			...admin,
			[name] : value
		})
		console.log(name, value);
	};

	const signup = (e) => {
		e.preventDefault();

		const namepattern = /\w{2,20}/;
		const emailpattern = /\w+@(gmail|outlook|hotmail|ac).(com|in|org)/;
		const keypattern = /\d{4}/;

		if(namepattern.test(admin.name) && emailpattern.test(admin.email) &&
			keypattern.test(admin.key) && keypattern.test(admin.confirmkey) && (admin.key==admin.confirmkey)){
				axios.post("http://localhost:8000/Adminsignup", admin)
				.then( (res) => {
					if(res.data==="success"){
						alert("Admin created successfully");
						navigate("/Scheduleflight");
					}
				})
		}else{
			alert("Invalid pattern");
			setAdmin({
				name : "",
				email : "",
				key : "",
				confirmkey : ""
			});
		}

	}

    return (
        <>
		<Homenav/>
        <div className="d-flex justify-content-center pt-5">			
			<form method="POST" className="col-3  mt-4 bg-white border">
				<h2 className="mt-5 text-center">Admin Signup</h2>
				<hr className="bg-primary"></hr>
				<div className="form-group mt-5">
					<input type="text" className="form-control" placeholder="Name" name="name"
					value={admin.name} onChange={handlechange} required autoFocus/>
				</div>
				<div class="form-group">
					<input type="email" className="form-control" placeholder="Email" name="email"
					value={admin.email} onChange={handlechange} required/>
				</div>
				<div class="form-group">
					<input type="password" className="form-control" placeholder="Admin Key" name="key"
					value={admin.key} onChange={handlechange}  required/>
				</div>
				<div class="form-group">
					<input type="password" className="form-control" placeholder="Confirm Admin Key" name="confirmkey"
					value={admin.confirmkey} onChange={handlechange} required/>
				</div>
				<button type="submit" className="btn btn-primary btn-block mb-4" onClick={signup}>Sign up</button>
			</form>
		</div>

		<div className="d-flex justify-content-center">
			<div className="col-3 text-center my-2"><strong>OR</strong></div>
		</div>

		<div className="d-flex justify-content-center">
			<div className="col-3 justify-content-center bg-white border">
			    <div className="text-center m-3 p-2">Have an account? <a href="Adminlogin">Log in</a></div>
			</div>
		</div>
    </>
    );
}

export default Adminsignup;