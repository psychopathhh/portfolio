import React from 'react'
import { links, socials } from '../../constants'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ME</a>
            <ul className='permalinks'>
                {
                    links.map(({ link, address }) => (
                        <li key={address}>
                            <a href={address}>{link}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='footer__socials'>
                {
                    socials.map(({ icon, address }) => (
                        <a key={address} href={address} target='_blank'>{icon}</a>
                    ))
                }
            </div>
            <div className='footer__copyright'>
                <small>&copy; ME. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer