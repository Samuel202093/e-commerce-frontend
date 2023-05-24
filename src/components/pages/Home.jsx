import React from 'react'
import axios from 'axios'
import Banner from '../Banner'
import Card from '../Card'
import Motion from '../Motion'
import SummerCard from '../SummerCard'
import NewsCard from '../NewsCard'
import Modal from '../Modal'
import ProtectedRoute from '../ProtectedRoute'
import OrderModal from './OrderModal'




const Home = () => {
   
    
  return (
    
    <div>
      {/* <Modal/> */}
      {/* <ProtectedRoute/> */}
      {/* <OrderModal /> */}
      <Banner/>
      <Card />
      <Motion/>
      <SummerCard />
      <NewsCard />
    </div>
  )
}
 
export default Home