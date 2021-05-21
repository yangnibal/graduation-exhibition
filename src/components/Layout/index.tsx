import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Tabbar from '../Tabbar';

interface Props {
    type: 'HOME' | 'WORKS' | 'CONTACT' | 'CONTENT';
    isMobile: boolean | null;
}

const Layout: React.FC<Props> = ({ children, type, isMobile }) => {
    return (
        <div style={{ width: '100%', minHeight: '100vh' }}>
            {(type !== 'WORKS' || (type === 'WORKS' && !isMobile)) && (
                <Header type={type} isMobile={isMobile} />
            )}
            {isMobile && <Tabbar type={type} />}
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
