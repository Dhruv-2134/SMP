import React, { useEffect, useRef, useState } from 'react';
import styles from '../Private/css/Login.module.css';


function Login() {
  
  const [userName, setUserName ] = useState("");
  const [email, setEmail ]= useState("");
  const [password, setPassword ]= useState("");
  const [rememberMe, setRemeberMe ]= useState(false);
  const [openForgotPassword, setOpenForgotPassword ]= useState(false);

  const loginModal= useRef();

  if(openForgotPassword){
    window.onclick = function(event) {
      if (event.target === loginModal.current) {
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
    <div className={ `${styles.login_root}` }>
      <div className={ `${styles.login_body} ${styles.login_page} ${styles.page_hero}` }>
        {openForgotPassword && (
          <div className={styles.login_modal} ref={loginModal}>
            <div className={styles.login_modal_content}>
                <button onClick={() => (setOpenForgotPassword(false))} style={{float: "right",color: "#fff",background: "red",border: "none"}}>Close</button>
                <p style={{margin: "2rem",color: "#2155CD"}}>Forgot Password</p>
                  <label>Email</label>
                  <input type={email} placeholder="Enter your email" required/>
                  <button className={styles.login_modal_submit_button} onClick={submitForgotPassword} >GET OTP</button>
            </div>
          </div>
        )
        }

        <div className={styles.prewiev_hero}>

          <img src="https://iiitbh.ac.in/sites/default/files/2020-05/Proposed%20IIIT%20Bhagalpur%20Building1.jpg" />
        </div>
        <div className={`${styles.login_form}  ${styles.form_hero}`}>
          <h4 className={styles.login_title} style={{color: 'darkblue'}} >Indian Institute of Information Technology, Bhagalpur</h4>
          <div className={styles.form_head}>
        
            <img src="https://upload.wikimedia.org/wikipedia/en/c/c6/Indian_Institute_of_Information_Technology%2C_Bhagalpur_logo.png" className={styles.login_logo} />
            
            <h6 className={`${styles.login_title} ${styles.login_portal_text}`}>Student Portal</h6>
          </div>
          <form onSubmit={()=> {}} className={styles.form}>
            <label className={`${styles.input_hero} ${styles.password_input}`} htmlFor="userName">
                <input value={userName} onChange={(event)=> (setUserName(event.target.value))} type="text" name="userName" id="userName" required />
                <span className={styles.input_name}> User Name </span>
                <span className={styles.input_icon}>
                  </span>

            </label>
            <label className={`${styles.input_hero} ${styles.password_input}`} htmlFor="email">
              <input value={email} onChange={(event) => (setEmail(event.target.value))} type="email" name="email" id="email" required />
              <span className={styles.input_name}> Email </span>
              <span className={styles.input_icon}>
                </span>
            
            </label>

            <label className={`${styles.input_hero} ${styles.password_input}`} htmlFor="password">
              <input value={password} onChange={(event) => (setPassword(event.target.value))} type="password" name="password" id="password" required />
              <span className={styles.input_name}> Password </span>
              <span className={styles.input_icon}>
                </span>
              <a onClick={() => (setOpenForgotPassword(true))} href="#" className={styles.recovery_password}> Recovery password </a>
            </label>

            <label htmlFor="remember" className={styles.checkbox_hero}>
              <input onClick={()=> setRemeberMe((preValue) => (!preValue))} type="checkbox" name="remember" id="remember" />

              <span className={styles.checkbox_cover}></span>
              <span className={styles.checkbox_name}> Remember Me </span>
            </label>


            <button onClick={submitLogin} type="submit" className={`${styles.submit_btn} ${styles.btn}`}>Login</button>

            <div className={styles.form_bottom}>
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