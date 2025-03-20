import { useEffect, useState } from 'react';
import { getAllItems, deleteItem, reserveItem } from '../../services/ItemService';
import Card from '../card/card';
import './cardcontainer.css';

const CardContainer = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getAllItems();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleReserve = async (id) => {
    await reserveItem(id);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div className="card-container">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          onReserve={handleReserve}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CardContainer;
