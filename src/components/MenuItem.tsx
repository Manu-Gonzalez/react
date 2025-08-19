export default function MenuItem({ image, name, description, price }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-img" />
      <div className="menu-info">
        <h3 className="menu-name">{name}</h3>
        <p className="menu-desc">{description}</p>
      </div>
      <span className="menu-price">{price}</span>
    </div>
  );
}
