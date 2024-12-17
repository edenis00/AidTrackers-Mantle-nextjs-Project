// components/Benefits.js
import styles from '../styles/Benefits.module.css';
import Image from 'next/image'

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Benefit of Using the <br />
            <span className={styles.highlight}>Blockchain Technology</span>
          </h2>
          <p className={styles.description}>
            Every transaction and movement of aid is recorded on the blockchain, reducing the risk of fraud and mismanagement. Automated verification and payment systems ensure that aid is delivered promptly. The blockchain technology provides high-level security and real-time updates.
          </p>
          <a href="#" className={styles.link}>
            See more Information <span className={styles.arrow}>→</span>
          </a>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/images/Abou-us-Video.png" alt="Blockchain Benefit" className={styles.image} width={200} height={200}/>
        </div>
      </div>
    </section>
  );
}
