import React from "react";
import '../assets/css/admin.css'
import { HiTemplate } from 'react-icons/hi'
import { MdAddchart } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { BiLogOut, BiDna } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {

    const navigate = useNavigate()

    const handleAdmin = ()=>{
      navigate('/admin')
    }
    
    const handleAdd = ()=>{
      navigate('/admin/add')
    }
  
    const handleProduct = ()=>{
      navigate('/admin/products')
    }
  
    const handleOrders = ()=>{
      navigate('/admin/orders')
    }
  
    const handleCustomer = ()=>{
      navigate('/admin/customers')
    }
  
    const handleLogouts = ()=>{
      localStorage.removeItem("admin")
      navigate('/')
    }
  return (
    <>
      <div className="admin-nav-bar">
        <div className="admin-nav-wrapper">
          <RiAdminFill className="admin-icon" />
          <h2 onClick={handleAdmin}>Admin</h2>
        </div>

        <div className="admin-nav-wrapper">
          <HiTemplate className="admin-icon" />
          <button onClick={handleProduct}>Products</button>
        </div>

        <div className="admin-nav-wrapper">
          <MdAddchart className="admin-icon" />
          <button onClick={handleAdd}>Add Product</button>
        </div>

        <div className="admin-nav-wrapper">
          <BsPersonFill className="admin-icon" />
          <button onClick={handleCustomer}>Customers</button>
        </div>

        <div className="admin-nav-wrapper">
          <BsCart4 className="admin-icon" />
          <button onClick={handleOrders}>Orders</button>
        </div>

        <div className="admin-nav-wrapper">
          <BiLogOut className="admin-icon" />
          <button onClick={handleLogouts}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
