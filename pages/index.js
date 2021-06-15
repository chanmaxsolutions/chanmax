import React from 'react'
import SEO from '../components/SEO'
import HomeHero from '../components/HomeHero'
import ClientCarousel from '../components/ClientCarousel'
import ServiceSection from '../components/ServiceSection'

export default function Home() {
    return (
        <React.Fragment>
            <SEO title="Chanmax" />
            <HomeHero/>
            <ClientCarousel/>
            <ServiceSection/>
        </React.Fragment>
    )
}
