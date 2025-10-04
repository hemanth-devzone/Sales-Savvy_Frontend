import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">SS</div>
          <span className="logo-text">Sales Savvy</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
          </div>

          <button className="cart-icon-btn" onClick={() => navigate('/cart')}>
            <FiShoppingCart />
            <span className="cart-badge">0</span>
          </button>

          <button className="user-icon-btn" onClick={() => navigate('/login')}>
            <FiUser />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
