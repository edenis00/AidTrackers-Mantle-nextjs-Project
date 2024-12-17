// components/WalletModal.js
import React, { useState } from 'react';
import styles from '../styles/WalletModal.module.css';
import Image from 'next/image';

const WalletModal = ({ onClose }) => {
    const [selectedWallet, setSelectedWallet] = useState(null);

    const walletOptions = [
        { name: 'Defly', icon: '/images/image 3.svg' },
        { name: 'Pera', icon: '/images/pera.svg' },
        { name: 'Deffi', icon: '/images/OIP.png' },
    ];

    const handleWalletSelect = (wallet) => {
        setSelectedWallet(wallet);
    };

    const handleCloseDialog = () => {
        setSelectedWallet(null);
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleCloseDialog}>×</button>
                
                {selectedWallet ? (
                    <div className={styles.largeDialog}>
                        <div className={styles.imagecontainer}>
                        <Image src={selectedWallet.icon} alt={`${selectedWallet.name} icon`} width={100} height={100} />
                        <h2>{selectedWallet.name} Wallet </h2>
                        <p>connect with {selectedWallet.name}. and Enjoy secure and seamless transactions!</p>
                        </div>
                        <div className={styles.qrcode}>
                        {/* this is where you'll place the QR code */}
                            <Image src="/images/QR.png" alt="QR CODE"  width={200} height={200} />
                        <p>scan to connect {selectedWallet.name}. </p>

                        </div>
                       
                    </div>
                ) : (
                    <>
                        <h2 className={styles.modalTitle}>Connect Wallet</h2>
                        <ul className={styles.walletList}>
                            {walletOptions.map((wallet) => (
                                <li
                                    key={wallet.name}
                                    className={styles.walletOption}
                                    onClick={() => handleWalletSelect(wallet)}
                                >
                                    <Image src={wallet.icon} alt={`${wallet.name} icon`} width={32} height={32} />
                                    <span>{wallet.name}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default WalletModal;
