import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

interface Props {
    type: 'HOME' | 'WORKS' | 'CONTACT'
}

const Layout: React.FC<Props> = ({children, type}) => {
    return(
        <div style={{ width: '100%', minHeight: '100vh' }}>
            <Header type={type}/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout