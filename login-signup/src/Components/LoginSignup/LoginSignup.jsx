import React from 'react'
import './LoginSignup.css'

import userIcon from '../Assets/personIcon.jpeg'
import emailIcon from '../Assets/emailIcon.jpeg'
import passwordIcon from '../Assets/passwordIcon.jpeg'

export const LoginSignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">
                Sign Up
            </div>
            <div className="underline">
            </div>
        </div>
        <div className="inputs">
            <div className="nameinput">
                <img src={userIcon} alt="User"/>
                <input type="text"/>
            </div>
            <div className="emailinput">
                <img src={emailIcon} alt="email"/>
                <input type="email"/>
            </div>
            <div className="passwordinput">
                <img src={passwordIcon} alt="password"/>
                <input type="password"/>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
