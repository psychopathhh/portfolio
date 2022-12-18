import React, { useState } from 'react'
import './nav.css'
import { Icon20HomeOutline, Icon20UserOutline, Icon20BookOutline, Icon20ServicesOutline, Icon20MessageOutline } from '@vkontakte/icons';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><Icon20HomeOutline /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><Icon20UserOutline /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><Icon20BookOutline /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><Icon20ServicesOutline /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><Icon20MessageOutline /></a>
        </nav>
    )
}

export default Nav