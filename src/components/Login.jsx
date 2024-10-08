import React, { useState, useEffect } from 'react'
import Header from './Header'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toast'
import { toast, Toaster } from 'react-hot-toast'
import { useSelector, useDispatch} from 'react-redux'
import { login } from '../GLOBAL/features'

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()
    const [formData, setFormData] = useState({})

    // const isLoggedin = useSelector((state)=>state.Cart.isLoggedIn)
    // console.log('isLoggedin',isLoggedin)
    console.log(email);
    console.log(password);
    console.log(formData)


    useEffect(()=>{
      setFormData({
        password,
        email
      })
      
     },[password, email])
    
    const handleLogin =(e)=>{
      e.preventDefault()
      console.log(formData);
      
        if (!email || !password ) {
        toast.error('enter details')
        } else {
          dispatch(login(formData))
          console.log(formData)
          nav('/home')
          
        }
      }

      


      
   
  
  return (
    <div className='Login'>
        
        <form className="loginbox" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email"  placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"  placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <button className='LoginBtn' type='submit'>Login</button>
            <p>Don't have an account? <span onClick={()=>nav('/signup')}>SignUp</span></p>
        </form>
        <Toaster/>
    </div>
  )
}

export default Login
