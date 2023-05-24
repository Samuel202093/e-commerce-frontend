import React from 'react'
import '../assets/css/network.css'
import networkImage from '../assets/img/network_error.png'

const Network = () => {
    const refresh = ()=>{
        window.location.reload(true)
    }
  return (
    <div className='network-wrapper'>
        <img src={networkImage} alt="" srcset="" loading='lazy'/>
        <h4>Your connection is lost</h4>
        <span>please check your internet connections and try again.</span>
        <button onClick={refresh}>Try again</button>
    </div>
  )
}

export default Network