// components/Header.js
"use client";
import Image from 'next/image';
import { useState } from 'react';
import React from "react";
import styles from "@/styles/Header.module.css";
import Connect from '@/components/WalletButtons/index';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <header className={styles.header}>
            <div className={styles.logocontainer}>
                <Image src="/img/images/Union.png" alt="company logo" className={styles.companylogo} width={20} height={20} />
                <h2 className={styles.highlight}>Aid <span className={styles.logo}>Tracker</span></h2>
            </div>
            <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#how-it-works">Our Services</a>
                <a href="#features">Features</a>
                <a href="#beneficiary">Beneficiaries</a>
                <a href="#donors">Donors</a>
            </nav>
            <div className={styles.btn}>
                <Connect />
            </div>

            <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#how-it-works">Our Services</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#beneficiary">Beneficiaries</a></li>
                <li><a href="#donors">Donors</a></li>
                <div className={styles.btnContainer}>
                <Connect />
                </div>
            </ul>


        </header>
    );
};

export default Header;
