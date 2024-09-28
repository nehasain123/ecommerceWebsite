import './ProductCard.css';
import Button from '../Button/Button';
const ProductCard = ({ image, title, price }) => {
  return (
    <div className="card product-card text-center">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">Per Kg</p>
        <h4>{price}$</h4>
        <div className="Add-Cart-btn">
          
          <Button textKey="addToCart" type="link" link="/cart" icon={" fa-solid  fa-cart-shopping"} className="btn-warning" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
