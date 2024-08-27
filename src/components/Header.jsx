import { useState } from 'react'
import "./Header.css"
import Logo from '../assets/LaCurve.png'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { EccomerceContext } from '../contex/ContexApi';
import { RxDropdownMenu } from 'react-icons/rx'
import {logout} from "../GLOBAL/features"
import Dropdown from './Dropdown';

const Header = () => {
  const [show, setShow]= useState(false)
  const [come , setCome]= useState(false)
  const cart = useSelector((state) => state?.cart)
  console.log(cart)
  const dispatch=useDispatch();
  const logouts=()=>{
    dispatch(logout);
    nav("/")
  }
  


  

  const nav = useNavigate()
  return (

    <div className='header'>
      <div className="headerwrap">
        <img src={Logo} alt="" className='logo' />
        <ul>

          <NavLink to="/Home" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <li className={isActive ? "active" : "notActive"}>Home</li>
            )}

          </NavLink>
          <NavLink to="/Categories" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <li className={isActive ? "active" : "notActive"}  >Vendors</li>
            )}
          </NavLink>
          <NavLink to="/cart" style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <li className={isActive ? "active" : "notActive"} style={{ color: 'white' }}>Cart
                ({cart.length})
              </li>
            )}
          </NavLink>
          <button className='SignUp' onClick={() => nav('/signup')}>signup</button>
        </ul>
        <span style={{color:"white",cursor:"pointer"}} className='Logout' onClick={logouts}>logout</span>
        <div className="burger">
         
        <RxDropdownMenu
            color='white'
            fontSize={50}
            onClick={() => setShow(prevShow => !prevShow)}
          />

        </div>
        
      </div>

      {show && <Dropdown />}
    </div>
  )
}

export default Header