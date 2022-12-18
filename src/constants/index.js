import { Icon28AddAwardOutline, Icon28Users3Outline, Icon28WorkOutline } from '@vkontakte/icons';
import portfolio_yours from '../assets/portfolio_yours.jpg'
import IMG1 from '../assets/avatar1.jpg'

import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

import { FaGithub } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'
import { Icon44LogoVk } from '@vkontakte/icons';

export const frontSkills = [
    {
        img: '',
        level: 'Intermediate',
        skill: 'HTML'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'JavaScript'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'Tailwind'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'CSS'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'Material UI'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'Bootstrap'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'Sass'
    },
    {
        img: '',
        level: 'Intermediate',
        skill: 'React'
    },
]
export const backSkills = [
    {
        img: '',
        level: 'Basic',
        skill: 'Python'
    },
    {
        img: '',
        level: 'Basic',
        skill: 'Node JS'
    },
    {
        img: '',
        level: 'Basic',
        skill: 'Firebase'
    },
]
export const aboutCards = [
    {
        name: 'Experience',
        icon: <Icon28WorkOutline />,
        number: '3+ Years Working'
    },
    {
        name: 'Clients',
        icon: <Icon28Users3Outline />,
        number: '200+ Worldwide'
    },
    {
        name: 'Projects',
        icon: <Icon28AddAwardOutline />,
        number: '80+ Completed'
    },
]

export const portfolio = [
    {
        id: 1,
        title: 'Music App',
        githubLink: 'https://github.com/psychopathhh/yours',
        liveLink: 'https://yoursmusic.netlify.app',
        image: portfolio_yours
    },
]
export const testimonials = [
    {
        name: 'Ernest Achiever',
        image: IMG1,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, culpa aliquam aperiam quisquam quod cumque provident, nemo exercitationem vero animi nostrum voluptatum harum voluptatibus, ut asperiores facilis dignissimos eum!'
    },
    {
        name: 'Einstein Achiever',
        image: IMG1,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, culpa aliquam aperiam quisquam quod cumque provident, nemo exercitationem vero animi nostrum voluptatum harum voluptatibus, ut asperiores facilis dignissimos eum!'
    },
    {
        name: 'Edward Achiever',
        image: IMG1,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga, culpa aliquam aperiam quisquam quod cumque provident, nemo exercitationem vero animi nostrum voluptatum harum voluptatibus, ut asperiores facilis dignissimos eum!'
    },
]

export const contacts = [
    {
        icon: <MdEmail />,
        app: 'Email',
        myData: 'badrenkovadasha@gmail.com',
        address: `https://mailto:badrenkovadasha@gmail.com`
    },
    {
        icon: <FaTelegram />,
        app: 'Telegram',
        myData: '@itsmeyousee',
        address: `https://t.me/itsmeyousee`
    },
    {
        icon: <IoLogoWhatsapp />,
        app: 'WhatsApp',
        myData: '+79107237551',
        address: `https://wa.me/79107237551`
    },
]

export const links = [
    {
        address: '#',
        link: 'home'
    },
    {
        address: '#about',
        link: 'about'
    },
    {
        address: '#experience',
        link: 'experience'
    },
    {
        address: '#services',
        link: 'services'
    },
    {
        address: '#portfolio',
        link: 'portfolio'
    },
    {
        address: '#testimonials',
        link: 'testimonials'
    },
    {
        address: '#contact',
        link: 'contact'
    }
]

export const socials = [
    {
        address: 'https://vk.com/itsmeyousee',
        icon: <Icon44LogoVk />

    },
    {
        address: 'https://github.com',
        icon: <FaGithub />

    },
    {
        address: 'https://t.me/itsmeyousee',
        icon: <SiTelegram />

    },
]