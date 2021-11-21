import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInButton() {
    return (
        <>
        <div className="lightbox">
            <div className="log-in-btn-box sign-in-btn-box">
                <img  className="log-in-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupwmCC0rO41tqGSaeTQNk6Kso9XgNNa89vg&usqp=CAU" alt="" />    
                <div className="note-head">NOTES REVIEW SYSTEM</div> 
                <Link to="/"> <img className="log-cross" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx_5Auv6KmlC8_iD9xwhwTjxV0U624mlvA&usqp=CAU" alt=""  /> </Link>
                
                <input type="text" className="log-in-input sign-in-input" placeholder="Full Name"/>
                <input type="text" className="log-in-input sign-in-email" placeholder="Email"/>
                <input type="text" className="log-in-input sign-in-phone" placeholder="Phone No."/>
                <input type="text" className="log-in-input sign-in-user" placeholder="Set a Username"/>
                <input type="password" className="log-in-input pass-sign-input" placeholder="Password"/>
                
                <button className="log-in-box-btn sign-box-btn">Create a new account</button>
                <div className="need-acc">Already have an account? <Link to="/logInForm">Log In</Link> </div>
                </div>
            </div>
        </>
    )
}
