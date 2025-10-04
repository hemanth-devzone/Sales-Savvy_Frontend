import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Wearables', 'Computers'];

  const products = [
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
    },
    {
      id: 4,
      name: 'Noise Cancelling Earbuds',
      category: 'Electronics',
      price: 189.99,
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 5,
      name: 'Gaming Laptop Pro',
      category: 'Computers',
      price: 1899.99,
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Premium',
      rating: 4.8,
      reviews: 203
    },
    {
      id: 6,
      name: 'Fitness Tracker Band',
      category: 'Wearables',
      price: 129.99,
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      reviews: 98
    }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="products-title">Our Products</h1>
        <p className="products-subtitle">Discover our curated collection of premium products</p>
      </div>

      <div className="products-content">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid-container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
