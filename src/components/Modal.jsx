import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../assets/css/modal.css'
import { GrClose } from 'react-icons/gr'
import axios from 'axios'
import { useDispatch } from 'react-redux'


const Modal = () => {
    const [product, setProduct] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const singleProduct = async()=>{
       let res = await axios.get(`https://hi-gadget.onrender.com/product/${params.id}`)

       setProduct(res.data)
    }

    useEffect(()=>{
        singleProduct()
    },[])

   const handleClick = ()=>{
    navigate(-1)
    }

    const handleCart = (item)=>{
        dispatch(addCart(item))
    }

  return (
    <section className='modal-container' onClick={handleClick}>
        <div className='modal-wrapper'>
        
            <div className='img-wrapper'>
                <img src={product.imageUrl} alt="" srcset="" loading='lazy'/>
            </div>
            <div className='modal-content-details'>
            
                <div className='name-price-wrapper'>
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                </div>
                <div className='description-wrapper'>
                    <h5>Description</h5>
                    <p>{product.description}</p>
                </div>
                <div className='btn-cart-wrapper'>
                    <button type="sumbit" onClick={()=> handleCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal