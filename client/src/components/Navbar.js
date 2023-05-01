import React from 'react'
import "./css/Styles.css"
import Logo from "./images/logo.svg"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        alert('login pressed')
        navigate('/login')
    }
  return (
    <nav class="nav-bar">
    <img src={Logo} alt="" />
    <div class="nav-items">
        <a href="/">Home</a>
        <a href="/viewcustomers">Customer</a>
    </div>
    <button onClick={()=>handleSubmit()}>Login</button>
    </nav>
  )
}

export default Navbar