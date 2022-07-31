import React from "react";
import Input from "../../Reuseable components/Input/Input";
import Button from "../../Reuseable components/Button/Button";
import "./sign-up.css";

import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <>
    <div className="SignUpContainer">
      <h1 className="logo">XelComp</h1>
        <form className="form">
          <div className="welcome">
            <h2>Welcome</h2>
            <p>Create Account</p>
          </div>
          <div>
            
            <label>
              Full Name
              <div className="inputbox">
                <input type="text" placeholder="Shearly Wilson"/>
              </div>
            </label>

            <label>
              Email Address
              <div className="inputbox">
                <input type="email" placeholder="shearltwilson@address.com"/>
              </div>
            </label>

            <label className="label">
              Password
              <div className="inputbox">
                <input type="Password" placeholder="*********"/>
              </div>
            </label>
            
            <label className="checkbox">
              <input type="checkbox" id="TnC" name="TnC"/>
              <span>Yes I have read and agreed to the Terms</span><br/>
              <p className="ppolicy">of Service and Privacy
                Policy.</p>
            </label>
            

          </div>

          <div className="crtAccount">
            <Button>Create Account</Button>
            <div className="HaveAnAcc">
              <span>Already have an account?</span> <a href="LoginPage.jsx">Log in</a>
            </div>
            <div className="sgnWitGogle">
              <FcGoogle className="GoogleLogo"/>
              <p>sign in with Google</p>
            </div>
          </div>
        </form>
    </div>
    </>
  );
};

export default SignUp;
