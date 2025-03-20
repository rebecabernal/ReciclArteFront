import './card.css';

const Card = ({ item, onReserve, onDelete }) => {
  return (
    <div className="card">
      <img src={item.imgUrl} alt={item.name} className="card-image" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <div className="card-buttons">
        {!item.reserved && <button onClick={() => onReserve(item.id)}>Reservar</button>}
        <button onClick={() => onDelete(item.id)}>Eliminar</button>
      </div>
      {item.reserved && <span className="reserved-badge">Reservado</span>}
    </div>
  );
};

export default Card;

