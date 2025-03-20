import React from 'react';
import CardContainer from '../../components/cardContainer/CardContainer';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Todos los ítems disponibles</h1>
      <CardContainer />
    </div>
  );
};

export default HomePage;
