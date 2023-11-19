import React, { useContext, useEffect } from 'react';
import Menu from '../components/Menu';
import ProductsContext from '../context/ProductsContext';

const Home = () => {
  const { sortedProducts, sortProducts, handleSortChange } = useContext(ProductsContext);
  const [sortType, setSortType] = React.useState('popular');

  const handleSortChangeLocal = async (event) => {
    const selectedSort = event.target.value;
    await handleSortChange(selectedSort);
    setSortType(selectedSort);
  };

  useEffect(() => {
    console.log('Sorted Products:', sortedProducts);
  }, [sortedProducts]);

  return (
    <div>
      <Menu />
      <h1>Home Page</h1>
      <div>
        <label htmlFor="sortSelect">Sort by:</label>
        <select id="sortSelect" onChange={handleSortChangeLocal} value={sortType}>
          <option value="popular">Popular</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div>
        {sortedProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
