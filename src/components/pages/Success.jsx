import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../datas/cartSlice'
import { useDispatch } from 'react-redux'
import successImage from '../../assets/img/successImage.png'

const Success = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCart = ()=>{
    dispatch(clearCart())
    
  }
  useEffect(()=>{
    handleCart()
  },[])

  const handleHome = ()=>{
    navigate('/')
  }
    
  return (
    <div className='network-wrapper'>
        <img src={successImage} alt="" srcset="" />
        <h4>Purchase Completed!</h4>
        <h2>Thanks For Shopping With Us.</h2>
        {/* <span>Transcation Completed.</span> */}
        <button onClick={handleHome}>Back to Home</button>

    </div>
  )
}

export default Success