import React from 'react'
import { portfolio } from '../../constants'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>my recent work</h5>
            <h2>portfolio</h2>
            <div className="container portfolio__container">
                {
                    portfolio.map(({ id, title, githubLink, liveLink, image }) => (
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt="portfolio1" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={githubLink} className='btn' target='_blank'>Github</a>
                                <a href={liveLink} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    )
}

export default Portfolio