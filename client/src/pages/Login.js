import React, { useState,useEffect } from 'react'
import "../components/css/Login.css"
import {Scripts,SignupScript} from "../components/js/Login"
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Login = () => {
    const [user, setUser] = useState({name:'',accountNo:'',email:'',password:''});
    const [modal, setModal] = useState(false);
    const navigate = useNavigate()
    

    useEffect(() => {
        const signUp = document.getElementById('sign-up'),
        signIn = document.getElementById('sign-in'),
        loginIn = document.getElementById('login-in'),
        loginUp = document.getElementById('login-up')
        
        signIn.addEventListener('click', ()=>{
            setModal(true);
            // Remove classes first if they exist
            loginIn.classList.remove('none')
            loginUp.classList.remove('block')
            // Add classes
        loginIn.classList.toggle('block')
        loginUp.classList.toggle('none')
        })
        signUp.addEventListener('click', ()=>{
            setModal(false)
            // Remove classes first if they exist
            loginIn.classList.remove('block')
            loginUp.classList.remove('none')
            // Add classes
            loginIn.classList.toggle('none')
            loginUp.classList.toggle('block')
        })
    },[modal])


    const handleLogin = async(e)=>{
        // e.preventDefault()
        try {
            axios.post('http://localhost:80/auth/login',user).then((res)=>{
                if(res.data.message === 'loggedIn'){
                    console.log("logged in")
                }else{
                    console.log('user does not exist')
                }
            })
        } catch (error) {
            console.log(error)
        }
        navigate('/viewcustomers')                   
    }
    const handleSignup = async()=>{
        try {
            await axios.post('http://localhost:80/auth/signup',user).then((res)=>{
                console.log(res.data.status);
            })
            console.log("Created account")
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
    <>
    <script>
    </script>
    <div class="login">
            <div class="login__content">
                <div class="login__forms">
                    <form action="" class="login__registre" id="login-in" onSubmit={handleLogin}>
                        <h1 class="login__title">Sign In</h1>
    
                        <div class="login__box">
                            <i class='bx bx-user login__icon'></i>
                            <input type="number" placeholder="accountNo" class="login__input" onChange={(e)=>setUser({...user,accountNo:e.target.value})}/>
                        </div>
    
                        <div class="login__box">
                            <i class='bx bx-lock-alt login__icon'></i>
                            <input type="password" placeholder="Password" class="login__input" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                        </div>

                        <a href="#" class="login__forgot">Forgot password?</a>

                        <button type='submit' class="login__button">Sign In</button>

                        <div>
                            <span class="login__account">Don't have an Account ?</span>
                            <span class="login__signin" id="sign-up" >Sign Up</span>
                        </div>
                    </form>
                    <form action="" class="login__create none" id="login-up" onSubmit={handleSignup}>
                        <h1 class="login__title">Create Account</h1>

                        <div class="login__box">
                            <i class='bx bx-user login__icon'></i>
                            <input type="text" placeholder="Username" class="login__input" onChange={(e)=>setUser({...user,name:e.target.value})} />
                        </div>

                        <div class="login__box">
                            <i class='bx bx-at login__icon'></i>
                            <input type="text" placeholder="Email" class="login__input" onChange={(e)=>setUser({...user,email:e.target.value})}/>
                        </div>

                        <div class="login__box">
                            <i class='bx bx-lock-alt login__icon'></i>
                            <input type="password" placeholder="Password" class="login__input" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                        </div>

                        <button type='submit' class="login__button">Sign Up</button>

                        <div>
                            <span class="login__account">Already have an Account ?</span>
                            <span class="login__signup" id="sign-in">Sign In</span>
                        </div>

                        <div class="login__social">
                            <a href="#" class="login__social-icon"><i class='bx bxl-facebook' ></i></a>
                            <a href="#" class="login__social-icon"><i class='bx bxl-twitter' ></i></a>
                            <a href="#" class="login__social-icon"><i class='bx bxl-google' ></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        
  )
}

{/* <div class="login">
<div class="login__content">
    <div class="login__forms">
        <form action="" class="login__create none" id="login-up">
            <h1 class="login__title">Create Account</h1>

            <div class="login__box">
                <i class='bx bx-user login__icon'></i>
                <input type="text" placeholder="Username" class="login__input"/>
            </div>

            <div class="login__box">
                <i class='bx bx-at login__icon'></i>
                <input type="text" placeholder="Email" class="login__input"/>
            </div>

            <div class="login__box">
                <i class='bx bx-lock-alt login__icon'></i>
                <input type="password" placeholder="Password" class="login__input"/>
            </div>

            <a href="#" class="login__button">Sign Up</a>

            <div>
                <span class="login__account">Already have an Account ?</span>
                <span class="login__signup" id="sign-in">Sign In</span>
            </div>

            <div class="login__social">
                <a href="#" class="login__social-icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="login__social-icon"><i class='bx bxl-twitter' ></i></a>
                <a href="#" class="login__social-icon"><i class='bx bxl-google' ></i></a>
            </div>
        </form>
    </div>
</div>
</div> */}