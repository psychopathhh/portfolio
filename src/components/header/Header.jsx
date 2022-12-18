import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello, I'm</h5>
                <h1>Daria Badrenkova</h1>
                <h5 className='text-light'>Frontend Developer</h5>
                <CTA />
                <HeaderSocials />
                <a href="#contact" className='scroll__down'>Scroll Down</a>
                <div className='me'>
                    <img src={ME} alt="me" className='me-img' />
                </div>

            </div>
        </header>
    )
}

export default Header