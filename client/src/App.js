import './App.css';
import Navbar from './components/Landing/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Landing/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/fillForm' element={<Form/>}/>
          {/* <Route path='/' element={<Navbar/>}/> */}
        </Routes>
        { /* <Navbar/> 
      <Login/>
    <Signup/> */ }
        {/* <Footer /> */}
      </div>
    </Router>
    {/* <nav className='Navbar'>
      <img src="logo/clglogo.png" alt="Logo" />
      <h1>IIITBH Student Management Portal</h1>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav> */}
    </>
  );
}

export default App;