import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'

const Layout = () => {
    return (
        <div className="container" id="layout">
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
