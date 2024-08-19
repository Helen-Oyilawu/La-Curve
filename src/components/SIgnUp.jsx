import {useState, useEffect} from 'react'
import Header from './Header'
import { toast, Toaster } from 'react-hot-toast'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { signUp } from '../GLOBAL/features'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUp = () => {
    const nav = useNavigate()
    // const [Username, setUserName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('') 
    // const [formData, setFormData] = useState({})

    const dispatch = useDispatch()
    const log = useSelector((state)=> state.Cart.cart.isLoggedIn)
    const users = useSelector((state)=> state.Cart.cart.users)
    const current = useSelector((state)=> state.Cart.cart.loggedInUser)
    // console.log(log);
    // console.log(users);
    // console.log(current);



    const User = z.object({
      name:z.string(),
      email:z.string().email({message: "must be a valid email"}),
      role:z.string(),
      password:z.string({message:"must be a string"}).min(5, {message: "must be more than 5 characters"})
    })

    const  {register, handleSubmit, formState: {errors}, setError} = useForm({
      resolver: zodResolver(User)
    }) 
    const onSubmit = (data) => {
      dispatch(signUp(data));
      console.log(data)
    
     
    }



    // useEffect(()=>{
    //     setFormData({
    //       password,
    //       Username,
    //       email
    //     })
    //   },[email,name,password])
      
      // const signUpForm = (e)=>{
      //   console.log(formData)
      //   //  setLoading(true)
      //    if (!name || !email || !password) {
        
      //     toast.error('Details is required')
      //    } else {
      //     dispatch(signUp(formData))
      //     nav('/')
      //    }
      // }
   
  return (
    <div className='Login'>
        <div className="loginbox"  >
            <h2>SignUp</h2>
            <input type="text"  placeholder='UserName' required={true} {...register("name")}/>
            <input type="email"  placeholder='email'  required={true}  {...register("email")}/>
              {
                errors.message && <p>{errors.email.message}</p>
              }

            <select name='' id='inputBoxes' {...register("role")}>
               <option value="">--vendor/buyer--</option>
               <option value="vendors">vendor</option>
               <option value="buyers">buyer</option>
            </select>

            <input type="password"  placeholder='passwword'  required={true}  {...register ('password')}/>
              {
                errors.password && <p>{errors.password.message}</p>
              }
            <button  onClick={handleSubmit(onSubmit)}>sign up</button>
            <p>Already have an Account? <span onClick={()=>nav('/')}>Login</span></p>
        </div>
        <Toaster/>
    </div>
    
  )
}

export default SignUp
