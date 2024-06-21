import { useState } from 'react';
import './App.css';
import ProductForm from './assets/pages/ProductForm';
import ProductList from './assets/pages/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const handleProductSubmit = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleNewProductClick = () => {
   
  };

  return (
    <>
      <ProductForm onProductSubmit={handleProductSubmit} />
      <ProductList products={products} onNewProductClick={handleNewProductClick} />
    </>
  );
}

export default App;
