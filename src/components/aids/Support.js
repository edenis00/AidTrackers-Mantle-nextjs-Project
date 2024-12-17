import Image from 'next/image';
import styles from '../styles/Support.module.css';


const Support = () => {
  const title = 'Help the future leaders of Tomorrow';
  const description = 'Born out of a vision, a single-minded objective that puts service before anything else,Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shopping and logistics scenario. Its meteroric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry';
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src='/images/Frame160.png' alt='' className={styles.image} width={400} height={300}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src='/images/Frame160(1).png' alt=''  className={styles.image} width={400} height={300}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
      </div>
    </div>
    <div className={styles.card}>
    <div className={styles.imageContainer}>
      <Image src='/images/Frame160(2).png' alt='' className={styles.image} width={400} height={300}/>
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href="#" className={styles.link}>Donate Now &rsaquo;</a>
    </div>
    </div>
    </div>
  );
};

export default Support;
