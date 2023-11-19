import React, { createContext, useEffect, useState } from 'react';

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState('popular');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        sortProducts(sortType, data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [sortType]);

  const fetchSortedData = async (type) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?sort=${type}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching sorted data:', error);
      return [];
    }
  };

  const sortProducts = (type, dataToSort) => {
    try {
      let sortedData = [];

      if (type === 'alphabetical') {
        sortedData = dataToSort.sort((a, b) => a.title.localeCompare(b.title));
      } else if (type === 'price') {
        sortedData = dataToSort.sort((a, b) => a.price - b.price);
      } else {
        sortedData = dataToSort;
      }

      setSortedProducts(sortedData);
      setSortType(type);
    } catch (error) {
      console.error('Error sorting data:', error);
    }
  };

  const handleSortChange = async (type) => {
    const dataToSort = await fetchSortedData(type);
    sortProducts(type, dataToSort);
  };

  return (
    <ProductsContext.Provider value={{ products, sortedProducts, sortProducts, handleSortChange }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;