import React from "react";
import "./Login.scss";
import NWbutton from "../../components/button/NWbutton";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="form-box">
          <h1 id="heading">Sign up</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="username" id="usernamefield" />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="password" />
              </div>
              <p>
                Forgot password?<a href="#">Click Here</a>
              </p>
            </div>
            <div className="btn-field">
              <NWbutton>Login</NWbutton>
              <NWbutton>
                Signup
              </NWbutton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
