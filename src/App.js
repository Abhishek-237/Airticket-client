import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlogin from "./components/Homepage/User/userlogin.js";
import Usersignup from "./components/Homepage/User/usersignup.js";
import Adminlogin from "./components/Homepage/Admin/adminlogin.js";
import Adminsignup from "./components/Homepage/Admin/adminsignup.js";
import Flightstatus from "./components/Flightstatus/flightstatus.js";
import Scheduleflight from "./components/Adminpage/Scheduleflights/schedule.js";
import Previousbooking from "./components/Userpage/Prevbooking/prevbooking.js";
import Bookticket from "./components/Userpage/Bookticket/bookticket.js";
import Showflight from "./components/Flightstatus/showflights.js";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Flightstatus isloggedin="false"/> }/> 
          <Route path="/Userlogin" element={ <Userlogin/> }/> 
          <Route path="/Usersignup" element={ <Usersignup/> }/> 
          <Route path="/Adminlogin" element={ <Adminlogin/> }/>
          <Route path="/Adminsignup" element={ <Adminsignup/> }/>
          <Route path="/flightstatus" element={ <Flightstatus isloggedin="false"/> }/>
          <Route path="/Userflightstatus" element={ <Flightstatus isloggedin="true"/> }/>
          <Route path="/Bookticket" element={ <Bookticket/>}/>
          {/* <Route path="Showflights" element={ <Showflight isloggedin="false"/>}/>
          <Route path="UserShowflights" element={ <Showflight isloggedin="true"/>}/> */}
          <Route path="/Scheduleflight" element={ <Scheduleflight/> }/>
          <Route path="/Previousbooking" element={ <Previousbooking/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
