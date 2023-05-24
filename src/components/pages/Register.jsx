import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import  '../../assets/css/login.css'
import { useDispatch, useSelector } from "react-redux"
import { GiCancel } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom' 
import { url } from "../../datas/api"
import axios from 'axios'
import { toast } from "react-toastify"
import ClipLoader from 'react-spinners/ClipLoader'

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
}




const Register = () => {
    const [focused,  setFocused] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state)=> state.auth)
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#ffff')
    const [formValue, SetFormValue] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [items, SetItems] = useState('')

    useEffect(()=>{
        if (auth._id) {
           navigate('/cart') 
        }
    },[auth._id, navigate])

    const handleFocus = (e)=>{
        setFocused(true)
    }

    const handleCancel = ()=>{
        navigate(-1)
    }
   

    const handleChange = (e)=>{
        SetFormValue({...formValue,[e.target.name]: e.target.value})
        
    }

    const handleSubmit = async(e)=>{
        try{
            e.preventDefault()
            setLoading(true)
            const token = await axios({
                method: "post",
                url: `https://hi-gadget.onrender.com/customer/register`,
                data: formValue,
                
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((res)=> localStorage.setItem("user", JSON.stringify(res.data)))
              setLoading(false)                 
                navigate('/verify')
        }
        catch{
            toast.error('Network Error!!.. Try Again')
            setLoading(false)
        }        
        
    }
  return (
    <div className='login-container'>
    <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.5}} className='login-modal'>
        <span className='cancel' onClick={handleCancel}><GiCancel/></span>
        <div className='login-heading'>
            <h2>Register</h2>
        </div>
         
            <form className='form-wrapper'>
                <div className='input-wrapper'>
                <input type='text' placeholder='Enter Your Username' name='username' required={true}  onChange={handleChange} value={formValue.username} onBlur={handleFocus} focused={focused.toString()} pattern="^[A-Za-z0-9]{5,10}$"/>
                {focused === true ? (<span className='error'>Username should be more than 5-10 characters and shouldn't include any special character.</span>):""}
                </div>

                <div className='input-wrapper'>
                <input type='email' placeholder='Enter Your Email' name='email'  onChange={handleChange} value={formValue.email} onBlur={handleFocus} focused={focused.toString()} required={true} />
                <span className='error'>It should be a valid email address!</span>
                </div>

                <div className='input-wrapper'>
                <input type='password' placeholder='Enter Your Password' name='password' onChange={handleChange} value={formValue.password} onBlur={handleFocus} focused={focused.toString()} required={true} pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$"/>
                <span className='error'>Password should be 5-15 characters and include at least 1 letter, 1 number and 1 special character!</span>
                </div>
                <button type='submit' onClick={handleSubmit}>{loading === true ? (<ClipLoader
                     color={color}
                     loading={loading}
                     cssOverride={override}
                     size={25}
                     speedMultiplier={0.7}
                     aria-label="Loading Spinner"
                     data-testid="loader"
                     />):'Submit'}</button>

                {/* {auth.registerStatus === "rejected" ? <p>{auth.registerError}</p> : null} */}
            </form>
        
        <div className='account'>
            <p>Already have an account? &nbsp;&nbsp;<span><Link to='/login' className='signUp'>Login</Link></span></p>   
        </div>
    </motion.div>
</div>
  )
}

export default Register