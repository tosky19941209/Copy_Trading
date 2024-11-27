import React from 'react';
import Header from '../components/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout flex flex-col justify-between">
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;