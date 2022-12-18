import React from 'react'
import './testimonials.css'
import { testimonials } from '../../constants/index'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>review from clients</h5>
            <h2>testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    testimonials.map(({ name, review, image }) => (
                        <SwiperSlide key={name} className='testimonial'>
                            <div className="client__avatar">
                                <img src={image} alt="client__avatar" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}

export default Testimonials