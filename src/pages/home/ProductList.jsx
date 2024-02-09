import React, { useEffect, useState } from "react";
import "./ProductList.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://65c33eb139055e7482c06a6a.mockapi.io/products"
    );
    
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cards">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={product.avatar} alt="Product Image" />
              <div className="product-info">
                <div className="product-name">
                  {product.productName}
                  <div className="price">Price:{product.productPrice}</div>
                </div>
                <div className="product-description">
                  {product.productDescription}
                </div>
              </div>
              <Link to={`/singleProduct/${product.id}`}>See More...</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
