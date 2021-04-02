import React, { useState } from 'react'
import Layout from '../../components/Layout'
import styles from './style/style.module.css'
import MainBody from '../../assets/main-body.png'
import conteTitle from '../../assets/title-conte.svg'
import Video from '../../assets/ic-video.svg'
import ScrollDown from '../../assets/ic-scroll-down.svg'
import BgPaper from '../../assets/bg-paper.png'
import Arc1 from '../../assets/3-d.png'
import Arc2 from '../../assets/graphic.png'
import Arc3 from '../../assets/ui.png'
import Arc4 from '../../assets/game.png'
import LeftIc from '../../assets/ic_left.svg'
import RightIc from '../../assets/ic_right.svg'

function Home(){

    const archives = [
        {
            img: Arc1,
            desc: <div className={styles.boxDesc}>3D<br/>DESIGN</div>
        },
        {
            img: Arc2,
            desc: <div className={styles.boxDesc}>MOTION<br/>GRAPHICS</div>
        },
        {
            img: Arc3,
            desc: <div className={styles.boxDesc}>UI/UX<br/>DESIGN</div>
        },
        {
            img: Arc4,
            desc: <div className={styles.boxDesc}>GAME<br/>DESIGN</div>
        }
    ]

    return(
        <Layout type='HOME'>
            <div className={styles.wrapper}>
                <div className={styles.contentsWrapper}>
                    <img src={BgPaper} className={styles.backgroundOpacity}/>
                    <img 
                        src={MainBody}
                        className={styles.mainBody}
                    />
                    <div className={styles.contents}>
                        <img
                            src={conteTitle}
                            className={styles.contentTitle}
                        />
                        <p className={styles.contentDesc}>
                            <b>제9회 선린인터넷고등학교 멀티미디어과 졸업전시회의 주제는 CONTÉ</b>입니다.<br/>
                            CONTÉ는 흑연을 점토와 섞어 다져 구운 것으로, 프랑스 화학자의 이름을 딴 미술 재료입니다.<br/>
                            <b>우리 한 사람 한 사람이 미술 재료가 되어 인생이라는 예술 작품을 그려나간다는 의미</b>를 담았습니다.
                        </p>
                        <div className={styles.buttonWrapper}>
                            <div className={styles.demoButton}>
                                <img src={Video} className={styles.ic}/>WATCH A DEMO
                            </div>
                            <div className={styles.exhibitionButton}>
                                GO TO EXHIBITION
                            </div>
                        </div>
                    </div>
                    <div className={styles.scrollWrapper}>
                        <img 
                            src={ScrollDown}
                            className={styles.scrollImg}
                        />
                        <p className={styles.scrollDown}>SCROLL DOWN</p>
                    </div>
                </div>
                

                <div className={styles.archiveWrapper}>
                    <p className={styles.archiveTitle}>ARCHIVE</p>
                    <div className={styles.boxWrapper}>
                        {archives.map((el, i) => (
                            <article className={styles.box} key={i}>
                                <img src={el.img} className={styles.boxImg}/>
                                {el.desc}
                            </article>
                        ))}
                    </div>
                    <div className={styles.iconWrapper}>
                        <img src={LeftIc} className={styles.icon}/>
                        <img src={RightIc} className={styles.icon}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home