import axios from 'axios'
import React,{useEffect} from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md"
import { useNavigate, useParams } from 'react-router-dom'


const Isverified = () => {
  const navigate = useNavigate()
  const params = useParams()

  const handleVerify = ()=>{
     axios.post(`https://hi-gadget.onrender.com/customer/verify-email/${params.token}`, JSON.stringify(params.token))
 
  }

  useEffect(()=>{
    handleVerify()
  }, [params.token])

  const handleLogin = ()=>{
    navigate('/login')
  }
  
  return (
    <div className='verify-wrapper'>
        <h2>Email Verified !!!</h2>
        <MdOutlineMarkEmailRead className='email-icon'/>
        <button onClick={handleLogin}>Login</button> 
    </div>
  )
}

export default Isverified