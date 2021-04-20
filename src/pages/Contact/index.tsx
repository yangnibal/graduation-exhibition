import { useState, useLayoutEffect } from 'react';

import Layout from '../../components/Layout';
import styles from './style/style.module.css';

import ContactBg from '../../assets/images/pc/bg-paper.png';
import ContactBgMobile from '../../assets/images/mobile/bg-paper.png';
import ContactBody from '../../assets/images/common/contact-body.png';
import ContactTitle from '../../assets/images/pc/conte-contact.png';
import ContactTitleMobile from '../../assets/images/mobile/conte-contact.png';
import Video from '../../assets/images/mobile/video.png';

function Contact() {
    const [isMobile, setIsMobile] = useState<RegExpMatchArray | null>(null);
    const mobileDevices = /Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

    useLayoutEffect(() => setIsMobile(navigator.userAgent.match(mobileDevices)), []);
    return (
        <Layout type="CONTACT" isMobile={isMobile}>
            <div className={styles.wrapper}>
                <img src={isMobile ? ContactBgMobile : ContactBg} className={styles.contactBg} />
                <img src={ContactBody} className={styles.contactBody} />
                <img src={isMobile ? ContactTitleMobile : ContactTitle} className={styles.contactTitle} />
                {isMobile && <h1 className={styles.subtitle}>"CONTE"</h1>}
                <p className={styles.contactDesc}>
                    서울특별시 용산구 원효로97길 33-4 {isMobile && <br />}
                    선린인터넷고등학교 3호관 2층 디자인실습실
                    <br />
                    Tel. 713-6213 | Fax. 704-0960
                </p>
                {isMobile && (
                    <div className={styles.demo}>
                        <img src={Video} className={styles.demoVideo} />
                        <b className={styles.demoDesc}>WATCH A DEMO</b>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Contact;
