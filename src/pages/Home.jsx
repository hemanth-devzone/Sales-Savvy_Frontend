import { FiPackage, FiShield, FiRotateCcw, FiStar, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      category: 'Electronics',
      price: 299.99,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      category: 'Wearables',
      price: 249.99,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'New',
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'Ultra Slim Laptop',
      category: 'Computers',
      price: 1299.99,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Premium',
      rating: 4.9,
      reviews: 256
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">New Collection 2024</span>
            <h1 className="hero-title">
              Discover Your Perfect<br />
              <span className="hero-title-gradient">Shopping Experience</span>
            </h1>
            <p className="hero-description">
              Quality products, exceptional service, and unbeatable prices - all in one place.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/products')}>
                Shop Now
                <FiArrowRight />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/about')}>
                Get Started
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card hero-card-1">
              <div className="card-icon">
                <FiPackage />
              </div>
              <div>
                <p className="card-title">Fast Delivery</p>
                <p className="card-subtitle">Within 2-3 days</p>
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="card-icon">
                <FiShield />
              </div>
              <div>
                <p className="card-title">Secure Payment</p>
                <p className="card-subtitle">100% protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <FiPackage />
            </div>
            <h3 className="feature-title">Free Shipping</h3>
            <p className="feature-description">On orders over $100</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiShield />
            </div>
            <h3 className="feature-title">Secure Payment</h3>
            <p className="feature-description">100% protected transactions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiRotateCcw />
            </div>
            <h3 className="feature-title">Easy Returns</h3>
            <p className="feature-description">30-day return policy</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FiStar />
            </div>
            <h3 className="feature-title">Quality Products</h3>
            <p className="feature-description">Carefully curated selection</p>
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-container">
          <button className="btn-secondary" onClick={() => navigate('/products')}>
            View All Products
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Shopping?</h2>
          <p className="cta-description">
            Join thousands of satisfied customers and experience the best in online shopping
          </p>
          <div className="cta-buttons">
            <button className="btn-light" onClick={() => navigate('/register')}>
              Create Account
            </button>
            <button className="btn-outline" onClick={() => navigate('/products')}>
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
