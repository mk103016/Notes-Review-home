import React from 'react'
import { Link } from 'react-router-dom'

export default function LogInButton() {
    return (
        <>
        <div className="lightbox">
          
          <div className="log-in-btn-box">
            <img  className="log-in-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupwmCC0rO41tqGSaeTQNk6Kso9XgNNa89vg&usqp=CAU" alt="" />    
            <div className="note-head">NOTES REVIEW SYSTEM</div> 
            <Link to="/"> <img className="log-cross" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx_5Auv6KmlC8_iD9xwhwTjxV0U624mlvA&usqp=CAU" alt=""  /> </Link>
            <hr />
            <div className="log-in-text">Log In to your Account</div>
            <input type="text" className="log-in-input" placeholder="Email or Phone or Username"/>
            <input type="password" className="log-in-input pass-log-input" placeholder="Password"/>
            <button className="forgot-password">Forgot Password?</button>
            <button className="log-in-box-btn">Log In</button>
            <div className="need-acc">Need an account? <Link to="/signInForm">Sign Up</Link> </div>
          </div>  
          </div>
        </>
    )
}
