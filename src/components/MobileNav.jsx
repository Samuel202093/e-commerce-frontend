import react from 'react'
import '../assets/css/mobileNav.css'
import { HiTemplate } from 'react-icons/hi'
import { MdAddchart } from 'react-icons/md' 
import  {BiLogOut } from 'react-icons/bi'
import { BsPersonFill, BsCart4 } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'


const MobileNav = ()=> {
    const navigate = useNavigate()
    
    const handleLogout =()=>{
        localStorage.removeItem("admin")
        navigate('/')
    }
    return(
        <div className='mobile-nav'>
            <div className='mobile-heading'>
                <h3>Admin</h3>
            </div>

            <div className='btn-wrapper'>
                <HiTemplate className="mobile-icon" />
                <Link to='/admin/products' className='mobile-link'>Products</Link>
            </div>

            <div className='btn-wrapper'>
                <MdAddchart className="mobile-icon" />
                <Link to='/admin/add' className='mobile-link'>Add Product</Link>               
            </div>

            <div className='btn-wrapper'>
                <BsCart4 className="mobile-icon" />
                <Link to='/admin/orders' className='mobile-link'>Orders</Link>             
            </div>

            <div className='btn-wrapper'>
                <BsPersonFill className="mobile-icon" />
                <Link to='/admin/customers' className='mobile-link'>Customers</Link>               
            </div>

            <div className='btn-wrapper login-wrapper'>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default MobileNav