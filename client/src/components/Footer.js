import React from 'react'
import '../Private/css/Footer.css'


function Footer() {
  return ( 
    <div className="footer-root">
      <div className="footer-container">
          <div className="footer-social-icon">
              <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png"/></a>
              <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png"/></a>
              <a href="#"><img src="https://cdn4.iconfinder.com/data/icons/social-media-2285/1024/logo-512.png"/></a>
              <a href="#"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"/></a>
          </div>
          <div className="footer-menu-items">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Academics</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About</a></li>
              </ul>
          </div>
          <div className="footer-links"></div>
      </div>
      <div className="footer-copyright">
          <span>&copy;<i>2022</i>&nbsp;&nbsp;</span>
          <i>All rights reserved to the IIIT Bhagalpur.</i>
      </div>
  </div>

  );
}
     

export default Footer;
