import { useState, useLayoutEffect } from 'react';

import Layout from '../../components/Layout';
import styles from './style/style.module.css';
import Bg from '../../assets/images/pc/ui-copy.png';
import BgMobile from '../../assets/images/mobile/ui.png';
import BannerDesc from '../../assets/images/pc/banner-desc.png';
import BannerDescMobile from '../../assets/images/mobile/banner-desc.png';
import Default from '../../assets/images/pc/3-d.png';

function Works() {
    const [selected, setSelected] = useState(0);
    const [isMobile, setIsMobile] = useState<RegExpMatchArray | null>(null);
    const mobileDevices = /Mobile|iP(hone|od)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

    const categories = [
        {
            label: 'ALL',
            value: '',
        },
        {
            label: '3D',
            value: '3D',
        },
        {
            label: 'MOTION',
            value: 'MOTION',
        },
        {
            label: 'VIDEO',
            value: 'VIDEO',
        },
        {
            label: 'UI/UX',
            value: 'UI/UX',
        },
        {
            label: 'GRAPHIC',
            value: 'GRAPHIC',
        },
        {
            label: 'GAME',
            value: 'GAME',
        },
        {
            label: 'BRANDING',
            value: 'BRANDING',
        },
        {
            label: 'ILLUSTRATION',
            value: 'ILLUSTRATION',
        },
        {
            label: 'PRODUCT',
            value: 'PRODUCT',
        },
    ];

    const contents = [
        {
            profileImg: Default,
            userProfileImg: '',
            title: 'test',
            username: 'test',
        },
    ];

    useLayoutEffect(() => setIsMobile(navigator.userAgent.match(mobileDevices)), []);
    return (
        <Layout type="WORKS" isMobile={isMobile}>
            <div className={styles.wrapper}>
                <div className={styles.bannerWrapper}>
                    <img src={isMobile ? BgMobile : Bg} className={styles.banner} />
                    <div className={styles.bannerContent}>
                        <h2 className={styles.bannerTitle}>{categories[selected].label}</h2>
                        <img src={isMobile ? BannerDescMobile : BannerDesc} className={styles.bannerDesc} />
                    </div>
                </div>
                <div className={styles.categoryWrapper}>
                    {categories.map((el, i) => (
                        <div
                            className={selected === i ? styles.categorySelected : styles.categoryNml}
                            key={i}
                            onClick={() => setSelected(i)}>
                            {el.label}
                        </div>
                    ))}
                </div>
                <div className={styles.contentsWrapper}>
                    {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                        <div className={styles.content} key={i}>
                            <img src={contents[0].profileImg} className={styles.contentImg} />
                            <p className={styles.contentTitle}>{contents[0].title}</p>
                            <div className={styles.contentUser}>
                                <img
                                    src={contents[0].userProfileImg}
                                    className={styles.contentUserProfileImg}
                                />
                                <p className={styles.contentUsername}>{contents[0].username}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Works;
