import React from 'react'
import { About, Experience, Header, Nav, Services, Portfolio, Testimonials, Contact, Footer } from './components'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App