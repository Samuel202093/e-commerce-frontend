import React from 'react'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import { FaShippingFast } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'

const Motion = () => {
  return (
    <marquee behavior="scroll" direction="right" scrolldelay ='0.2s'>
    <div className='motion-container'>
        <div className='motion-content'>
            <FaShippingFast className='motion-icon' />
            <div className='motion-wrap'>
                <p>Free Shipping</p>
                <span>Free Shipping on Order</span>
            </div>

        </div>

        <div className='motion-content'>
            <VscWorkspaceTrusted className='motion-icon' />
            <div className='motion-wrap'>
                <p>Money Guarantee</p>
                <span>30 Days Money Back</span>
            </div>
        </div>

        <div className='motion-content'>
            <BiSupport className='motion-icon' />
            <div className='motion-wrap'>
                <p>Online Support 24/7</p>
                <span>Technical Support 24/7</span>
            </div>
        </div>

        <div className='motion-content'>
            <RiSecurePaymentFill className='motion-icon'/>
            <div className='motion-wrap'>
                <p>Secure Payments</p>
                <span>All Cards Accepted</span>
            </div>
        </div>

    </div>
    </marquee>
  )
}

export default Motion