import React, { useState } from 'react'
import './cart.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, incrementQty, decrementQTY, clearCart } from '../GLOBAL/features'
import { useNavigate } from 'react-router-dom'
import Paymentpop from './Paymentpop'

// import './car'

const Cart = () => {
  const [pay, setPay] = useState(false)
  const dispatch = useDispatch();
  const nav = useNavigate()
  const { cart, total } = useSelector((state) => state.Cart)

  

  return (
    <div className='Carte'>
      <Header />
      <div className="carte">
        <div className="MainCart">
          <div className="cartHead">
            <h2>Total:${total}</h2>
            <button onClick={()=> setPay(true)}>pay</button>
            {/* <button>Pay</button> */}
           
            <button style={{ backgroundColor: 'red', width:'5%' }}  onClick={(() => dispatch(clearCart()))}>X</button>
          </div>
          

          {
            cart?.map((e, index) => (
              <div className="cartBox" key={index}>
                <img src={e.image} alt="" className='cartimg' />
                <div className="CartText">
                  <div className="test">
                    <section>Product Name</section>
                    <div>${e.price}</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolorum?</p>
                  </div>
                  <div className="controls">
                    <button onClick={(() => dispatch(incrementQty(e)))}>+</button>
                    <h2>{e.QTY}</h2>
                    <button onClick={(() => dispatch(decrementQTY(e)))}>-</button>
                    <button className='delete' onClick={(() => dispatch(deleteCart(e)))}>Delete</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          pay ? <Paymentpop setPay={setPay}/> : null
        }
      </div>
    </div>
  )
}

export default Cart
