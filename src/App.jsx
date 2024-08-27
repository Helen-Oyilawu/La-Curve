import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import Categories from './components/Categories'
import Details from './components/Details'
import '../src/components/style.css'
import Card from './components/Card'
import Login from './components/Login'
import {createBrowserRouter,HashRouter,Route,RouterProvider, Routes,} from "react-router-dom";
import SignUp from './components/SIgnUp'
import Menu from './components/Menu'
import PrivateRoutes from "./components/PrivateRoutes"
import  "./App.css"

// import Layouts from './components/Layouts'



 


function App() {

  const [pay, setPay] = useState(false)
    
    

  return (
       
          <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/categories' element={<Categories/>}/>
             <Route path='/menue/:catName' element={<Menu/>}/>
             <Route path='/details/:id' element={<Details/>}/>
              <Route path='/cart' element={<Cart />}/>
          </Routes>
        

    
  )
}

export default App
