import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SideNav from '../components/layout/SideNav';

const Layout2 = ({ children }) => (
    <React.Fragment>
        <div className="body">
            <Header />
            <main>
                <SideNav />
                
                <div className="page-content">
                    {children}
                </div>

            </main>
            <Footer />
        </div>


    </React.Fragment>
);

export default Layout2;