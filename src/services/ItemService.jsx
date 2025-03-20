import axios from 'axios';

const API_URL = 'http://localhost:8080/api/items';

export const createItem = async (itemData) => {
  const response = await axios.post(API_URL, itemData);
  return response.data;
};

export const getAllItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const reserveItem = async (id) => {
  const response = await axios.put(`${API_URL}/${id}/reserve`);
  return response.data;
};

export const updateItem = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};
