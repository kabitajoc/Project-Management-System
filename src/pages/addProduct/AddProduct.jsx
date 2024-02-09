import React, { useState } from "react";
import "./AddProduct.css";
import axios from "axios";
const AddProduct = () => {
  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  //   console.log(productImage);

  const addProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://65c33eb139055e7482c06a6a.mockapi.io/products",
      {
        productImage: productImage,
        productName: productName,
        productDescription: productDescription,
        productPrice: productPrice,
      }
    );
    console.log(response);
  };
  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={addProduct} id="addProductForm">
        <div className="form-group">
          <label htmlFor="productImage">Product Image URL:</label>
          <input
            type="url"
            id="productImage"
            name="productImage"
            onChange={(e) => setProductImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            min="0"
            step="0.01"
            onChange={(e) => setProductPrice(e.target.value)}
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

export default AddProduct;
