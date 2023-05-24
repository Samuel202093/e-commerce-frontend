import React from 'react'
import '../../assets/css/orders.css'
import Network from '../Network'
import { MdDeleteForever } from 'react-icons/md'
import { useGetAllCustomersQuery } from '../../datas/productApi'
import axios from 'axios'
import { toast } from "react-toastify"



const Customers = () => {
   const {isLoading, error, data} = useGetAllCustomersQuery()

   const handleDelete = (id)=>{
    const response = axios.delete(`https://hi-gadget.onrender.com/customer/${id}`)
    .then((res)=>{
      if(res.status === 200){
        toast.success('Customer deleted successfully')
        setTimeout(()=>{
          window.location.reload(true)
        },5000)
      }
    }).catch(error => toast.error('Cannot Delete Customer'))
   }


   
  return (
    <div className='product-container'>
        <div className='admin-main-heading'>
            <h3>List of Customers</h3>
        </div>

        {isLoading ? (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        
      ) : error ? (
        <Network />        
        
      ) : (
        <div className="customer-form-container">
          {data?.map((x) => {
            return (
              <div className="table-data" key={x._id}>
                <span>{x.username}</span>
                <span>{x.email}</span>
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

export default Customers