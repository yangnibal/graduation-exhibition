import { useState, useLayoutEffect, useEffect } from 'react';
import { RouteComponentProps, RouteProps, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import qs from 'qs'

import Layout from '../../components/Layout';
import styles from './style/style.module.css';
import articles from '../../articles.json';

import BannerDesc from '../../assets/images/pc/banner-desc.png';
import BannerDescMobile from '../../assets/images/mobile/banner-desc.png';
import Default from '../../assets/images/common/archive/3d.png';

import BannerAllPc from '../../assets/images/pc/banner/all.png';
import Banner3DPc from '../../assets/images/pc/banner/3d.png';
import BannerMotionPc from '../../assets/images/pc/banner/motion.png';
import BannerVideoPc from '../../assets/images/pc/banner/video.png';
import BannerUiPc from '../../assets/images/pc/banner/uiux.png';
import BannerGraphicPc from '../../assets/images/pc/banner/graphic.png';
import BannerGamePc from '../../assets/images/pc/banner/game.png';
import BannerBrandingPc from '../../assets/images/pc/banner/branding.png';
import BannerIllustPc from '../../assets/images/pc/banner/illust.png';
import BannerProductPc from '../../assets/images/pc/banner/product.png';

import BannerAllMobile from '../../assets/images/mobile/banner/all.png';
import Banner3DMobile from '../../assets/images/mobile/banner/3d.png';
import BannerMotionMobile from '../../assets/images/mobile/banner/motion.png';
import BannerVideoMobile from '../../assets/images/mobile/banner/video.png';
import BannerUiMobile from '../../assets/images/mobile/banner/uiux.png';
import BannerGraphicMobile from '../../assets/images/mobile/banner/graphic.png';
import BannerGameMobile from '../../assets/images/mobile/banner/game.png';
import BannerBrandingMobile from '../../assets/images/mobile/banner/branding.png';
import BannerIllustMobile from '../../assets/images/mobile/banner/illust.png';
import BannerProductMobile from '../../assets/images/mobile/banner/product.png';

interface ParamTypes {
    category: string
}

const categories = [
    {
        label: 'ALL',
        value: '',
        pcBanner: BannerAllPc,
        mobileBanner: BannerAllMobile,
    },
    {
        label: '3D',
        value: '3D',
        pcBanner: Banner3DPc,
        mobileBanner: Banner3DMobile,
    },
    {
        label: 'MOTION',
        value: 'MOTION GRAPHICS',
        pcBanner: BannerMotionPc,
        mobileBanner: BannerMotionMobile,
    },
    {
        label: 'VIDEO',
        value: 'VIDEO',
        pcBanner: BannerVideoPc,
        mobileBanner: BannerVideoMobile,
    },
    {
        label: 'UI/UX',
        value: 'UI/UX',
        pcBanner: BannerUiPc,
        mobileBanner: BannerUiMobile,
    },
    {
        label: 'GRAPHIC',
        value: 'GRAPHIC DESIGN',
        pcBanner: BannerGraphicPc,
        mobileBanner: BannerGraphicMobile,
    },
    {
        label: 'BRANDING',
        value: 'BRANDING',
        pcBanner: BannerBrandingPc,
        mobileBanner: BannerBrandingMobile,
    },
    {
        label: 'ILLUSTRATION',
        value: 'ILLUSTRATION',
        pcBanner: BannerIllustPc,
        mobileBanner: BannerIllustMobile,
    },
    {
        label: 'PRODUCT',
        value: 'PRODUCT',
        pcBanner: BannerProductPc,
        mobileBanner: BannerProductMobile,
    },
];

function Works() {

    const [selected, setSelected] = useState(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const history = useHistory();

    const location = useLocation()

    const contents = [
        {
            profileImg: Default,
            userProfileImg: '',
            title: 'test',
            username: 'test',
        },
    ];

    const handleRedirect = (id: string) => history.push(`/works/${id}`);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setIsMobile(navigator.userAgent.indexOf('Mobi') > -1);
        const category = qs.parse(location.search, {
            ignoreQueryPrefix: true
        })
        if(category.category){
            setSelected(Number(category.category))
        } else {
            history.push('/works?category=0')
        }
        
    }, []);

    return (
        <Layout type="WORKS" isMobile={isMobile}>
            <div className={styles.wrapper}>
                <div className={styles.bannerWrapper}>
                    <img
                        src={isMobile ? categories[selected].mobileBanner : categories[selected].pcBanner}
                        className={styles.banner}
                    />
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
                            onClick={() => { setSelected(i); history.push(`/works?category=${i}`) }}>
                            {el.label}
                        </div>
                    ))}
                </div>
                <div className={styles.contentsWrapper}>
                    {articles.map((article, i) => {
                        return (
                            (categories[selected].label === 'ALL' ||
                                article.field === categories[selected].label) && (
                                <div
                                    className={styles.content}
                                    onClick={() => handleRedirect(article.id)}
                                    key={i}>
                                    <img
                                        src={`https://sunrin-graphics.s3.ap-northeast-2.amazonaws.com/2021/${article.thumbnail}`}
                                        className={styles.contentImg}
                                    />
                                    <div className={styles.contentInfo}>
                                        <p className={styles.contentTitle}>{article.articleName}</p>
                                        <div className={styles.contentUserWrapper}>
                                            {article.studentId.map((id, idx) => (
                                                <div className={styles.contentUser}>
                                                    <img
                                                        src={`https://sunrin-graphics.s3.ap-northeast-2.amazonaws.com/2021/${id}_profile.png`}
                                                        className={styles.contentUserProfileImg}
                                                    />
                                                    {article.studentId.length < 2 && (
                                                        <p className={styles.contentUsername}>
                                                            {article.author[idx]}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default Works;
