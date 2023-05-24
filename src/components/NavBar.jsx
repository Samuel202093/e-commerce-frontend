import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import SideMenu from "./Sidemenu";
import { logoutUser } from "../datas/authSlice";

const NavBar = () => {
  const [toggle, SetToggle] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth); 
  // console.log(auth);

  const handleLogout = ()=>{
    dispatch(logoutUser())
    navigate('/')
  }

  const handleToggle = () => {
    SetToggle(!toggle);
  };
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <span className="hamburger" onClick={handleToggle}>
          {toggle == false ? <RxHamburgerMenu /> : <MdOutlineClose />}
        </span>
        <h1 className="heading">
          <Link to="/" className="logo-link">
            Hi-<span className="logo-span">Gadgets</span>
          </Link>
        </h1>
        {toggle && <SideMenu toggle={toggle} setToggle={SetToggle}/>}
      </div>
      <div className="icon-container">
        {auth.userLoaded === false? 
        (
          <span>
            <Link to="/login" className="login">
              Login
            </Link>
          </span>
        ) 
        : 
        (
          <span className="logout" onClick={handleLogout}>Logout</span>

        )
        }

        
        <Link to="/cart" className="cart-link">
            <BsHandbag className="nav-icon" />
            {cartTotalQuantity ? ( <div className="nav-cart">{cartTotalQuantity}</div>): ''}
            
          </Link>

      </div>
    </nav>
  );
};

export default NavBar;
