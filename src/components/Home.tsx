import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContent}>
        <img src="@@img_hero@@" alt="Organic farm products" className={styles.heroImg} />
        <div className={styles.heroText}>
          <h1>Fresh Organic Products, Direct from Our Farm</h1>
          <p>
            Enjoy the pure taste of nature with our farm-fresh cheese, creamy milk, and tender chicken meat. All 100% organic, raised with care and love on our local farm.
          </p>
          <div className={styles.ctaBtns}>
            <Link to="/products/cheese" className={styles.cta}>Shop Cheese</Link>
            <Link to="/products/milk" className={styles.cta}>Shop Milk</Link>
            <Link to="/products/chicken" className={styles.cta}>Shop Chicken</Link>
          </div>
        </div>
      </div>
      <section className={styles.productsGrid}>
        <Link to="/products/cheese" className={styles.productCard}>
          <img src="@@img_cheese@@" alt="Organic Cheese" />
          <h2>Organic Cheese</h2>
          <p>Handcrafted, creamy, and rich in flavor. Made from the freshest milk on our farm.</p>
        </Link>
        <Link to="/products/milk" className={styles.productCard}>
          <img src="@@img_milk@@" alt="Organic Milk" />
          <h2>Organic Milk</h2>
          <p>Pure, nutritious, and delicious. Freshly bottled every morning.</p>
        </Link>
        <Link to="/products/chicken" className={styles.productCard}>
          <img src="@@img_chicken@@" alt="Fresh Chicken Meat" />
          <h2>Fresh Chicken Meat</h2>
          <p>Tender and flavorful, from free-range chickens raised with care.</p>
        </Link>
      </section>
    </main>
  );
}
