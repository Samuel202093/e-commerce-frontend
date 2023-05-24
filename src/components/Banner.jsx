import React from 'react'
import { Link } from 'react-router-dom'
import Headphone from '../assets/img/headphones_c_1.webp'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-container-content'>
            <p>Beats Solo</p>
            <h3>Wireless </h3>
            <h1>HEADPHONES</h1>
            <img src={Headphone} alt="headphones" className='banner-image'  />

            <div>
                <Link to='/headphones'>
                <button type='button'>Shop Now</button>
                </Link>
                <div className='description'>
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nostrum blanditiis. Quae, assumenda. Numquam amet hic nobis quod obcaecati et?</p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Banner