import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "../../assets/css/product.css";
import { addToCart } from '../../datas/cartSlice';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../../datas/productApi';
import Network from '../Network';

const Tv = () => {
  const { isLoading, error, data} = useGetAllProductsQuery()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const filterResult = data?.filter((item)=>{
    return item.category === "tv"
  })
  const filterResult1 = data?.filter((item)=>{
    return item.category === "tv"
  })?.map((x)=>{
    return x
  })
 
  const handleCart = (item)=>{
    dispatch(addToCart(item))
    navigate('/cart')
  }
  return (
    <section className="card-section">
      { isLoading? (
    // <p style={{textAlign:"center", fontSize:'1rem'}}>Loading....</p>
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
     ): error? ( 
      <Network/>
     ) : (
      <div className="card-grid-container">
      {data?.filter((x)=>{
        return x.category === 'tv' 
      })?.map((item) => {
        return (
          <div className="card-content-container" key={item._id}>
            <img src={item.imageUrl} alt="" srcset="" loading='lazy'/>
            <h3>{item.name.slice(0, 10)}</h3>
            <span>${item.price}</span>
            <p>
             <Link to={`/product/${item._id}`} className='readmore-link'>{item.description.slice(0, 50)}<small className='readmore-span'>...readmore</small></Link>
            </p>
            <button type="sumbit" onClick={()=> handleCart(item)}>Add To Cart</button>
          </div>
        );
      })}
    </div>
     )
    }
      
    </section>
  )
}

export default Tv