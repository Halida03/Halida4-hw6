import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const Menu = () => {
  const { sortProducts } = useContext(ProductsContext);

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    sortProducts(selectedSort);
  };

  return (
    <div>
      <div>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/About">
          <div>About</div>
        </Link>
        <Link to="/Contacts">
          <div>Contacts</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;