import { useState, useEffect } from "react";
import React from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      fetchProducts("Grey").then((response) => {
         setProducts(response);
      });
   }, []);

   return (
      <section className="products container">
         <ProductCard />
      </section>
   );
}

export default Products;
