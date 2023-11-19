import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import ProductsProvider from './context/ProductsContext';

function App() {
  return (
      <ProductsProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </ProductsProvider>
  );
}

export default App;