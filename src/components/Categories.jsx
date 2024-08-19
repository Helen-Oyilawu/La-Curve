import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import './Categories.css';
import Cat from './Categories.json';
import img from '../assets/images/Food.jpg';

const Categories = () => {
  const [cart, setCart] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const cartArray = Cat.map((e) => e.category);
    const catchCategory = cartArray.reduce((a, e) => {
      const category = e.toLowerCase();
      if (!a.includes(category)) {
        a.push(category);
      }
      return a;
    }, []);
    setCart(catchCategory);
    console.log(catchCategory);

  }, []);


  
  // npm i @hookform/resolvers
  

  return (
    <div className='Categories'>
      <Header />
      <div className="category">
        {cart.map((e, index) => (
          <div className="item" key={index}>
            <img src={img} alt="" />
            <div className="text">
              <Link to={`/menue/${e}`}>
                <h2
                  // onClick={() => nav(`/Menue/${e}`)} 
                  style={{ color: 'goldenrod', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  {e.toUpperCase()}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
