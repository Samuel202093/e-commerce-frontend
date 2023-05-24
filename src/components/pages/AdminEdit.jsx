import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader'

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
}


const AdminEdit = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#ffff')
    

    const params = useParams()
    const navigate = useNavigate()

    const getSingleProduct = ()=>{
        axios.get(`https://hi-gadget.onrender.com/product/${params.id}`)
        .then((res)=>{
            setName(res.data.name)
            setCategory(res.data.category)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setImage(res.data.imageUrl)
            
        })
    }

    useEffect(()=>{
        getSingleProduct()
    }, [])


  
    const handleUpload = (e) => {
      setImage(e.target.files[0]);
    };
  

    const handleUpdate =(e)=>{
      e.preventDefault()
      setLoading(true)
    try {


      axios({
        method: 'put',
        url: `https://hi-gadget.onrender.com/product/${params.id}`,
        data: {name:name, price:price, category:category, description:description},
        headers: 'Application/json'
      })
      .then((res)=>{
        if (res.status === 200) {
          toast.success('product updated')
          setTimeout(()=>{
            navigate('/admin/products')
            window.location.reload(true)
          },6000)
          setLoading(false)
        }
      })
      .catch((error)=>{
          toast.error('unable to update product')
      })
    } catch (error) {
      toast.error('cannot send put request')
    }
    } 

  return (
    <div className="add-wrapper">
    <div className="admin-main-heading">
      <h3>Update Product</h3>
    </div>

    <form className="input-field-container">
      <input
        type="text"
        placeholder="Name of Product"
        value={name}
        name="name"
        onChange={(e)=> setName(e.target.value)}
        required={true}
      />
      <div>
        {/* <label htmlFor="imaged" className="upload-label">
          UPLOAD PRODUCT IMAGE
        </label> */}
        <img src={image} alt="" className='update-img'/>
        <input
          type="file"
          name="image"
          id="imaged"
          accept="image/png, image/avif, image/gif, image/jpeg"
          onChange={(e) => {
            
            handleUpload(e);
          }}
        />
        {/* <img src={image} alt="" className="img-upload" /> */}
      </div>
      <input
        type="text"
        placeholder="Category of Product"
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
        required={true}
        name="category"
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        required={true}
        name="price"
      />
      <textarea
        name="description"
        id=""
        cols="0"
        rows="10"
        placeholder="Description of Product"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        required={true}
      />
      <button type="submit" onClick={handleUpdate}>{loading === true ? (<ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={25}
        speedMultiplier={0.7}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):'Update Product'}</button>
    </form>
  </div>
  )
}

export default AdminEdit