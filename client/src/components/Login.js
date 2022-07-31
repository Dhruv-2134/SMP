import React, { useEffect, useRef, useState } from 'react';
import '../Private/css/Login.css';

function Login() {
  
  const [userName, setUserName ] = useState("");
  const [email, setEmail ]= useState("");
  const [password, setPassword ]= useState("");
  const [rememberMe, setRemeberMe ]= useState(false);
  const [openForgotPassword, setOpenForgotPassword ]= useState(false);

  const loginModal= useRef();

  if(openForgotPassword){
    window.onclick = function(event) {
      if (event.target == loginModal.current) {
        setOpenForgotPassword(false);
      }
    }
  }

  const submitLogin= () =>{
    
  }

  const submitForgotPassword= ()=> {
    setOpenForgotPassword(false);
  }

  return (
    <div className="login-root">
      <div className="login-body login-page page-hero">
        {openForgotPassword && (
          <div className='login-modal' ref={loginModal}>
            <div className='login-modal-content'>
                <button onClick={() => (setOpenForgotPassword(false))} style={{float: "right",color: "#fff",background: "red",border: "none"}}>Close</button>
                <p style={{fontSize: "3rem",margin: "2rem",color: "#2155CD"}}>Forgot Password</p>
                  <label>Email</label>
                  <input type={email} placeholder="Enter your email" required/>
                  <button className="login-modal-submit-button" onClick={submitForgotPassword} >GET OTP</button>
            </div>
          </div>
        )}

        <div className="prewiev-hero">

          <img src="https://iiitbh.ac.in/sites/default/files/2020-05/Proposed%20IIIT%20Bhagalpur%20Building1.jpg" />
        </div>
        <div className="login-form form-hero">
        <h4 className="login-title"  >Indian Institute of Information Technology, Bhagalpur</h4>
          <div className="form-head">
        
            <img src="https://upload.wikimedia.org/wikipedia/en/c/c6/Indian_Institute_of_Information_Technology%2C_Bhagalpur_logo.png" className="login-logo" />
            
            <h6 className="login-title login-portal-text">Student Portal</h6>
          </div>
          <form onSubmit={()=> {}} className="form">
            <label className="input-hero password-input" htmlFor="userName">
                <input value={userName} onChange={(event)=> (setUserName(event.target.value))} type="UserName" name="userName" id="userName" required />
                <span className="input-name"> User Name </span>
                <span className="input-icon">
                  </span>

            </label>
            <label className="input-hero password-input" htmlFor="email">
              <input value={email} onChange={(event) => (setEmail(event.target.value))} type="email" name="email" id="email" required />
              <span className="input-name"> Email </span>
              <span className="input-icon">
                </span>
            
            </label>

            <label className="input-hero password-input" htmlFor="password">
              <input value={password} onChange={(event) => (setPassword(event.target.value))} type="password" name="password" id="password" required />
              <span className="input-name"> Password </span>
              <span className="input-icon">
                </span>
              <a onClick={() => (setOpenForgotPassword(true))} href="#" className="recovery-password"> Recovery password </a>
            </label>

            <label htmlFor="remember" className="checkbox-hero">
              <input onClick={()=> setRemeberMe((preValue) => (!preValue))} type="checkbox" name="remember" id="remember" />
              <span className="checkbox-cover"></span>
              <span className="checkbox-name"> Remember Me </span>
            </label>

            <button onClick={submitLogin} type="submit" className="submit-btn btn">Login</button>

            <div className="form-bottom">
              Don't have an account ?
              <a href="#">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;