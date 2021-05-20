import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/common/logo-cont.svg';

interface Props {
    type: 'HOME' | 'WORKS' | 'CONTACT' | 'LANDING';
    isMobile: boolean | null;
}

const Header: React.FC<Props> = ({ type, isMobile }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={Logo} className={styles.logo} />
            </div>
            {(!isMobile && type !== 'LANDING') && (
                <div className={styles.textContainer}>
                    <Link to="/" className={type === 'HOME' ? styles.textBld : styles.textNml}>
                        HOME
                    </Link>
                    <Link to="/works" className={type === 'WORKS' ? styles.textBld : styles.textNml}>
                        WORKS
                    </Link>
                    <Link to="/contact" className={type === 'CONTACT' ? styles.textBld : styles.textNml}>
                        CONTACT
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
