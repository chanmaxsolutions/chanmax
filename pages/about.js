import React from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'

export default function About() {
    return (
        <React.Fragment>
            <SEO title="Chanmax" />
            <PageHeader subHead="About" mainHead='Read our story'
            bgImg="/images/3.jpg" 
            des="We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​"/>
        </React.Fragment>
    )
}
