import React, { useState } from 'react'
import Layout from '../../components/Layout'
import styles from './style/style.module.css'
import Bg from '../../assets/ui-copy.png'
import Default from '../../assets/3-d.png'

function Works(){

    const [ seleted, setSelected ] = useState(0)

    const categories = [
        {
            label: 'ALL',
            value: ''
        },
        {
            label: '3D',
            value: '3D'
        },
        {
            label: 'MOTION',
            value: 'MOTION'
        },
        {
            label: 'VIDEO',
            value: 'VIDEO'
        },
        {
            label: 'UI/UX',
            value: 'UI/UX'
        },
        {
            label: 'GRAPHIC',
            value: 'GRAPHIC'
        },
        {
            label: 'GAME',
            value: 'GAME'
        },
        {
            label: 'BRANDING',
            value: 'BRANDING'
        },
        {
            label: 'ILLUSTRATION',
            value: 'ILLUSTRATION'
        },
        {
            label: 'PRODUCT',
            value: 'PRODUCT'
        }
    ]

    const contents = [
        {
            profileImg: Default,
            userProfileImg: '',
            title: 'test',
            username: 'test'
        },
    ]

    return(
        <Layout type='WORKS'>
            <div className={styles.wrapper}>
                <div className={styles.bannerWrapper}>
                    <img src={Bg} className={styles.banner}/>
                    <div className={styles.bannerContent}>
                        <img className={styles.bannerTitle}/>
                        <img className={styles.bannerDesc}/>
                    </div>
                </div>
                <div className={styles.categoryWrapper}>
                    {categories.map((el, i) => (
                        <div 
                            className={seleted===i ? styles.categorySelected : styles.categoryNml} 
                            key={i}
                            onClick={() => setSelected(i)}
                        >
                            {el.label}
                        </div>
                    ))}
                </div>
                <div className={styles.contentsWrapper}>
                    {[0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                        <div className={styles.content} key={i}>
                            <img src={contents[0].profileImg} className={styles.contentImg}/>
                            <p className={styles.contentTitle}>{contents[0].title}</p>
                            <div className={styles.contentUser}>
                                <img src={contents[0].userProfileImg} className={styles.contentUserProfileImg}/>
                                <p className={styles.contentUsername}>{contents[0].username}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Works