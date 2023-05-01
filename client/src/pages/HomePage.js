import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
// import "../components/css/HomePage.css"
import "../components/css/Styles.css"

import Logo from "../components/images/logo.svg"
import HeroImg from "../components/images/image-mockups.png"
import Online from "../components/images/icon-online.svg"
import IconBudget from "../components/images/icon-budgeting.svg"
import Onboarding from "../components/images/icon-onboarding.svg"

import useFetch from '../api/useFetch'
// import GlobalState from '../context/user';
import { UserContext } from '../App'

const HomePage = () => {
    const [show,setShow] =useState(false);
    
    const {getAllUsers,user} = useContext(UserContext)
    
    const navigate = useNavigate();
    const handleSubmit=()=>{
        alert('login pressed')
        navigate('/login')
    }
    
  return (
    <>
        {/* <nav class="nav-bar">
        <img src={Logo} alt="" />
        <div class="nav-items">
            <a href="/">Home</a>
            <a href="/viewcustomers">Customer</a>
        </div>
        <button onClick={()=>handleSubmit()}>Login</button>
        </nav> */}

        <header class="hero-section">
      <div class="hero-text-container">
        <h1
          >Next generation<br />
          digital banking</h1
        >
        <p
          >Take your financial life online. Your easy bank account<br />
          will be a one-stop-shop for spending,saving,<br />budgeting,investing,
          and much more.</p
        >
        <button>Request Invite</button>
      </div>
      <div class="hero-img-container">
        <img src={HeroImg} alt="" />
      </div>
    </header>

    <div class="container">
      <section class="why-us">
        <h1>Why choose Easybank?</h1>
        <p
          >We leverage open banking to turn your bank account into your
          financial hub.<br />Control your finances like never before.</p>
      </section>
      <section class="features-section">
        <div class="feature-item">
          <img src={Online} alt="" />
          <h1>Online Banking</h1>
          <p
            >Our modern web and mobile<br />
            applications allow you to keep<br />
            track of your finances whereever<br />
            you are in the world.</p>
        </div>
        <div class="feature-item">
          <img src={IconBudget} alt="" />
          <h1>Simple Budgeting</h1>
          <p
            >See exactly where your money<br />
            goes every month.Recieve<br />
            notifications when you're close to<br />
            hitting your limits.
          </p>
          </div>

        <div class="feature-item">
          <img src={Onboarding} alt="" />
          <h1>Fast Onboarding</h1>
          <p
            >We don't do branches.Open your<br />
            accound minutes online and start<br />
            taking controll of your finances<br />
            right away.</p>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-container">
            <div class="social-container">
            <img src="./images/icon-facebook.svg" alt="" />
            <img src="./images/icon-instagram.svg" alt="" />
            <img src="./images/icon-twitter.svg" alt="" />
            <img src="./images/icon-pinterest.svg" alt="" />
            </div>
            <div class="menu">
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Blog</a>
            </div>
            <div class="menu">
            <a href="#">Carriers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
            </div>
            <button onClick={()=>handleSubmit()}>Request Invite</button>
        </div>
     </footer>

    </div>
    </>
  )
}

export default HomePage

    {/* <div className='hero-section'>
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo esse voluptates numquam culpa, reiciendis vitae sit consequatur quibusdam omnis nemo maiores id, illum, facere harum totam rem autem minima reprehenderit.

        </div>

        <main className='hero-main'>
            <div className='heading'>
                <h1>
                    Here is te best bank of the world
                </h1>
            </div>

            <label onClick={handleClick} className='view-customer'> View All customers</label>
        </main>

    </div> */}

            {/* <nav className='nav-bar'>
            <div>
                <h1>Bank</h1>
            </div>
            <div className='nav-list'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/viewcustomers">Customer</a></li>
                </ul>
            </div>
        </nav> */}