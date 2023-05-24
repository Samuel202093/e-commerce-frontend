import React,{ useState} from "react";
import "../assets/css/newsCard.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import axios from 'axios'
import { url } from '../datas/api'
import { toast } from "react-toastify"
import ClipLoader from 'react-spinners/ClipLoader'
import {Link} from 'react-router-dom'

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
}

const Footer = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState('#ffff')


  const handleChange = (e)=>{
    setEmail(e.target.value)
  }

  const handleSubscribe = async(e)=>{
    try {
      e.preventDefault()
      setLoading(true)
      await axios({
        method: "post",
        url:`${url}/customer/subscribe`,
        data: email,
  
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res)=>{
        if (res.status === 200) {
          toast.success("Thanks for subscribing.")
          setLoading(false)
        }
      })
    } catch (error) {
      toast.error('Network error. Please try again!!!')
      setLoading(false)
    }
  
  }
  return (
    <footer>
      <div className="gadget-wrapper">
        <h4>Hi-<span className="span-gadget">Gadgets</span></h4>
        <p>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="icon-wrapper">
          <FaFacebookF  className="social"/>
          <FaLinkedinIn  className="social"/>
          <FaTwitter  className="social"/>
          <AiFillInstagram  className="social"/>
        </div>
      </div>

      <div className="links-wrapper">
        <h4>Quick Links</h4>
        <Link to='/' className="link">Home</Link>
        <Link to='#' className="link">About</Link>
        <Link to='#' className="link">Shop</Link>
        <Link to='#' className="link">Contact</Link>
      </div>

      <div className="contact-wrapper">
        <h4>Contact</h4>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
      </div>

      <div className="subscribe-wrapper">
        <h4>Subscribe To Our Email</h4>
        <h1>For Latest News & Updates</h1>
        <input type='text' placeholder= 'Enter Your Email' name="email" onChange={handleChange} value={email}/>
        <button type='submit' onClick={handleSubscribe}>{loading === true ? (<ClipLoader
                         color={color}
                         loading={loading}
                         cssOverride={override}
                         size={25}
                         speedMultiplier={0.7}
                         aria-label="Loading Spinner"
                         data-testid="loader"
                         />):'Subscribe'}</button>
        {/* <button type="submit" onClick={handleSubscribe}>Subscribe</button> */}
      </div>
    </footer>
  );
};

export default Footer;
