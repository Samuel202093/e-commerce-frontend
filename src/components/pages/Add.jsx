import React, { useState } from "react";
import "../../assets/css/add.css";
import axios from "axios";
import { toast } from "react-toastify";
import ClipLoader from 'react-spinners/ClipLoader'

const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
}

const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState('#ffff')

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {

      const formdata = new FormData()
      formdata.append("name", data.name )
      formdata.append("category", data.category)
      formdata.append("price", data.price)
      formdata.append("description", data.description)
      formdata.append("image", image)

      axios({
        method: 'post',
        url: 'https://hi-gadget.onrender.com/product',
        data: formdata,
        headers: 'multipart/form-data'
      })
      .then((res)=>{
        if (res.status === 200) {
          res.data
          toast.success('product added')
          setData({
            name: '',
            category: '',
            price: '',
            description:''
          })
          setImage(null)
          setLoading(false)
        }
      })
      .catch((error)=>{
        
          toast.error('unable to add product')
          setData({
            name: '',
            category: '',
            price: '',
            description:''
          })
          setImage(null)
          setLoading(false)
        
      })
    } catch (error) {
      toast.error('cannot make a post request')
    }
  }

  

  return (
    <div className="add-wrapper">
      <div className="admin-main-heading">
        <h3>Add a Product</h3>
      </div>

      <form className="input-field-container" >
        <input
          type="text"
          placeholder="Name of Product"
          value={data.name}
          name="name"
          onChange={handleChange}
          required={true}
        />
        <div>
          {/* <label htmlFor="imaged" className="upload-label">
            UPLOAD PRODUCT IMAGE
          </label> */}
          <input
            type="file"
            name="image"
            id="imaged"
            accept="image/png, image/avif, image/gif, image/jpeg"
            required={true}
            onChange={(e) => {
              
              handleUpload(e);
            }}
          />
          {/* <img src={image} alt="" className="img-upload" /> */}
        </div>
        <input
          type="text"
          placeholder="Category of Product"
          value={data.category}
          onChange={handleChange}
          required={true}
          name="category"
        />
        <input
          type="text"
          placeholder="Price"
          value={data.price}
          onChange={handleChange}
          required={true}
          name="price"
        />
        <textarea
          name="description"
          id=""
          cols="0"
          rows="10"
          placeholder="Description of Product"
          value={data.description}
          onChange={handleChange}
          required={true}
        />
        <button type="submit" onClick={handleSubmit}>{loading === true ? (<ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={25}
        speedMultiplier={0.7}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):'Submit'}</button>
      </form>
    </div>
  );
};

export default Add;
