import React from 'react'
import Network from '../Network'
import { MdDeleteForever } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { MdPreview } from 'react-icons/md'
import {useGetAllOrdersQuery} from '../../datas/productApi'
import axios from 'axios'
import { toast } from "react-toastify"



const Orders = () => {
   const {isLoading, data, error} = useGetAllOrdersQuery()
  //  const navigate = useNavigate(),

   const handleDelete = (id)=>{
    const response = axios.delete(`https://hi-gadget.onrender.com/order/${id}`)
    .then((res)=>{
      if(res.status === 200){
        toast.success('Order deleted successfully')
        setTimeout(()=>{
          window.location.reload(true)
        },5000)
      }
    }).catch(error => toast.error('Cannot Delete Order'))
   }

 
  return (
    <div className='product-container'>
    <div className='admin-main-heading'>
        <h3>List of Orders</h3>
    </div>

     {isLoading ? (
        
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ) : error ? (
        <Network />
       
      ) : (
        <div className="table-form-container">
          {data?.map((x) => {
            return (
              <div className="table-data" key={x._id}>
                <span>{x.shipping.email}</span>
                <span>{x.shipping.phone}</span>
                <span><strong>${x.total}</strong></span>
                <span><strong className='payment'>{x.payment_status}</strong></span>
                <Link to={`/admin/order/${x._id}`}>
                    <MdPreview className='view-icon'/>
                </Link>
                <span onClick={()=>handleDelete(x._id)}>
                  <MdDeleteForever className="table-icon" />
                </span>   
              </div>
            );
          })}
        </div>
      )}

</div>
  )
}

export default Orders