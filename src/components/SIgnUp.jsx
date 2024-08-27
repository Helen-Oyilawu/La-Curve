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
    const [Username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [formData, setFormData] = useState({})
    const [role, setRole] = useState('')

    const dispatch = useDispatch()
    // const log = useSelector((state)=> state.Cart.cart.isLoggedIn)
    // const users = useSelector((state)=> state.Cart.cart.users)
    // const current = useSelector((state)=> state.Cart.cart.loggedInUser)
    // console.log(log);
    // console.log(users);
    // console.log(current);
    console.log(role)

  // const [usersRole,setUsersRole]=useState("");
  // console.log(usersRole)

  //   const User = z.object({
  //     name:z.string(),
  //     email:z.string().email({message: "must be a valid email"}),
  //     role:z.string(),
  //     password:z.string({message:"must be a string"}).min(5, {message: "must be more than 5 characters"})
  //   })
  //   const  {register, handleSubmit, formState: {errors}, setError} = useForm({
  //     resolver: zodResolver(User)
  //   }) 
  //   console.log(register)
  //   const onSubmit = (data) => {
  //     dispatch(signUp(data));
  //     console.log(data)
  //   }



    useEffect(()=>{
        setFormData({
          password,
          Username,
          email,
          role

        })
      },[email,Username,password, role])
      
      const signUpForm = (e)=>{
        e.preventDefault
        console.log(formData)
        //  setLoading(true)
         if (!Username || !email || !password)  {
        
          toast.error('Details is required')
         } else {
          dispatch(signUp(formData))
          nav('/')
         }
      }
   
  return (
    <div className='Login'>
        <div className="loginbox"  >
            <h2>SignUp</h2>
            <input type="text"  placeholder='UserName' onChange={(e)=> setUserName(e.target.value)}/>
            <input type="text"  placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
            <select name='' id='inputBoxes' onChange={(e)=> setRole(e.target.value)}>
               <option value="">--vendor/buyer--</option  >
               <option value="vendors">vendor</option>
               <option value="buyer">buyer</option>
            </select>

            <input type="password"  placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button  onClick={signUpForm}>sign up</button>
            <p>Already have an Account? <span onClick={()=>nav('/')}>Login</span></p>
        </div>
        <Toaster/>
    </div>
    
  )
}

export default SignUp
