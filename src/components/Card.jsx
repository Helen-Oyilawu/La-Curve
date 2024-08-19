import { useState, useEffect} from 'react'
import "./style.css"
import image from '../assets/two.jpeg'
import { Link, useParams } from 'react-router-dom'
import  axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../GLOBAL/features'
import gif from '../assets/images/image.png'



const Card = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  console.log(id )
  const [items, setItems] = useState([])
  const cart = useSelector((e)=>e?.Cart?.value);
  const item = cart;
  const [loading, setLoading] = useState(false)


  const getCategories = async()=>{
    try{
      setLoading(true)
      const res = await axios.get(`https://fakestoreapi.com/products/category/${id}`)
      setItems(res.data)
      console.log(res.data)
      setLoading(false)
    }catch(err){
      console.log(err)

    }
  }
    useEffect(()=>{
      getCategories()
  },[])
  // const mycard =[
  //   {
     
     
  //     img:'https://images.pexels.com/photos/59939/pexels-photo-59939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
     
  //     img:'../src/assets/two.jpeg'
  //   },
  //   {
  //     // id:3,
  //     // text:'IFINITTE HOT 10',
  //       img:'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:4,
  //     // text:'SAMSUNG',
  //     img:'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:5,
  //     // text:'OPPO',
  //     img:'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:6,
  //     // text:'POP UP',
  //     img:'https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=600'
  //   },
  //   {
  //     // id:7,
  //     // text:'THE GALAX MAX',
  //     img:'https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=600'
  //   },
  //   {
  //     // id:8,
  //     // text:'IPHONE 12',
  //     img:'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:9,
  //     // text:'GALAXY 23',
  //     img:'https://images.pexels.com/photos/59939/pexels-photo-59939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:3,
  //     // text:'IFINITTE HOT 10',
  //       img:'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:5,
  //     // text:'OPPO',
  //     img:'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   },
  //   {
  //     // id:1,
  //     // text:'NOTE 11',
  //     img:'https://images.pexels.com/photos/59939/pexels-photo-59939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //   }

  // ]

  //  const handleclick = ()=>{
  //    return setPage(2)
  //  }
 
  return (
    <div className='card' >
       <h1 > MORE SELLING PRODUCTS</h1>
        <div className="cardholder" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {
          loading ? <div className='mainCard'><img src={gif} alt="" style={{width:'150px', height:'150px'}}/></div> 
          :
          items.map((e,i)=>(
            <div className="maincard" key={e.id}>
            <img src={e.image} alt="my image" className='image'/>
            <div className="addtext">
              {/* <h5>{e}</h5> */}
              <div className="view">
                <div className='viewdetails'><Link  to={`/details/${e.id}` } style={{textDecoration:'none'}} >view details</Link></div>
                <div className='viewdetails' onClick={()=>dispatch(addToCart(e)) }> add to cart</div>
              </div>
            </div>
          </div>
          ))
        }
           
        </div>
    </div>
  )
}

export default Card