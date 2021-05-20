import React from 'react';
import styles from '../styles/tabbar.module.css';
import { Link } from 'react-router-dom';

import Home from '../../assets/images/mobile/home.png';
import Work from '../../assets/images/mobile/works.png';
import Contact from '../../assets/images/mobile/contact.png';
import SelHome from '../../assets/images/mobile/homesel.png';
import SelWork from '../../assets/images/mobile/workssel.png';
import SelContact from '../../assets/images/mobile/contactsel.png';

interface Props {
    type: 'HOME' | 'WORKS' | 'CONTACT' | 'LANDING';
}

const Tabbar: React.FC<Props> = ({ type }) => {
    return (
        <div className={styles.tabbar}>
            <Link to="/" className={type === ('HOME' || 'LANDING')  ? styles.textBld : styles.textNml}>
                {type === 'HOME' ? (
                    <img src={SelHome} className={styles.navItem} />
                ) : (
                    <img src={Home} className={styles.navItem} />
                )}
            </Link>
            <Link to="/works" className={type === 'WORKS' ? styles.textBld : styles.textNml}>
                {type === 'WORKS' ? (
                    <img src={SelWork} className={styles.navItem} />
                ) : (
                    <img src={Work} className={styles.navItem} />
                )}
            </Link>
            <Link to="/contact" className={type === 'CONTACT' ? styles.textBld : styles.textNml}>
                {type === 'CONTACT' ? (
                    <img src={SelContact} className={styles.navItem} />
                ) : (
                    <img src={Contact} className={styles.navItem} />
                )}
            </Link>
        </div>
    );
};

export default Tabbar;
