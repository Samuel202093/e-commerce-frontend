import React from "react";
import "../../assets/css/product.css";
import { useGetAllProductsQuery } from "../../datas/productApi";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import Network from "../Network";
import { addToCart } from '../../datas/cartSlice';


const Speaker = () => {
const { isLoading, error, data } = useGetAllProductsQuery()
const dispatch = useDispatch()
const navigate = useNavigate()



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
        return x.category === 'speakers' 
      })?.map((item) => {
        return (
          <div className="card-content-container" key={item._id}>
            <img src={item.imageUrl} alt="" srcset="" loading="lazy"/>
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
  );
};

export default Speaker;
