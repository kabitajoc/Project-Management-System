import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const editProduct = (e) => {
    e.preventDefault();
    const response = axios.put(
      " https://65c33eb139055e7482c06a6a.mockapi.io/products/" + id,
      product
    );
    if (response.status === 200) {
      navigate("/singleProduct/" + id);
    } else {
      alert("something went Wrong");
    }
  };
  const fetchProduct = async () => {
    const response = await axios.get(
      " https://65c33eb139055e7482c06a6a.mockapi.io/products/" + id
    );
    // console.log(response);
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form onSubmit={editProduct} id="addProductForm">
        <div className="form-group">
          <label htmlFor="productImage">Product Image URL:</label>
          <input
            type="url"
            value={product.avatar}
            onChange={handleChange}
            id="productImage"
            name="productImage"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            value={product.productName}
            onChange={handleChange}
            id="productName"
            name="productName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            value={product.productDescription}
            onChange={handleChange}
            name="productDescription"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            value={product.productPrice}
            onChange={handleChange}
            id="productPrice"
            name="productPrice"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
