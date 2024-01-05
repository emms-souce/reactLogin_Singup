import React, { useState } from 'react'

import './LoginSingUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import passWord_icon from '../Assets/password.png'

export const LoginSingUp = () => {
    const [action, setAction] = useState("Login");
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='text'>
                        {action}
                    </div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Sing Up" ?
                        <div className='input'>
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='name' />
                        </div> : ""
                    }
                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' />
                    </div>
                    <div className='input'>
                        <img src={passWord_icon} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Login" ?
                    <div className="forgot-password">
                        Lost Password? <span>Click Here!</span>
                    </div> : ""
                }
                <div className='submit-container'>
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sing Up") }}>
                        Sing Up
                    </div>
                    <div className={action === "Sing Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>
                        Login
                    </div>

                </div>
            </div>
        </>
    )
}
export default LoginSingUp
