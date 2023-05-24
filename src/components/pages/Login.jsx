import React, {useState} from 'react'
import { motion } from 'framer-motion'
import  '../../assets/css/login.css'
import { GiCancel } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../../datas/api'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"
import ClipLoader from 'react-spinners/ClipLoader'

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
}

// import e from 'cors'



const Login = () => {
    const navigate = useNavigate()
    const adminAuth = useSelector((state)=> state.admin)
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#ffff')
    const [formValue, SetFormValue] = useState({
        email: '',
        password: ''
    })

    const handleCancel = ()=>{
        navigate(-1)
    }

    const handleChange =(e)=>{
        SetFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        // Axios call to db
        const token = await axios({
            method: "post",
            url: `${url}/customer/login`,
            data: formValue,
            
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res)=>{
            if (res.status === 203) {
                localStorage.setItem('admin', JSON.stringify(res.data))
                setTimeout(()=>{
                    navigate('/admin')
                }, 2000)
              setLoading(false)
            }
            else if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data))
                setTimeout(()=>{
                    navigate('/cart')
                    window.location.reload(true)
                }, 2000)
                setLoading(false)
            }
          })
          .catch((error)=>{
            toast.error('Incorrect Email or Password!!.. Try Again.')
          })

    }
  return (
    <div className='login-container'>
        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5}} className='login-modal'>
            
            <span className='cancel' onClick={handleCancel}><GiCancel/></span>

            <div className='login-heading'>
                <h2>Login</h2>
            </div>
            
                <form className='form-wrapper'>
                    <input type='text' placeholder='Enter Your Email' name='email' value={formValue.email}  onChange={handleChange}/>
                    <input type='password' placeholder='Enter Your Password' name='password' value={formValue.password} onChange={handleChange}/>
                    <button type='submit' onClick={handleSubmit}>{loading === true ? (<ClipLoader
                         color={color}
                         loading={loading}
                         cssOverride={override}
                         size={25}
                         speedMultiplier={0.7}
                         aria-label="Loading Spinner"
                         data-testid="loader"
                         />):'Submit'}</button>
                </form>
            
            <div className='account'>
                <p>Don't have an account? &nbsp;&nbsp;<span><Link to='/register' className='signUp'>Register</Link></span></p>   
            </div>
        </motion.div>
    </div>
  )
}

export default Login