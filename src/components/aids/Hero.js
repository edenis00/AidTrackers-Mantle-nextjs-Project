// components/MainSection.js
import Image from 'next/image';

import React from "react";
import styles from "@/styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.mainSection} id='home'>
      <div className={styles.images}>
        {/* <Image src="/images/image (1).png" alt="Child receiving aid" className={styles.heroImage} width={100} height={200}/> */}
        <Image src="/img/images/home.png" alt="Mother with child" className={styles.heroImage2} width={1000} height={250} />
        {/* <Image src="/images/home.png" alt="Child looking at aid worker" className={styles.heroImage3} width={100} height={200}/> */}
      </div>
      <div className={styles.textContent}>
        <h1 id='header'>
         <span className={styles.highlight}>Revolutionizing </span> Aid {' '}
          <span className={styles.highlight}>Distribution</span> for Greater Impact
        </h1>
        <p id='text'>Harnessing the power of blockchain technology to ensure transparent, efficient, and accountable delivery of humanitarian assistance to those who need it most.</p>
        <div className={styles.buttons}>
          <button className={styles.getStarted}> <a href='#beneficiary'>Get Started</a> </button>
          {/* <a href="#how-it-works" className={styles.learnMorex}>Learn More →</a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
