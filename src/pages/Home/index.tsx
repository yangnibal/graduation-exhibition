import { useState, useLayoutEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { RouteComponentProps, useLocation } from 'react-router';

import Layout from '../../components/Layout';
import styles from './style/style.module.css';

import MainBody from '../../assets/images/pc/main-body.png';
import MainBodyMobile from '../../assets/images/mobile/main.png';
import conteTitle from '../../assets/images/pc/conte-title.svg';
import conteTitleMobile from '../../assets/images/mobile/title.png';
import Video from '../../assets/images/common/ic-video.svg';
import ScrollDown from '../../assets/images/pc/ic-scroll-down.svg';
import BgPaper from '../../assets/images/pc/bg-paper.png';
import BgPaperMobile from '../../assets/images/mobile/bg-paper.png';
import LeftIc from '../../assets/images/common/ic_left.svg';
import RightIc from '../../assets/images/common/ic_right.svg';

import Arc3D from '../../assets/images/common/archive/3d.png';
import ArcMotion from '../../assets/images/common/archive/motion.png';
import ArcVideo from '../../assets/images/common/archive/video.png';
import ArcUi from '../../assets/images/common/archive/ui.png';
import ArcGraphic from '../../assets/images/common/archive/graphic.png';
import ArcGame from '../../assets/images/common/archive/game.png';
import ArcBranding from '../../assets/images/common/archive/branding.png';
import ArcIllust from '../../assets/images/common/archive/illust.png';
import ArcProduct from '../../assets/images/common/archive/product.png';
import { useHistory } from 'react-router-dom';

interface ParamType {
    id: string;
}

function Home({ match }: RouteComponentProps<ParamType>) {
    smoothscroll.polyfill();
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [scrollX, setScrollX] = useState<number>(0);

    const scrollWrapBoxRef = useRef<HTMLDivElement>(null);
    const archiveWrapRef = useRef<HTMLDivElement>(null);
    const archiveRef = useRef<HTMLDivElement>(null);

    const history = useHistory();
    const location = useLocation();

    const onClickArc = (index: number) => {
        history.push(`/works?category=${index + 1}`);
    };

    const archives = [
        {
            img: Arc3D,
            desc: (
                <div className={styles.boxDesc}>
                    3D
                    <br />
                    DESIGN
                </div>
            ),
            i: 1,
        },
        {
            img: ArcMotion,
            desc: (
                <div className={styles.boxDesc}>
                    MOTION
                    <br />
                    GRAPHICS
                </div>
            ),
            i: 2,
        },
        {
            img: ArcVideo,
            desc: <div className={styles.boxDesc}>VIDEO</div>,
            i: 3,
        },
        {
            img: ArcUi,
            desc: (
                <div className={styles.boxDesc}>
                    UI/UX
                    <br />
                    DESIGN
                </div>
            ),
            i: 4,
        },
        {
            img: ArcGraphic,
            desc: (
                <div className={styles.boxDesc}>
                    GRAPHIC
                    <br />
                    DESIGN
                </div>
            ),
            i: 5,
        },
        {
            img: ArcBranding,
            desc: <div className={styles.boxDesc}>BRANDING</div>,
            i: 6,
        },
        {
            img: ArcIllust,
            desc: (
                <div className={styles.boxDesc}>
                    ILLUST
                    <br />
                    DESIGN
                </div>
            ),
            i: 7,
        },
        {
            img: ArcProduct,
            desc: (
                <div className={styles.boxDesc}>
                    PRODUCT
                    <br />
                    DESIGN
                </div>
            ),
            i: 8,
        },
    ];
    const handleScroll = (direction: boolean) => {
        if (!scrollWrapBoxRef.current || !archiveRef.current || !archiveWrapRef.current) return;

        const archiveStyle = getComputedStyle(archiveRef.current);
        const scrollSize = isMobile
            ? parseInt(archiveStyle.width) +
              parseInt(archiveStyle.marginLeft) +
              parseInt(archiveStyle.marginRight)
            : parseInt(archiveStyle.width) +
              parseInt(archiveStyle.paddingLeft) +
              parseInt(archiveStyle.paddingRight) +
              parseInt(archiveStyle.marginLeft) +
              parseInt(archiveStyle.marginRight);
        console.log(scrollSize);
        scrollWrapBoxRef.current.scrollBy({
            top: 0,
            left: direction ? scrollSize : -scrollSize,
            behavior: 'smooth',
        });
    };
    const mobileArchive = ({ index, length }: { index: number; length: number }) => {
        let returnArchive = [];
        for (var j = index; j < length; j++) {
            let i = j;
            returnArchive.push(
                <article className={styles.box} key={j} onClick={() => onClickArc(i)}>
                    <img src={archives[j].img} className={styles.boxImg} />
                    {archives[j].desc}
                </article>
            );
        }
        return returnArchive;
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setIsMobile(navigator.userAgent.indexOf('Mobi') > -1);
        console.log(match.path);
        if (location.pathname.length > 1) {
            history.push('/');
        }
    }, []);
    return (
        <Layout type="HOME" isMobile={isMobile}>
            <div className={styles.wrapper}>
                <div className={styles.contentsWrapper}>
                    <img src={isMobile ? BgPaperMobile : BgPaper} className={styles.contactBg} />
                    <img src={isMobile ? MainBodyMobile : MainBody} className={styles.mainBody} />
                    <div className={styles.contents}>
                        <img src={isMobile ? conteTitleMobile : conteTitle} className={styles.contentTitle} />
                        <p className={styles.contentDesc}>
                            {isMobile ? (
                                <>
                                    <b>
                                        ???9??? ??????????????????????????? ?????????????????? <br />
                                        ?????????????????? ????????? CONT???????????.
                                    </b>
                                    <br />
                                    CONT????? ????????? ????????? ?????? ?????? ?????? ?????????, <br />
                                    <b>
                                        ?????? ??? ?????? ??? ????????? ?????? ????????? ?????? <br />
                                        ??????????????? ?????? ????????? ?????????????????? ??????
                                    </b>
                                    ??? ???????????????.
                                </>
                            ) : (
                                <>
                                    <b>???9??? ??????????????????????????? ?????????????????? ?????????????????? ????????? CONT??</b>
                                    ?????????. <br />
                                    CONT????? ????????? ????????? ?????? ?????? ?????? ?????????, ????????? ???????????? ????????? ???
                                    ?????? ???????????????.
                                    <br />
                                    <b>
                                        ?????? ??? ?????? ??? ????????? ?????? ????????? ?????? ??????????????? ?????? ?????????
                                        ?????????????????? ??????
                                    </b>
                                    ??? ???????????????.
                                </>
                            )}
                        </p>
                        {!isMobile && (
                            <div className={styles.buttonWrapper}>
                                <div
                                    className={styles.demoButton}
                                    onClick={() => window.open('https://youtu.be/-2tZurIA05k')}>
                                    <img src={Video} className={styles.ic} />
                                    WATCH A DEMO
                                </div>
                                <div
                                    className={styles.exhibitionButton}
                                    onClick={() => history.push('/works?category=0')}>
                                    GO TO EXHIBITION
                                </div>
                            </div>
                        )}
                    </div>
                    {!isMobile && (
                        <div className={styles.scrollWrapper}>
                            <img src={ScrollDown} className={styles.scrollImg} />
                            <p className={styles.scrollDown}>SCROLL DOWN</p>
                        </div>
                    )}
                </div>
                <div className={styles.archiveWrapper}>
                    <p className={styles.archiveTitle}>ARCHIVE</p>
                    <div className={styles.boxScrollWrapper} ref={scrollWrapBoxRef}>
                        {isMobile ? (
                            <div className={styles.boxWrapperMobile} ref={archiveWrapRef}>
                                {[
                                    { index: 0, length: 4 },
                                    { index: 4, length: 8 },
                                ].map((item, idx) => (
                                    <div className={styles.boxWrapper} ref={archiveRef} key={idx}>
                                        {mobileArchive(item).map((item) => item)}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.boxWrapper} ref={archiveWrapRef}>
                                {archives.map((el, i) => (
                                    <article
                                        className={styles.box}
                                        onClick={() => onClickArc(i)}
                                        key={i}
                                        ref={archiveRef}>
                                        <img src={el.img} className={styles.boxImg} />
                                        {el.desc}
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.iconWrapper}>
                        <img src={LeftIc} className={styles.icon} onClick={() => handleScroll(false)} />
                        <img src={RightIc} className={styles.icon} onClick={() => handleScroll(true)} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
