import { FiMonitor, FiHeadphones, FiWatch, FiSmartphone, FiCamera, FiCpu, FiSpeaker, FiTv } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Laptops',
      icon: FiMonitor,
      productCount: 45
    },
    {
      id: 2,
      name: 'Headphones',
      icon: FiHeadphones,
      productCount: 32
    },
    {
      id: 3,
      name: 'Smartwatches',
      icon: FiWatch,
      productCount: 28
    },
    {
      id: 4,
      name: 'Smartphones',
      icon: FiSmartphone,
      productCount: 56
    },
    {
      id: 5,
      name: 'Cameras',
      icon: FiCamera,
      productCount: 24
    },
    {
      id: 6,
      name: 'Gaming',
      icon: FiCpu,
      productCount: 38
    },
    {
      id: 7,
      name: 'Speakers',
      icon: FiSpeaker,
      productCount: 19
    },
    {
      id: 8,
      name: 'Monitors',
      icon: FiTv,
      productCount: 31
    }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate('/products', { state: { category: categoryName } });
  };

  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1 className="categories-title">Product Categories</h1>
        <p className="categories-subtitle">
          Browse our wide selection of products across all categories
        </p>
      </div>

      <div className="categories-content">
        <div className="categories-grid">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="category-card"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="category-icon-wrapper">
                  <IconComponent className="category-icon" />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.productCount} products</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
