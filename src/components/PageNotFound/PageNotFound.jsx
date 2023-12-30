import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import notFoundImg from '../../../public/undraw_Page_not_found_re_e9o6.png'
import './pageNotFound.css'
function PageNotFound() {
    return (
        <>
            <Header />
            <h4>Page Not Found!!!</h4>
            <img src={notFoundImg} alt="" />
            <Footer />
        </>
    )
}

export default PageNotFound