import React from 'react';
import Header from '../components/layout/Header';


const Layout = ({ children }) => (
    <React.Fragment>
        <div className="body">
            <Header />
            {children}
        </div>
    </React.Fragment>
);

export default Layout;