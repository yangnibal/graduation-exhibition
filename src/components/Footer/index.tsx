import styles from '../styles/footer.module.css';

import Youtube from '../../assets/images/common/youtube.svg';
import Facebook from '../../assets/images/common/facebook-letter-logo.svg';
import Sunrin from '../../assets/images/common/sunrinicon.svg';
import SunrinAnd from '../../assets/images/common/sunrinandconte.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.sectionWrapper}>
                <div className={styles.section}>
                    <img src={SunrinAnd} className={styles.sectionTitleImg} />
                    <p className={styles.sectionDesc}>
                        © 2021 선린인터넷고등학교 멀티미디어과
                        <br />
                        All Rights Reserved.
                        <br />
                        Designed by 김민, 박지민, 이현성
                        <br />
                        Developed by 김연규, 양원준, 조강연
                    </p>
                </div>
                <div className={styles.sectionBottom}>
                    <div className={styles.sectionLeft}>
                        <div className={styles.section}>
                            <p className={styles.sectionTitleText}>선린인터넷고등학교 멀티미디어과</p>
                            <p className={styles.sectionDesc}>
                                서울특별시 용산구 원효로97길 33-4
                                <br />
                                선린인터넷고등학교
                                <br />
                                3호관 2층 멀티미디어과
                                <br />
                                Tel. 713-6213 | Fax. 704-0960
                            </p>
                        </div>
                        <div className={styles.section}>
                            <p className={styles.sectionTitleText}>졸업전시회준비위원회</p>
                            <p className={styles.sectionDesc}>
                                곽민혁 곽승채 김나현 김민
                                <br />
                                김민준 김은서 문희원 박용석
                                <br />
                                박지민 백가희 성지빈 손성민
                                <br />
                                이현성 정기재 정준혁 정한비
                                <br />
                                지동근 최가은 최성희 최정규
                            </p>
                        </div>
                        <div className={styles.section}>
                            <p className={styles.sectionTitleText}>웹사이트</p>
                            <p className={styles.sectionDesc}>
                                <b>디자인</b>
                                <br />
                                김민 박지민 이현성
                                <br />
                                <b>개발</b>
                                <br />
                                김연규 양원준 조강연
                            </p>
                        </div>
                    </div>
                    <div className={styles.sectionRight}>
                        <div className={styles.socialImgWrapper}>
                            <a href="https://youtube.com/channel/UCgA1rjucR0YvbZfnYIDzk1Q" target="_blank">
                                <img src={Youtube} className={styles.socialImg} />
                            </a>
                            <a
                                href="https://www.facebook.com/299516397652057/posts/817224979214527/?d=n"
                                target="_blank">
                                <img src={Facebook} className={styles.socialImg} />
                            </a>
                            <a href="http://sunrint.hs.kr/index.do" target="_blank">
                                <img src={Sunrin} className={styles.socialImg} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
