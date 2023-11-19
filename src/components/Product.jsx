import React, { useEffect, useContext } from "react";
import ProductsContext from "../context/ProductsContext";

const Product = () => {
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    console.log("Products:", products);
  }, [products]);

  return <div>Product</div>;
};

export default Product;