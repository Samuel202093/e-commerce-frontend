import React, {useState} from 'react'
import '../../assets/css/admin.css'
import Layout2 from '../Layout2'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import AdminNav from '../AdminNav'
import MobileNav from '../MobileNav'
import { useEffect } from 'react'


const Admin = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [toggleClose, setToggleClose] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)


  const windowSize = ()=>{
   setWidth(window.innerWidth)
  }
  
  useEffect(()=>{
    window.addEventListener('resize', windowSize)
   
    return(()=>{
      window.removeEventListener('resize', windowSize)
    })
  },[])

  useEffect(()=>{
    if (width > 834) {
      setShow(true)
    } else {
      setShow(false)
      setToggle(true)

    }
  },[width])

  const handleMobile =()=>{
    setMobileNav(!mobileNav)
    setToggle(null)
    setToggleClose(!toggleClose)
  }

  const handleClose = ()=>{
    setToggle(true)
    setMobileNav(false)
    setToggleClose(false)
  }


  return (
    <section className='admin-wrapper'>
      {mobileNav ? <MobileNav/>: null}
      
      {toggle  ? <RxHamburgerMenu className='admin-nav-icon' onClick={handleMobile}/> : ''}
      {toggleClose ? < MdClose className='admin-nav-icon' onClick={handleClose}/> : ''}
      {show &&<AdminNav/>}
        {/* <AdminNav/> */}
        <Layout2 />
        
    </section>
  )
}

export default Admin