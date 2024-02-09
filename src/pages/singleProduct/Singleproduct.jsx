import axios from "axios";
import "./SingleProduct.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Singleproduct = () => {
  const [singleproduct, setSingleProduct] = useState({});
  const navigate = useNavigate();

  const deleteProduct = async () => {
    const response = await axios.delete(
      " https://65c33eb139055e7482c06a6a.mockapi.io/products/" + id
    );
    if ((response.status = 200)) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  const { id } = useParams();
  const fetchSingleProducts = async () => {
    const response = await axios.get(
      " https://65c33eb139055e7482c06a6a.mockapi.io/products/" + id
    );
    console.log(singleproduct.productName);

    setSingleProduct(response.data);
  };
  useEffect(() => {
    fetchSingleProducts();
  }, []);

  return (
    <div key={singleproduct.id} className="card">
      <img src={singleproduct.avatar} alt="Product Image" />
      <div className="product-info">
        <div className="product-name">
          {singleproduct.productName}

          <div className="price">Price:{singleproduct.productPrice}</div>
        </div>
        <div className="product-description">
          {singleproduct.productDescription}
        </div>
      </div>
      <div className="buttons">
        <button onClick={deleteProduct}>Delete</button>
        <button onClick={() => navigate(`/editProducts/${singleproduct.id}`)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Singleproduct;
