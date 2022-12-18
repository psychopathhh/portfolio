import React, { useRef } from 'react'
import { contacts } from '../../constants'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eb4nn2r', 'template_uj1q7nm', form.current, 'UhDwAgyJ_bRBxD7yJ')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>contact me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    {
                        contacts.map(({ myData, address, app, icon }) => (
                            <div key={address} className="contact__option">
                                <div className='contact__option-icon'>
                                    {icon}
                                </div>
                                <h4>{app}</h4>
                                <h5>{myData}</h5>
                                <a href={address} target='_blank'>Send a message</a>
                            </div>
                        ))
                    }
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact