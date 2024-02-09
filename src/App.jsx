import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AddProduct from "./pages/addProduct/AddProduct";

import ProductList from "./pages/home/ProductList";
import EditProduct from "./pages/editProduct/EditProduct";
import SingleProduct from "./pages/singleProduct/Singleproduct";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/editProducts/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
