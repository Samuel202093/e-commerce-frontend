import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { TfiEmail } from 'react-icons/tfi'

const Verify = () => {
    const navigate = useNavigate()

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigate('/verified-email')
    //     }, 100000)
    // },[])

  return (
    <div className='verify-wrapper'>
        <h2>Verify your account</h2>
        <p>Account activation link has been sent to the email address provided.</p>
        <p>Click the link on your email to activate your account</p>
        <TfiEmail className='email-icon'/>
    </div>
  )
}

export default Verify