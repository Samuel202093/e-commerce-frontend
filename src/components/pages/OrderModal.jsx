import React, { useState, useEffect} from 'react'
import '../../assets/css/modal.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const OrderModal = () => {
  const [item, setItem] = useState({})
  const navigate = useNavigate()
  const params = useParams()

  const handleClick = ()=>{
    navigate(-1)
    }

    const getSingleOrder = ()=>{
      axios.get(`https://hi-gadget.onrender.com/order/${params.id}`)
      .then((res)=>{
        setItem(res.data)
        console.log(item)
      })
    }

    useEffect(()=>{
      getSingleOrder()
    },[])

  return (
    <div className='orderModal-container' onClick={handleClick}>
      <div className='orderModal-wrapper'>
        
          <span><b>Order Id:</b>&nbsp;{item._id}</span>
          <span><b>Customer Id:</b>&nbsp;{item.customerId}</span>
          <span><b>Customer Name:</b>&nbsp;{item.shipping?.name}</span>
          <span><b>Customer Email:</b>&nbsp;{item.shipping?.email}</span>
          <span><b>Customer Phone Number:</b>&nbsp;{item.shipping?.phone}</span>
          <span><b>No of Product Purchased:</b>&nbsp;{item.products?.length}</span>
          <span><b>Total Amount Of Product:</b>&nbsp;{item.total}</span>
          <span><b>Payment Status:&nbsp;{item.payment_status}</b></span>
          <span><b>Delivery Status:</b>&nbsp;{item.delivery_status}</span>
          <span><b>State:</b>&nbsp;{item.shipping?.address.state}</span>
          <span><b>City:</b>&nbsp;{item.shipping?.address.city}</span>
          <span><b>Street Address:</b>&nbsp;{item.shipping?.address?.line1}</span>
          <span><b>Date:</b>&nbsp;{item.createdAt?.slice(0, 10)}</span>

      </div>
    </div>
  )
}

export default OrderModal