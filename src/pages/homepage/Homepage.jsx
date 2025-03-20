import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/ApiService'; 
import ProductCard from '../../components/cards/ProductCard';
import './HomePage.css';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="main-section">
      <h3>Artículos en tu zona</h3>
      <section className="products-container">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>Cargando productos...</p>
        )}
      </section>
    </main>
  );
}

export default HomePage;