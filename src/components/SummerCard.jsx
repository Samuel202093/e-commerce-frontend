import React from 'react'
import Headphone from '../assets/img/headphones_a_1.webp'
import '../assets/css/summer.css'
import { useNavigate } from 'react-router-dom'
import Watch from '../assets/img/green_apple_watch-preview.png'
import { gadgets } from '../datas/news'
import { addToCart } from '../datas/cartSlice'
import { useDispatch } from 'react-redux'
import { useGetAllProductsQuery } from '../datas/productApi'



const SummerCard = () => {
    const { data, isloading} = useGetAllProductsQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(data);
    let result = []
    
    const gather = (array, compare)=>{
        if (array) {        
            return array?.filter((x)=> x.category === compare).slice(0,2)
        }
    }

    const tvFilter = gather(data, 'tv')
    const smartFilter = gather(data, 'smart phones')
    const headFilter = gather(data, 'headphones')
    const gamesFilter = gather(data, 'games')
    


    const output = data && [...tvFilter, ...smartFilter, ...headFilter, ...gamesFilter ]
    

    const handleCart = (item)=>{
        dispatch(addToCart(item))
        navigate('/cart')
    }
  return (
    <section>
    <section className='summer-layout'>
        
        <div className='summer-content'>
            <p>20% OFF</p>
            <h3>FINE</h3>
            <h3>SMILE</h3>
            <p>15 Nov To 7 Dec</p>

            <img src={Headphone} alt="headphones" className='card-image'  />
        </div>

        <div className='sale-wrapper'>
            <p>Beats Solo Air</p>
            <h3>Summer Sale </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, accusamus eius. Veniam fuga odio expedita.</p>
            <button> Shop </button>
        </div>
    </section>

    <section className='seller-products'>
        <div className='seller-products-heading'>
            <h2>Best Seller Products</h2>
            <p>variations of gadgets</p>
        </div>
        <div className='seller-products-card-wrapper'>

            {output?.map((item)=>{
                return ( 
                <div key={item._id} className='seller-products-card'>
                    <img src={item.imageUrl}  loading='lazy'/>
                    <div className='content-container'>

                    <div className='title-price-container'>
                    <p>{item.name.slice(0, 21)}</p>
                    <h3>${item.price}</h3>
                    </div>

                    <div className='buy-now-container'>
                    <button type='submit' onClick={()=> handleCart(item)}>Buy Now</button>
                    </div>
                        
                    </div>
                   
                    
                </div>
                )
            })}
            
        </div>
    </section>

    <section className='happy-hour-layer'>
        <div className='happy-hour-smile'>
            <p>20% OFF</p>
            <h3>HAPPY</h3>
            <h3>HOURS'</h3>
            <p>15 Nov To 7 Dec</p>

            {/* <img src={Watch} alt="headphones" className='card-image'  /> */}
        </div>
        <div className='happy-hour-sale'>
            <p>Beats Solo Air</p>
            <h3>Summer Sale </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, accusamus eius. Veniam fuga odio expedita.</p>
            <button> Shop </button>
        </div>
    </section>
    </section>
  )
}

export default SummerCard