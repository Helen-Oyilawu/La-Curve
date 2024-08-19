import React from 'react'
import Header from './Header'
import './Home.css'
import Data from './Data.json'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../GLOBAL/features'
import toast from 'react-hot-toast'

const Home = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  return (
    <div className='Home'>
      <Header />
      <div className='home'>
        <div className="hometext">
          <h1>FOOD DELIVERY AND MORE</h1>
          <h4> We serve  all kinds of dishes close and far from your home</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est eveniet eaque vitae modi minus quidem error sapiente doloribus quia neque quod, quae optio commodi, eum at accusantium? Asperiores distinctio nisi voluptatibus cumque rem iste consequatur animi nostrum non? Incidunt?</p>
          <button>Place Your Oders</button>
        </div>
      </div>
      {/* <h1> </h1> */}

      <div className="items">
        {
          Data.map((e, index) => (
            <div className="item" key={index} >
              <Link to={`/details/${e.id}`}>
                <img src={e.image} alt=" img" className='img' />
              </Link>
              <div className="text">
                <h2>{e.name}</h2>
                <button onClick={() => {
                  dispatch(addToCart(e))
                }}>Add to Cart</button>
                <p>{e.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Home
