import React, {useEffect, useState} from 'react'
import '../../assets/css/cart.css'
// import image from '../../assets/img/console_1.avif'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md'
import { RiDeleteBin6Fill } from "react-icons/ri"
import { BsCartX } from 'react-icons/bs'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"
import { decreaseCart, removeFromCart, addToCart, clearCart, getTotals } from '../../datas/cartSlice'
import {useNavigate} from 'react-router-dom'
import { url } from '../../datas/api'
import axios from 'axios'
import { toast } from "react-toastify"
import ClipLoader from 'react-spinners/ClipLoader'

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
}





const Cart = () => {
  const cart = useSelector((state)=> state.cart)
  const auth =  useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState('#ffff')

  useEffect(()=>{
    dispatch(getTotals())
  }, [cart, dispatch])

  const handleDelete = (item)=>{
    dispatch(removeFromCart(item))
  }

  const handleLogin = ()=>{
    navigate('/login')
  }
  const handleDecrease = (item)=>{
    dispatch(decreaseCart(item))
  }

  const handleIncrease = (item)=>{ 
    dispatch(addToCart(item))
  }

  const handleClear = ()=>{
    dispatch(clearCart())
    toast.error("cart cleared", { position: "bottom-right"})

  }

  const handlePayment = ()=>{
    setLoading(true)
    axios.post(`${url}/create-checkout-session`, {
      userEmail: auth.email,
      cartItems: cart.cartItems
    }).then((res)=>{
       if(res.data.url){
        window.location.href = res.data.url
        setLoading(false)
        toast.success('checked out')
       }  
    }).catch((error)=>{
      toast.error(error.message)
      setLoading(false)
      // console.log(error.message);
    })
   
  }

  return (
    <div className='cart-section'>
      {/* <h2>Shopping Cart</h2> */}
      { cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p className='icon-cart'> <BsCartX className='cart-empty-icon'/></p>
         
          <p> cart is empty</p>
          <div className='cart-shopping'>
            <Link to='/' className='start'>
              <span><HiArrowLongLeft className='icon'/>start shopping</span>
            </Link>
          </div>
        </div>
      ): (
        <>
        {cart.cartItems.map((item)=>{
          return (
            <div className='cart-wrapper' key={item._id}>
          <img src={item.imageUrl} alt={item.name} loading="lazy"/>
          <div className='cart-content'>
              <div className='cart-content-details'>
                <h4>{item.name}</h4>
                <p>${parseInt(item.price)}</p>
              </div>
              <div className='cart-content-quantity'>
                <span className='arithmetic' onClick={()=>handleDecrease(item)}> - </span>
                <span>{item.cartQuantity}</span>
                <span className='arithmetic' onClick={()=> handleIncrease(item)}> + </span>
              </div>
              <div className='cart-content-total'>
                <h3>${item.price * item.cartQuantity}</h3>
              </div>
              <div className='cart-icon-wrapper'>
              <MdDeleteForever className='icon' onClick={()=> handleDelete(item)}/>
              </div>
          </div>
        </div>
          )
        })}
        <div className='cart-summary'>
          <div className='clear-cart-wrapper' onClick={()=>handleClear()}>
            <span><RiDeleteBin6Fill className='icon'/> clear cart</span>
          </div>
          <div className='cart-checkout'>
            <div className='cart-subtotal'>
              <div className='subtotal-wrapper'>
              <span>Subtotal: </span>
              <span className='amount'>${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and Shipping calculated at checkout</p>
              {auth.userLoaded ? (
              <button onClick={handlePayment}>{loading === true ? (<ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={25}
                speedMultiplier={0.7}
                aria-label="Loading Spinner"
                data-testid="loader"
              />):'Check out'}</button>
              ):(
              <button className='login-checkout' onClick={handleLogin}>Login to Check out</button>
              )} 
              <Link to='/' className='start'>
              <span className='continue'>continue shopping <HiArrowLongRight className='icon'/></span>
            </Link>
            </div>
          </div>
        </div>
        </>
      )}
     
      
    </div>
  )
}

export default Cart