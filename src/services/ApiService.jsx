import React from 'react'
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/items';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};