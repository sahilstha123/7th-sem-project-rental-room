import React from 'react'
import './register.scss';
import Logo from '../../assets/logo.png'
import NWbutton from '../../components/button/NWbutton';

const Register = () => {
  return (
    <div className='register'>
   <div class="custom-form-container">
        {/* <!-- Logo and Title --> */}
        <img src={Logo} alt="Logo" class="signup-logo"/>

        {/* <!-- Sign Up Form --> */}
        <form>
            <div>
                <input type="text" className="form-control input-field" placeholder="Your Fullname" aria-label="Full Name" required/>
            </div>
            <div>
                <input type="email" className="form-control input-field" placeholder="Your Email Address" aria-label="Email Address" required/>
            </div>
            
            <div className="position-relative">
                <input type="password" id="password" className="form-control input-field" placeholder="Password" aria-label="Password" required/>
            </div>
            <div className="position-relative">
                <input type="password" id="confirm-password" className="form-control input-field" placeholder="Confirm Password" aria-label="Confirm Password" required/>
            </div>
            <NWbutton className="signup-btn">Sign Up</NWbutton>

            {/* <!-- Additional Options --> */}
            <div className="register">
                <span>Already a member?</span>
                <a href="../login/index.html" className="link-text">Login</a>
            </div>
         
        </form>
    </div>
    </div>
  )
}

export default Register