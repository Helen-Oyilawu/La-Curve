import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import "./Detail.css";
import Data from './Data.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../GLOBAL/features';

const Details = () => {
  const dispatch = useDispatch()
  const [detailArray, setDetailArray] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const catItems = Data.find((e) => e.id == id)
    setDetailArray(catItems)
  }, [id])


  return (
    <div className='Detailed'>
      <Header />
      {detailArray &&
        <div className="Detail">
          <img src={detailArray.image} alt="" className='DetailImage' />
          <div className="DetailText">
            <h2>{detailArray.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius, odio dolores dolorum nesciunt sed dolor maxime voluptatum quam et.</p>
            <span>{detailArray.price}</span>
            <button
              onClick={() => dispatch(addToCart(detailArray))}
            >ADD TO CART</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Details;
