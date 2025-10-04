import { FiShield, FiPackage, FiClock, FiStar } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">About Sales Savvy</h1>
        <p className="about-subtitle">
          Your trusted partner in online shopping, delivering quality products and exceptional
          service since day one.
        </p>
      </div>

      <div className="about-content">
        <section className="story-section">
          <div className="story-container">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Sales Savvy was founded with a simple mission: to make quality products accessible to everyone.
              We believe that shopping should be easy, enjoyable, and rewarding.
            </p>
            <p className="story-text">
              Today, we serve thousands of satisfied customers worldwide, offering an extensive range of products
              from electronics to fashion, all backed by our commitment to quality and customer satisfaction.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2 className="values-title">Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FiShield />
              </div>
              <h3 className="value-title">Secure Shopping</h3>
              <p className="value-description">
                Your data and transactions are protected with industry-leading security.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiPackage />
              </div>
              <h3 className="value-title">Fast Delivery</h3>
              <p className="value-description">
                Quick and reliable shipping to your doorstep, anywhere in the country.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiClock />
              </div>
              <h3 className="value-title">24/7 Support</h3>
              <p className="value-description">
                Our customer service team is always ready to help you with any questions.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiStar />
              </div>
              <h3 className="value-title">Quality Products</h3>
              <p className="value-description">
                We carefully curate our catalog to ensure only the best products reach you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
