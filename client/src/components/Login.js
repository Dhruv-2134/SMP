import React from 'react'
import '../Private/css/Login.css'


function Login() {
  return (
    <>
      <body className="login-page page-hero">
        <div className="prewiev-hero">
          <img src={process.env.PUBLIC_URL + "iiitbh.jpg"} alt="Server Error" />
        </div>
        <div className="login-form form-hero">
          <h4 className="login-title"  >Indian Institute of Information Technology, Bhagalpur</h4>
          <div className="form-head">

            <img src={process.env.PUBLIC_URL + "BhLogo.png"} alt="Server Error" className="logo" />

            <h6 className="login-title">Student Portal</h6>
          </div>
          <form onsubmit="return false" className="form">
            <label className="input-hero password-input" for="userName">
              <input type="UserName" name="userName" id="userName" required />
              <span className="input-name"> User Name </span>
              <span className="input-icon">
              </span>

            </label>
            <label className="input-hero password-input" for="email">
              <input type="email" name="email" id="email" required />
              <span className="input-name"> Email </span>
              <span className="input-icon">
              </span>

            </label>

            <label className="input-hero password-input" for="password">
              <input type="password" name="password" id="password" required />
              <span className="input-name"> Password </span>
              <span className="input-icon">
              </span>
              <a href="/" className="recovery-password"> Recovery password </a>
            </label>

            <label for="remember" className="checkbox-hero">
              <input type="checkbox" name="remember" id="remember" />
              <span className="checkbox-cover"></span>
              <span className="checkbox-name"> Remember Me </span>
            </label>

            <button type="submit" className="submit-btn btn">Login</button>

            <div className="form-bottom">
              Don't have an account ?
              <a href="/">Sign Up</a>
            </div>
          </form>
        </div>
      </body>
    </>
  )
}

export default Login