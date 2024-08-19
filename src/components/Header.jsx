import { useState } from 'react'
import "./Header.css"
import Logo from '../assets/LaCurve.png'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { EccomerceContext } from '../contex/ContexApi';
// import { useContext } from 'react';
// import { useReducer } from 'react';

const Header = () => {

  const { cart } = useSelector((state) => state?.Cart)

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
        <div className="burger">
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADIyMgjIyPc3NzPz8/Z2dk/Pz8eHh69vb0uLi7n5+f6+vonJyf39/fg4OCnp6fw8PCWlpZ8fHyenp6CgoKysrJKSkoZGRlnZ2cUFBQMDAxERERiYmJVVVVzc3OKioqYpew7AAACkUlEQVR4nO3d7dKaMBCGYQQDCgqICKK+6vkfZTu1TnWm5OPXZvW+jmB3IhDIk5gkAAAAAAAAAAAAkLepTBoxU238W1l3tyJbRSsrbt3asx1z2C6itz0Yn17ai3Shfi6tu5fuJF2lr1PnHJezdI3+zo6xSQvpCkMUqa2X3V66vjD7nW1gVtLlhVlZhmbTS1cXqp9/3FQ/0sWF+qlmm8mV/coWiyyfbcZI1xZufh5AM7Lmm8mP0rWFOs9fM9UkXVyoaf5uVnfSxYXq6tlmklTNlPnhZJuc7Q7S5YU52OZmHzVrTjZtJl2hv6x1fAioezVvZ+fecvX/7WaQLtLX4Ozlt+oqXaaP6/wT5l2zj/wWfbo1nq08hqdZRqvxHRQAAAAAAAAAs2qzjpjx+cr8tL6NRRmxYrytPVtZjgoWnY/j0qcXNWGg3t2LolXNg3NcIl/MeHVyjM0nLdASaxRkizXWau5kT5YFZ2KNoo7EGmP1Jc3ou2a2XxJr/Kj4fJIq2KD1avs9sUajZMPZw8Wxia5V8Mr8dHRuoVMUbXZuoEuSoZQu0k85uHtJkmZS0E45+WYB0/s0FhEbp7s90fyuzqU3Y9vkIV80AQAAAAAAAPzPpjERa/wPa0xqE/3a5uQZ06zzUbpUH2PuMTw7NYu0rXUN8E8vdz1naNwd3dS9pmVAx4kgqYJ1pn/KL4o1SlcXyhZrVLTU/GA5RUvHiTOvLKfP5Gpuy0+Wk+c+KjxHM7IssUZlcbMvijW20sWFsp0991mxxrt0eWHsLwFGxVvm0+iINQ6KctorZ3xOz9mTmce/HAxKZptXr1hj3il43Sy7+cflm41p9+M2i9Z23Lcm4Dvgrskj1jg/MgEAAAAAAAAAAETrF2CqZbbFeuA9AAAAAElFTkSuQmCC' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header