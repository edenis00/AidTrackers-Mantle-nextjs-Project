// components/Beneficiary.js
"use client";
import Image from 'next/image';
import Connect from '@/components/WalletButtons/index';
import { useState } from 'react';
import styles from '@/styles/Beneficiary.module.css';

const Beneficiary = () => {
    return (
        <div className={styles.container} id='beneficiary'>
            <h2>Beneficiary</h2>
            <div className={styles.images}>
                <Image src="/img/images/Rectangle 78.png" alt="Child receiving aid" className={styles.heroImage2} width={1000} height={300}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.head}>Register as a Beneficiary</h2>
                <p className={styles.text}>Ensuring that aid reaches those who need it the most with blockchain-based humanitarian aid.</p>
                <Connect />
            </div>
        </div>
    );
}

export default Beneficiary;
