import { useState, useLayoutEffect } from 'react';
import YouTube from 'react-youtube';

import Layout from '../../../components/Layout';
import styles from './style/style.module.css';
import articles from '../../../articles.json';

function Detail() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const innerWidth = window.innerWidth;
    let youtubeIframeSize = { width: '0', height: '0' };
    const s3Url = `https://sunrin-graphics.s3.ap-northeast-2.amazonaws.com/2021`;
    const path = window.location.pathname.split('/')[2];
    const article = articles.find((item) => {
        if (item.id === path) return true;
    });

    if (1366 < innerWidth) {
        youtubeIframeSize.width = '1280';
        youtubeIframeSize.height = '720';
    } else if (425 < innerWidth) {
        youtubeIframeSize.width = '1080';
        youtubeIframeSize.height = '630';
    } else if (375 < innerWidth) {
        youtubeIframeSize.width = '380';
        youtubeIframeSize.height = '220';
    } else {
        youtubeIframeSize.width = '345';
        youtubeIframeSize.height = '200';
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setIsMobile(navigator.userAgent.indexOf('Mobi') > -1);
    }, []);
    return (
        <Layout type="CONTENT" isMobile={isMobile}>
            <div className={styles.wrapper}>
                <div className={styles.bannerWrapper}>
                    <img
                        src={`${s3Url}/${isMobile ? article?.bannerImages[0] : article?.bannerImages[1]}`}
                        className={styles.banner}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.articleProfile}>
                        <div className={styles.profileText}>
                            {!isMobile && (
                                <h1 className={styles.author}>{article?.author.map((item) => item + ' ')}</h1>
                            )}
                            <div className={styles.socialWrapper}>
                                <div className={styles.mailWrapper}>
                                    {isMobile && (
                                        <h1 className={styles.author}>
                                            {article?.author.map((item) => item + ' ')}
                                        </h1>
                                    )}
                                    {article?.mail?.map((item, idx) => (
                                        <span className={styles.social} key={idx}>
                                            {item}
                                        </span>
                                    ))}
                                    {article?.blog && <span className={styles.social}>{article.blog}</span>}
                                </div>
                                {isMobile && (
                                    <div
                                        className={
                                            article?.studentId.length === 1
                                                ? styles.profileImageWrapper
                                                : styles.profileImagesWrapper
                                        }>
                                        {article?.studentId.map((item, idx) => (
                                            <img
                                                src={`${s3Url}/${item}_profile.png`}
                                                className={styles.profileImage}
                                                key={idx}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className={styles.articleInfo}>
                                <h1 className={styles.title}>{article?.articleName}</h1>
                                <p className={styles.describe}>{article?.articleDesc}</p>
                            </div>
                        </div>
                        {!isMobile && (
                            <div className={styles.profileImageWrapper}>
                                {article?.studentId.map((item, idx) => (
                                    <img
                                        src={`${s3Url}/${item}_profile.png`}
                                        className={styles.profileImage}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.articles}>
                        {article?.articleImages.map((image: string, idx) => (
                            <img src={`${s3Url}/${image}`} className={styles.article} key={idx} />
                        ))}
                        {article?.youtubeUrl && (
                            <YouTube
                                videoId={article.youtubeUrl}
                                opts={{
                                    height: youtubeIframeSize.height,
                                    width: youtubeIframeSize.width,
                                    playerVars: {
                                        autoplay: 0,
                                    },
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Detail;
