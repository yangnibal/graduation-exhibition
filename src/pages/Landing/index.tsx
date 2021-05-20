import React, { useEffect, useLayoutEffect, useState } from 'react'
import Layout from '../../components/Layout';
import styles from './style/style.module.css'
import LandingConteBody from '../../assets/images/pc/landing-conte.svg'
import ContactBody from '../../assets/images/common/contact-body.png';
import BgPaper from '../../assets/images/pc/bg-paper.png';
import BgPaperMobile from '../../assets/images/mobile/bg-paper.png';

const Landing = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useLayoutEffect(() => setIsMobile(navigator.userAgent.indexOf('Mobi') > -1), []);

    return (
        <Layout type="LANDING" isMobile={isMobile}>
            {!isMobile ? (
                <div className={styles.containerD}>
                    <img src={BgPaper} className={styles.landingBg}/>
                    <img src={ContactBody} className={styles.landingLogoD}/>
                    <img src={LandingConteBody} className={styles.landingBodyD}/>
                </div>
            ) : (
                <div className={styles.containerM}>
                    <img src={BgPaperMobile} className={styles.landingBg}/>
                    <img src={ContactBody} className={styles.landingLogoM}/>
                    <img src={LandingConteBody} className={styles.landingBodyM}/>
                </div>
            )}
        </Layout>
    )
}

export default Landing