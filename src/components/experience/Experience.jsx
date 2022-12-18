import React from 'react'
import { backSkills, frontSkills } from '../../constants'
import './experience.css'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skiils i have</h5>
            <h2>My experience</h2>
            <div className="container experience__container">
                <div>
                    <h3>Frontend Developement</h3>
                    <div className="experience__content">
                        {
                            frontSkills.map(({ skill, level }) => (
                                <article key={skill} className="experience__details">
                                    <div>
                                        <h4>{skill}</h4>
                                        <small className='text-light'>{level}</small>
                                    </div>

                                </article>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3>Backend Developement</h3>
                    <div className="experience__content">
                        {
                            backSkills.map(({ skill, level }) => (
                                <article key={skill} className="experience__details">
                                    <div>
                                        <h4>{skill}</h4>
                                        <small className='text-light'>{level}</small>
                                    </div>

                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience