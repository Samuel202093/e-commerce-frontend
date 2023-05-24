import React, { useState, CSSProperties} from 'react'
import "../../assets/css/orders.css";
import { useGetAllProductsQuery } from "../../datas/productApi";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import Network from "../Network";
import {Link} from 'react-router-dom'
// import {toast} from 'react-toastify'
import { toast } from "react-toastify"
import axios from 'axios'



const Products = () => {
  const { isLoading, error, data } = useGetAllProductsQuery();
  

  const handleDelete = (id) => {
    // console.log("welcome:", id);
    const response = axios.delete(`https://hi-gadget.onrender.com/product/${id}`)
    .then((res)=>{
      if(res.status === 200){
        toast.success('product deleted successfully')
        setTimeout(()=>{
          window.location.reload(true)
        },6000)
      }
    }).catch(error => toast.error('Cannot Delete Product'))

  };
  return (
    <div className="product-container">
      <div className="admin-main-heading">
        <h3>List of Products</h3>
      </div>

      {isLoading ? (
        
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ) : error ? (
        <Network/>
      
      ) : (
        <div className="table-form-container">

             
          <table className='table-container'>
              <tbody>
                {data?.map((x)=>{
                  return <tr key={x._id}>
                    <td><img src={x.imageUrl} alt='product image' loading='lazy'/></td>
                    <td>{x.name}</td>
                    <td>${x.price}</td>
                    <td>{x.category}</td>
                    <td><Link to={`/admin/update/${x._id}`}><MdOutlineEdit className='table-edit'/></Link></td>
                    <td><MdDeleteForever className='table-icon' onClick={()=>handleDelete(x._id)}/></td>
                  </tr>
                })}
              </tbody>
            </table>
         
        </div>
      )}
    </div>
  );
};

export default Products;
