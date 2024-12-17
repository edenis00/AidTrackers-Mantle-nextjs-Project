// components/Donors.js
"use client";
import Image from "next/image";
import styles from "@/styles/Donors.module.css";
import { useState } from "react";
import Connect from '@/components/WalletButtons/index';

export default function Donors() {
    

    return (
        <div className={styles.container} id="donors">
            <h2 className={styles.title}>Donors</h2>
            <div className={styles.images}>
                <Image src="/img/images/image (1).png" alt="Child receiving aid" className={styles.heroImage} width={100} height={200}/>
                <Image src="/img/images/image.png" alt="Mother with child" className={styles.heroImage2} width={600} height={250}/>
                <Image src="/img/images/image (11).png" alt="Child looking at aid worker" className={styles.heroImage3} width={100} height={200}/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.heading}>Register as a Donor</h3>
                <p className={styles.description}>
                    Ensuring that aid reaches those who need it the most with blockchain-based humanitarian aid.
                </p>
                <Connect />
            </div>

           
        </div>
    );
}
