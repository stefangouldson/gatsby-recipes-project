import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import "normalize.css";
import '../assets/css/main.css';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar/>
                {children}
            <Footer />
        </Fragment>
    )
}

export default Layout
