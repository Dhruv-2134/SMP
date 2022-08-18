import React from 'react'
// import '../Private/css/Navbar.css'
import '../../Private/css/Navbar.css'

function Navbar() {
  
  return (
    <div>
      <nav className='Navbar'>
      <img src="BhLogo.png" alt="Logo" />
      <h1>IIITBH Student Management Portal</h1>
      <a href="#">Home</a>
      <a href="#">Leave Application</a>
      <a href="#">Institute Document</a>
    </nav>
    </div>
  )
}

export default Navbar