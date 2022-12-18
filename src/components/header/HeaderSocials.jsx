import React from 'react'
import { socials } from '../../constants'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            {
                socials.map(({ icon, address }) => (
                    <a key={address} href={address} target='_blank'>{icon}</a>
                ))
            }
        </div>
    )
}

export default HeaderSocials