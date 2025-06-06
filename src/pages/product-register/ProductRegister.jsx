import { useState } from 'react';
import { createItem } from '../../services/ItemService';
import './productregister.css';

const ProductRegister = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem({ name, description, imgUrl, reserved: false });
      setMessage('¡Item creado exitosamente!');
      setName('');
      setDescription('');
      setImgUrl('');
    } catch (err) {
      setMessage('Error al crear el item.');
    }
  };

  return (
    <div className="register-product-container">
      <form onSubmit={handleSubmit}>
      <h2>Subir nuevo artículo</h2>
        <input
          type="text"
          placeholder="Título"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
        <button type="submit">Subir</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductRegister;
