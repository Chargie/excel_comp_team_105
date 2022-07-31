import React from "react";
import Button from "../../Reuseable components/Button/Button";
import Input from "../../Reuseable components/Input/Input";
import "./login_page.css";

const LoginPage = () => {
  return (
    <div id="body">

      <div className="loginContainer">
        <h1>XelComp</h1>
        
        <form>
          <h2>Login</h2>

          <label>
            Username
            <div className="inputbox">
              <input type="username" placeholder="Shearly Wilson"/>
            </div>
          </label>

          <label>
            Password
            <div className="inputbox">
              <input type="Password" placeholder="*********"/>
            </div>
          </label>

          <label className="checkbox">
            <input type="checkbox" id="Remember me" name="Remember me"/><span>Remember me</span>
          </label>
        
          <div className="button">
            <button>Log In</button>
          </div>

          <div className="forgotReset">
            <a>Forgot Password?</a> <a><span>Reset</span></a>
          </div>

        </form>
        
      </div>
      
    </div>
  );
};

export default LoginPage;
