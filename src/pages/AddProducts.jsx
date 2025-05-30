import './AddProducts.css'
import usePostRequest from '../hooks/usePostRequest';
import { useState } from 'react';

export default function AddProducts(){
    
        const {data, hasError, errorMessage, isLoading , postRequest} = usePostRequest();
        const [selectedImage, setSelectedImage] = useState(null);
        const [selectedImagePath, setSelectedImagePath] = useState("placeholder.jpg");
        const [formData, setFormData] = useState({
           prodname:"",
           proddesc:"",
           catagory:"",
           prodimg: "img1.png",
           price: 0,
           discount:0,
           finalprice:0,
           inStock: false,
           inSale : false
        });


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        const path = file.name
        setSelectedImage(imageUrl);
        setSelectedImagePath(path);
        console.log(path)
    }
  };


  const handleInputChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData)
    postRequest('products',formData)


    setFormData({  
           prodname:"",
           proddesc:"",
           catagory:"",
           prodimg:"img1.png",
           price: 0,
           discount:0,
           finalprice:0,
           inStock: false,
           inSale : false
          });

          setSelectedImage(null)
  };

  return (
    <div className="container">
      <div className="add-product-form">
        <h1 className="addprod-prod-title">Add New Product</h1>
        <div className="input-group">
          <label htmlFor="prodname" className="label">Product Name</label>
          <input 
            type="text"
            id="prodname"
            name="prodname"
            value={formData.prodname}
            onChange={handleInputChange}

            className="input"
            placeholder="Enter product name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="price" className="label">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter price"
            step="0.01"
          />
        </div>
        <div className="input-group">
          <label htmlFor="proddesc" className="label">Description</label>
          <textarea
            id="proddesc"
            name="proddesc"
            value={formData.proddesc}
            onChange={handleInputChange}
            className="input textarea"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="catagory" className="label">Category</label>
          <select
            id="catagory"
            name="catagory"
            value={formData.catagory}
            onChange={handleInputChange}
            className="input"
          >
            <option value="">Select a category</option>
            <option value="Skincare">Skincare</option>
            <option value="Makeup">Makeup</option>
            <option value="Fragnance">Fragnance</option>
            <option value="Hair">Hair</option>
          </select>
        </div>
         <div className="photo-picker-container">
      <h1 className="title">Add Image</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file-input"
        id="photo-upload"
      />
      <label htmlFor="photo-upload" className="file-label">
        Choose an Image
      </label>

      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Selected" className="preview-img" />
        </div>
      )}
    </div>
        <button
          onClick={handleSubmit}
          className="submit-btn"
        >
          Add Product
        </button>
         {

          hasError && <div>Error Please Fill The Form Properly</div>

         }  
      </div>
    </div>
    ) 
}