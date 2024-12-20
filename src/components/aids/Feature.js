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
          Finding the right talent can be challenging. 
          We help you discover professionals who align with your needs,
           integrate seamlessly into your processes, 
           and stay committed for the long term—unlike traditional freelancers.
          </p>
          <p>
            Our <a href="#" className={styles.link}>delivery model</a> ensures cost efficiency and helps you stay within budget.
          </p>
          <blockquote className={styles.quote}>
            &quot;Recognizing deeper challenges within the software, 
            Simform inspired us to expand our vision and create additional modules to enhance functionality.&quot;
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
