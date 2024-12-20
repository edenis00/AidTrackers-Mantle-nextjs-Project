// components/Works.js
import styles from '@/styles/works.module.css';

export default function Works() {
  const steps = [
    { 
      title: 'Aid Distribution', 
      description: 'We are organizing an aid distribution event to support those in need. Essential items such as food, clothing, and medical supplies will be provided.' 
    },
    { 
      title: 'Aid Tracking', 
      description: 'We are committed to ensuring transparency and efficiency in our aid distribution. Our Aid Tracking System monitors the allocation and delivery of resources, ensuring they reach those in need.' 
    },
    { 
      title: 'Aids for All', 
      description: 'A comprehensive initiative designed to provide equitable access to essential resources, services, and support for individuals and communities in need.' 
    },
    { 
      title: 'Medical Aid', 
      description: 'A life-saving initiative dedicated to providing access to healthcare services, medications, and medical equipment to underserved and vulnerable communities worldwide.' 
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} id="how-it-works">How it Works</h2>
      <div className={styles.cards}>
        {steps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconPlaceholder}>
              <div className={styles.number}>{index + 1}</div>
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
