import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img 
          src={product.imgUrl || "https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg?t=st=1742499763~exp=1742503363~hmac=d3331b7f508e7570162efc2e9bdac5adef85bf1d43e947ddbe2df1507282c8d9&w=740"} 
          alt={product.name} 
          className="product-image" 
        />
        <h3>{product.name}</h3>
        <p><strong>Descripción:</strong> {product.description}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Condición:</strong> {product.itemCondition}</p>
        <p><strong>Ubicación:</strong> {product.location}</p>
        <button className="reserve-button">Reservar</button>
      </div>
    );
  };
  
  export default ProductCard;