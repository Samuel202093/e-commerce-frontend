import React from 'react'
import { HiTemplate } from 'react-icons/hi'
import { BsCart4 } from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'
import { useGetAllOrdersQuery, useGetAllProductsQuery, useGetAllCustomersQuery } from '../../datas/productApi'
import Chart from '../../components/Chart'


const RightMenu = () => {
  const {data} = useGetAllProductsQuery()
  const data1 = useGetAllOrdersQuery()
  const sum = data1.data?.reduce((accumulator, current)=>{
    return accumulator + current.total;
  }, 0)

  const lastestResult = data1.data?.slice(0,6)

 
    
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
  
  


  
  return (
    <>
        <div className='admin-main-heading'>
            <h3>Dashboard</h3>
          </div>

          <div className='admin-total-container'>
            <div className='total-container'>
              <div className='admin-circle dollar'>
                <FaDollarSign className='admin-circle-icon'/>
              </div>
              <div className='total-container-content'>
                <span>Total Sales</span>
                <h4>${sum}</h4>
              </div>
            </div>
            <div className='total-container'>
              <div className='admin-circle cart'>
                <BsCart4 className='admin-circle-icon'/>
              </div>
              <div className='total-container-content'>
                <span>Total Orders</span>
                <h4>{data1.data?.length}</h4>
              </div>
            </div>
            <div className='total-container'>
              <div className='admin-circle products'>
                <HiTemplate className='admin-circle-icon'/>

              </div>
              <div className='total-container-content'>
              <span>Total Products</span>
                <h4>{data?.length}</h4>
              </div>
            </div>
          </div>

          {/* statistics image */}

          <div className='admin-statistic-container'>
              <Chart/>
          </div>

          <div className='admin-order-container'>
            <h3>Lastest Orders</h3>

            <div className='admin-order-wrapper'>

            {/* fetch from db and display 5 latest orders by sorting */}
            
            <table className='table-container'>
              <tbody>
                {lastestResult?.map((x)=>{
                  return <tr key={x._id}>
                    <td><strong>{x.shipping.email}</strong></td>
                    <td>{x.shipping.phone}</td>
                    <td className='payment'><strong>{x.payment_status}</strong></td>
                    <td><strong>${x.total}</strong></td>
                  </tr>
                })}
              </tbody>
            </table>

           </div>
          </div>

            <div className='admin-product-container'>
            <h3>Latest Products</h3>
            <div className='admin-order-wrapper'> 
            {/* fetch from db and display 5 latest products by sorting */}
            <table className='table-container'>
              <tbody>
                {output?.map((x)=>{
                  return <tr key={x._id}>
                    <td><strong>{x.name}</strong></td>
                    <td>{x.category}</td>
                    <td></td>
                    <td><strong>${x.price}</strong></td>
                  </tr>
                })}
              </tbody>
            </table>
             
              </div>
          </div>
      
    </>
  )
}

export default RightMenu