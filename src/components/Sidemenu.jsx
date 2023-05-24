import React from 'react'
import '../assets/css/sidemenu.css'
import { Link, useNavigate } from 'react-router-dom'
import {BsHeadphones, BsLaptop, BsSpeaker} from 'react-icons/bs'
import { IoGameControllerOutline, IoHandLeft } from 'react-icons/io5'
import { SlScreenSmartphone } from 'react-icons/sl'
import { IoMdLaptop } from 'react-icons/io'
import { HiOutlineHome } from 'react-icons/hi'


const Sidemenu = ({toggle, setToggle}) => {
  const navigate = useNavigate()

      const handleHeadphone = ()=>{
        navigate('/headphones')
        setToggle(!toggle)
      }
      
      const handleGames =()=>{
        navigate('/games')
        setToggle(!toggle)
      }

      const handleLaptop = ()=>{
        navigate('/laptops')
        setToggle(!toggle)
      }

      const handleSpeaker = ()=>{
        navigate('/speakers')
        setToggle(!toggle)

      }

      const handleTv = ()=>{
        navigate('/tvs')
        setToggle(!toggle)
      }

      const handlePhones = ()=>{
        navigate('/smartphones')
        setToggle(!toggle)

      }

      const handleHome = ()=>{
        navigate('/')
        setToggle(!toggle)
      }

  return (
    <div className='menu-container'>
    
        <div className='link-container'>
            <span className='sidemenu-link' onClick={handleHeadphone}><BsHeadphones className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Headphones</span>
            <span className='sidemenu-link' onClick={handleLaptop}><BsLaptop className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Laptops</span>
            <span className='sidemenu-link' onClick={handleSpeaker}><BsSpeaker className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Speakers</span>
            <span className='sidemenu-link' onClick={handleGames}><IoGameControllerOutline className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Games</span>
            <span className='sidemenu-link' onClick={handlePhones}><SlScreenSmartphone className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Smartphones</span>
            <span className='sidemenu-link' onClick={handleTv}><IoMdLaptop className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Smart Tvs</span>
            <span className='sidemenu-link' onClick={handleHome}><HiOutlineHome className='sidemenu-icon'/>&nbsp;&nbsp;&nbsp; Homepage</span>

            
        </div>
    </div>
  )
}

export default Sidemenu