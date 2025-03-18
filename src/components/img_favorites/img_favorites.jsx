import React from "react";
import "./img_favorites.css"; 

const ImgFavorites = () => {
 
  const images = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    src: "https://via.placeholder.com/150", 
    alt: `Favorito ${index + 1}`,
  }));

  return (
    <div className="img-favorites-container">
      <h2>Imágenes de Favoritos</h2>
      <div className="img-grid">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} className="grid-item" />
        ))}
      </div>
    </div>
  );
};

export default ImgFavorites;