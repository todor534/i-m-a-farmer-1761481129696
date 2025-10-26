import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.appBg}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>Organic Farm</Link>
        <div className={styles.navLinks}>
          <Link to="/products/cheese">Cheese</Link>
          <Link to="/products/milk">Milk</Link>
          <Link to="/products/chicken">Chicken</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Organic Farm – Fresh, Honest, Local
      </footer>
    </div>
  );
}
