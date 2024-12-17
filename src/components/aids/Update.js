import Image from 'next/image';
import styles from '../styles/Update.module.css';

const Update = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/Health insurance papers and first aid kit.png" alt="Illustration" width={300} height={400} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.headtext}>Real Time Update on Aids</h2>
        <p className={styles.minitext}>
          Finding the right talent is not easy. We help you find the talent that suits your needs,
          follows your processes, and sticks with you long term (not the case with freelancers).
        </p>
        <p className={styles.minitext}>
          Our <a href="/delivery-model" className={styles.link}>delivery model</a> helps you cut costs and deliver within budget.
        </p>
        <blockquote className={styles.quote}>
          &quot;Simform is quick to identify larger problems with the Software so we decided to expand our scope to build new modules&quot;
        </blockquote>
      </div>
    </section>
  );
};

export default Update;
