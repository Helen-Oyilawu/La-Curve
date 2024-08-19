import {useEffect, useState} from 'react'
import './Paymentpop.css'
import Data from './Data.json'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const Paymentpop = ({setPay}) => {
    // const {popUp} = useParams()
const cart = useSelector((state)=> state.cart)
console.log(cart)

    const [pop, setPop] = useState([]);
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
        console.log(catchCategory);
    
      }, []);


      
  // useEffect(() => {
  //   const catItems = Data.filter((e) => e.category.toLowerCase() === catName.toLowerCase());
  //   setCatArray(catItems);
  // }, [catName])
  // console.log(catName);
    //   const handleSelectVendor = (vendor) => {
    //     setSelectedVendor(vendor);
    //     const items = cart.filter(item => item.category === category);
    //     setFilteredItems(items);
    //   };
      
//   useEffect(() => {
//     const catItems = cart.filter((e) => e.category.toLowerCase() === e.toLowerCase());
//     setCatArray(catItems);
//   }, [catName])
//   console.log(catName);
    
    //   const Vendorcart = cart.filter((e)=> e)
    //   console.log(Vendorcart)
    // cart.filter((e)=> e.name)
    // const getVendorItems = (vendor) => {
    //     return cart.filter((item) => item.vendor === e);
    //   };
    //   const groupedItems = cart.reduce((groups, item) => {
    //     if (!groups[item.category]) {
    //       groups[item.category] = [];
    //     }
    //     groups[item.vendor].push(item);
    //     return groups;
    //   }, {}) 
  return (
    <div className='Popbody'>
        <div className='box'>
            <div className="head">
            <select name='' >
                 <option value="">--Dispatch Payment--</option>
                {
                    pop.map((e,index)=>(
                       
                        <>
                        
                         <option value="vendors" key={index}>{e.toUpperCase()}</option>
                         {/* <div>{e.name}</div> */}
                        </>
                    ))
                }
            </select>

            <button onClick={()=> setPay(false)}>X</button>
            </div>
        </div>
    </div>
  )
}

export default Paymentpop