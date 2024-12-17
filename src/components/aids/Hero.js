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
          Ensuring <span className={styles.highlight}>Transparency</span> and{" "}
          <span className={styles.highlight}>Efficient</span> Aid Distribution in Nigeria
        </h1>
        <p id='text'>Ensuring that aid reaches those who need it the most with blockchain based humanitarian aid</p>
        <div className={styles.buttons}>
          <button className={styles.getStarted}> <a href='#beneficiary'>Get Started</a> </button>
          <a href="#how-it-works" className={styles.learnMore}>Learn More →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
