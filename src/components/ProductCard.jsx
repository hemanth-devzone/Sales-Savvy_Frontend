import { FiShoppingCart, FiStar } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.badge && (
        <span className={`product-badge ${product.badge.toLowerCase()}`}>
          {product.badge}
        </span>
      )}

      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        {product.rating && (
          <div className="product-rating">
            <FiStar className="star-icon filled" />
            <span className="rating-value">{product.rating}</span>
            <span className="rating-count">({product.reviews} reviews)</span>
          </div>
        )}

        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn">
            <FiShoppingCart />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
