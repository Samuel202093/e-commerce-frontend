import React from 'react'
import '../assets/css/card.css'
import { cardProducts } from '../datas/news'
import { TfiFlickr} from 'react-icons/tfi'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <div className='card-container'>
        
        {cardProducts.map((item)=>{
            return (
                
                    <div className={item.className} key={item.id}>
                        <p>{item.sub}</p>
                        <h3>{item.cap} </h3>
                        <h1>{item.title}</h1>
                        <img src={item.img} alt="headphones" className='card-image'  />
                        <button><Link to={item.path} className='btn-link'>Flick<TfiFlickr className='dot'/></Link></button>
                    </div>
                
            )
        })}
    </div>
  )
}

export default Card