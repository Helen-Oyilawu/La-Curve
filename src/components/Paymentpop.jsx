import { useEffect, useState } from 'react';
import './Paymentpop.css';
import Data from './Data.json';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
const Paymentpop = ({ setPay }) => {
    const cart = useSelector((state) => state.cart);
    const [pop, setPop] = useState([]);
    const [catchName, setCatchName] = useState('');

    useEffect(() => {
        const cartArray = Data.map((e) => e.category);
        const catchCategory = cartArray.reduce((a, e) => {
            const category = e.toLowerCase();
            if (!a.includes(category)) {
                a.push(category);
            }
            return a;
        }, []);
        setPop(catchCategory);
    }, []);

    const handleSelectChange = (event) => {
        setCatchName(event.target.value.toUpperCase());
    };

    const handleCheckOutPay = ()=>{
      alert('Payment successful')
      setPay(false)
    }

    return (
        <div className='Popbody'>
            <div className='box'>
                <div className="head">
                    <select name='' onChange={handleSelectChange} value={catchName}>
                        <option value="">--Dispatch Payment--</option>
                        {pop.map((e, index) => (
                            <option value={e} key={index}>{e.toUpperCase()}</option>
                        ))}
                    </select>

                    <button onClick={() => setPay(false)}>X</button>
                </div>

                <div className="body">
                    
                        <div className="top">
                          <h3> ACCOUNT NAME:</h3>
                          <h5>{catchName}</h5>
                        </div>
                        <div className="top">
                          <h3>VENDOR'S NUMBER</h3>
                           <input type="text" />
                        </div>
                        <div className="top">
                          <h3>AMOUNT</h3>
                          <input type="text" />
                        </div>

                        <button  onClick={handleCheckOutPay}>CHECK OUT PAY</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Paymentpop;
