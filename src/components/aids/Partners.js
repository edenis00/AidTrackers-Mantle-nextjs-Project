// components/Partners.js
import Image from 'next/image';
// import styles from "../styles/Privacy.module.css";
import styles from '../styles/Partners.module.css';

export default function Partners() {
  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>
        Meet the Our <span className={styles.highlight}>Partners</span>
      </h2>
      <div className={styles.logoContainer}>
        <Image src="/images/hd.png" alt="Sampath Cream House" className={styles.logo} width={200} height={20}/>
        <Image src="/images/sampath.png" alt="sapath cream house" className={styles.logo} width={200} height={50}/>
        <Image src="/images/logo8.png" alt="Bikes Logo" className={styles.logo} width={200} height={50} />
        <Image src="/images/logo5.png" alt="AdClipse" className={styles.logo} width={200} height={50} />
        <Image src="/images/pjc.png" alt="PJC Bridge" className={styles.logo} width={200} height={50} />
      </div>
    </section>
  );
}
