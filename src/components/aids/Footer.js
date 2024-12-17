// components/Footer.js
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.logocontainer}>
          <Image src="/img/images/Union.png" alt="company logo" className={styles.companylogo} width={20} height={20} />
          <h2 className={styles.logo}>Aid <span className={styles.txt}>Tracker</span></h2>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className={styles.badges}>
          <Image src="/img/images/google-page-speed1.png" alt="Google Play" className={styles.icon} width={200} height={200} />

        </div>
      </div>
      <div className={styles.footerSection}>
        <h3>Links</h3>
        <ul className={styles.linksList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#how-it-works">How it Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#beneficiary">Beneficiaries</a></li>
          <li><a href="#donors">Donors</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact us</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>+23483561921</p>
        <div className={styles.socialIcons}>
          <Image src="/img/images/Group 5.png" alt="Facebook" width={20} height={20} />
          <Image src="/img/images/Group 11.png" alt="Instagram" width={20} height={20} />
          <Image src="/img/images/Group 10.png" alt="Twitter" width={20} height={20} />
          <Image src="/img/images/Group 9.png" alt="LinkedIn" width={20} height={20} />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {year} Copyright by Aid Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
