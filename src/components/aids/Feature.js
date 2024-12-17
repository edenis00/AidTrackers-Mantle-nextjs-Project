// components/Feature.js
import Image from 'next/image';
import styles from '@/styles/Feature.module.css';

const Feature = () => {
  return (
    <section className={styles.featureSection} id='features'>
      <h2 className={styles.title}>Features</h2>
      <div className={styles.featureContainer}>
        <div className={styles.textContainer}>
          <h3>Transparent Tracking</h3>
          <p>
            Finding the right talent is not easy. We help you find the talent that
            suits your needs, follows your processes, and sticks with you long term
            (not the case with freelancers).
          </p>
          <p>
            Our <a href="#" className={styles.link}>delivery model</a> helps you cut costs and deliver within budget.
          </p>
          <blockquote className={styles.quote}>
            &quot;Simform is quick to identify larger problems with the software, so we
            decided to expand our scope to build new modules.&quot;
          </blockquote>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/img/images/Delivery app for tracking order with GPS.png" alt="Tracking illustration" className={styles.image} width={400} height={400}/>
        </div>
      </div>
    </section>
  );
};

export default Feature;
