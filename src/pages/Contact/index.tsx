import React from 'react'
import Layout from '../../components/Layout'
import styles from './style/style.module.css'
import ContactBody from '../../assets/contact-body.png'
import ContactTitle from '../../assets/conte-contact.svg'

function Contact(){
    return(
        <Layout type='CONTACT'>
            <div className={styles.wrapper}>
                <img src={ContactBody} className={styles.contactBody}/>
                <img src={ContactTitle} className={styles.contactTitle}/>
                <p className={styles.contactDesc}>
                    서울특별시 용산구 원효로97길 33-4 선린인터넷고등학교 3호관 2층 디자인실습실<br/>
                    Tel. 713-6213  |  Fax. 704-0960
                </p>
            </div>
        </Layout>
    )
}

export default Contact