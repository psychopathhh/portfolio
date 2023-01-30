import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { aboutCards } from '../../constants';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-wrapper">
                        <img src={ME} alt="me" className="about__me-image" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className="about__cards">
                        {
                            aboutCards.map(({ icon, name, number }) => {
                                return (
                                    <article key={name} className='about__card'>
                                        <span className='about__icon'>{icon}</span>
                                        <h5>{name}</h5>
                                        <small>{number}</small>
                                    </article>
                                )
                            })
                        }
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur eius molestiae possimus ad numquam perferendis distinctio soluta, alias quae tenetur quaerat dolorum deleniti excepturi! Iure consequatur hic unde facilis ipsum!</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About