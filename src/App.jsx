import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Success from './components/pages/Success'
import Error from './components/pages/Error'
import Home from './components/pages/Home'
import NavBar from './components/NavBar'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Speaker from './components/pages/Speaker'
import Tv from './components/pages/Tv'
import Isverified from './components/pages/Isverified'
import Laptop from './components/pages/Laptop'
import Smart from './components/pages/Smart'
import Headphone from './components/pages/Headphone'
import Game from './components/pages/Game'
import Footer from './components/Footer'
import Verify from './components/pages/Verify'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Admin from './components/pages/Admin'
import Layout from './components/Layout'
import Add from './components/pages/Add'
import Orders from './components/pages/Orders'
import RightMenu from './components/pages/RightMenu'
import Products from './components/pages/Products'
import Customers from './components/pages/Customers'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import AdminEdit from './components/pages/AdminEdit'
import OrderModal from './components/pages/OrderModal'


function App() {
  const adminRes = useSelector((state)=> state.admin)

  const RequireAuth = ({children}) => {
    let adminRes = JSON.parse(localStorage.getItem("admin"))
    // console.log(adminRes);
    return adminRes? (children) : <Navigate to={'/login'}/>
   }

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='cart' element ={<Cart/>} />
            <Route path='checkout-success' element={<Success/>}/>
            <Route path='tvs' element={<Tv />} />
            <Route path='speakers' element={<Speaker />} />
            <Route path='smartphones' element={<Smart />} />
            <Route path='laptops' element={<Laptop />} />
            <Route path='/product/:id' element={<Modal/>} />
            <Route path='games' element={<Game />} />
            <Route path='headphones' element={<Headphone />} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='verify' element={<Verify/>} />
            <Route path='/verified-email/:token' element={<Isverified/>} />
            <Route path='error' element={<Error/>}/>
        </Route>
      

        <Route path='/admin' element={<RequireAuth><Admin/></RequireAuth>}>
        
           <Route index element={<RightMenu/>} />
           <Route path='/admin/add' element={<Add/>} />
           <Route path='/admin/orders' element ={<Orders/>}/>
           <Route path='/admin/customers' element={<Customers/>} />
           <Route path='/admin/products' element={<Products/>} />
           <Route path = '/admin/update/:id' element={<AdminEdit />} />
           <Route path='/admin/order/:id' element={<OrderModal/>} />
       </Route> 
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
