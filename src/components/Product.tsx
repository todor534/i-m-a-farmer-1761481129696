import { useParams, Link } from 'react-router-dom';
import styles from './Product.module.css';

const PRODUCT_DETAILS = {
  cheese: {
    name: 'Organic Cheese',
    img: '@@img_cheese@@',
    desc: 'Handcrafted from our freshest organic milk, our cheese offers a creamy, rich flavor that elevates any meal. No additives, just pure farm goodness.',
    benefits: [
      '100% organic milk',
      'Rich, creamy taste',
      'Handcrafted on the farm',
    ],
    cta: 'Order Cheese',
  },
  milk: {
    name: 'Organic Milk',
    img: '@@img_milk@@',
    desc: 'Our milk is bottled fresh every morning, brimming with nutrients and natural creaminess. Perfect for families who want pure, healthy dairy.',
    benefits: [
      'No hormones or antibiotics',
      'High in calcium and vitamins',
      'Delivered fresh',
    ],
    cta: 'Order Milk',
  },
  chicken: {
    name: 'Fresh Chicken Meat',
    img: '@@img_chicken@@',
    desc: 'Tender, juicy chicken from free-range birds, raised on a natural, organic diet. Taste the difference that care and quality make.',
    benefits: [
      'Free-range, organic',
      'No chemicals or preservatives',
      'Full traceability',
    ],
    cta: 'Order Chicken',
  },
};

export default function Product() {
  const { productId } = useParams();
  const product = PRODUCT_DETAILS[productId as keyof typeof PRODUCT_DETAILS];

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <main className={styles.productPage}>
      <div className={styles.productDetail}>
        <img src={product.img} alt={product.name} className={styles.productImg} />
        <div className={styles.productText}>
          <h1>{product.name}</h1>
          <p className={styles.desc}>{product.desc}</p>
          <ul className={styles.benefits}>
            {product.benefits.map(b => <li key={b}>{b}</li>)}
          </ul>
          <a href="#order" className={styles.cta}>{product.cta}</a>
          <Link to="/" className={styles.backLink}>← Back to all products</Link>
        </div>
      </div>
      <section id="order" className={styles.orderSection}>
        <h2>Interested? Place Your Order</h2>
        <p>Contact us by phone or email to reserve your {product.name.toLowerCase()} today. Freshness guaranteed!</p>
        <div className={styles.contactInfo}>
          <span>📞 <a href="tel:+1234567890">+1 234 567 890</a></span>
          <span>✉️ <a href="mailto:farmer@organicfarm.com">farmer@organicfarm.com</a></span>
        </div>
      </section>
    </main>
  );
}
