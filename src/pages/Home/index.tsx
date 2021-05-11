import { useState, useLayoutEffect } from 'react';

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
import Arc1 from '../../assets/images/pc/3-d.png';
import Arc2 from '../../assets/images/pc/graphic.png';
import Arc3 from '../../assets/images/pc/ui.png';
import Arc4 from '../../assets/images/pc/game.png';
import LeftIc from '../../assets/images/common/ic_left.svg';
import RightIc from '../../assets/images/common/ic_right.svg';

function Home() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const archives = [
        {
            img: Arc1,
            desc: (
                <div className={styles.boxDesc}>
                    3D
                    <br />
                    DESIGN
                </div>
            ),
        },
        {
            img: Arc2,
            desc: (
                <div className={styles.boxDesc}>
                    MOTION
                    <br />
                    GRAPHICS
                </div>
            ),
        },
        {
            img: Arc3,
            desc: <div className={styles.boxDesc}>VIDEO</div>,
        },
        {
            img: Arc4,
            desc: (
                <div className={styles.boxDesc}>
                    UI/UX
                    <br />
                    DESIGN
                </div>
            ),
        },
    ];
    useLayoutEffect(() => setIsMobile(navigator.userAgent.indexOf('Mobi') > -1), []);
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
                                        제9회 선린인터넷고등학교 멀티미디어과 <br />
                                        졸업전시회의 주제는 CONTÉ입니다.
                                    </b>
                                    <br />
                                    CONTÉ는 흑연을 점토와 섞어 다져 구운 것으로, <br />
                                    <b>
                                        우리 한 사람 한 사람이 미술 재료가 되어 <br />
                                        인생이라는 예술 작품을 그려나간다는 의미
                                    </b>
                                    를 담았습니다.
                                </>
                            ) : (
                                <>
                                    <b>제9회 선린인터넷고등학교 멀티미디어과 졸업전시회의 주제는 CONTÉ</b>
                                    입니다. <br />
                                    CONTÉ는 흑연을 점토와 섞어 다져 구운 것으로, 프랑스 화학자의 이름을 딴
                                    미술 재료입니다.
                                    <br />
                                    <b>
                                        우리 한 사람 한 사람이 미술 재료가 되어 인생이라는 예술 작품을
                                        그려나간다는 의미
                                    </b>
                                    를 담았습니다.
                                </>
                            )}
                        </p>
                        {!isMobile && (
                            <div className={styles.buttonWrapper}>
                                <div className={styles.demoButton}>
                                    <img src={Video} className={styles.ic} />
                                    WATCH A DEMO
                                </div>
                                <div className={styles.exhibitionButton}>GO TO EXHIBITION</div>
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
                    <div className={styles.boxWrapper}>
                        {archives.map((el, i) => (
                            <article className={styles.box} key={i}>
                                <img src={el.img} className={styles.boxImg} />
                                {el.desc}
                            </article>
                        ))}
                    </div>
                    <div className={styles.iconWrapper}>
                        <img src={LeftIc} className={styles.icon} />
                        <img src={RightIc} className={styles.icon} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
