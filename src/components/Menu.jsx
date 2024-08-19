import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Data from './Data.json';
import './Menue.css'
import { addToCart } from '../GLOBAL/features';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Menu = () => {
  const dispatch = useDispatch()
  const { catName } = useParams(); 
  console.log(catName);
  
  const [catArray, setCatArray] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const catItems = Data.filter((e) => e.category.toLowerCase() === catName.toLowerCase());
    setCatArray(catItems);
  }, [catName])
  console.log(catName);
  

  return (
    <div className='Menue'>
      <Header />
      <div className="menu">
        {catArray.map((e) => (
          <div className="MenuBox" key={e.id}> 
              <Link to={`/details/${e.id}`}>
                <img src={e.image} alt=" img" className='image' />
              </Link>
            <div className="text">
              <h2>{e.name}</h2>
              <h4>{e.price}</h4>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
