import React from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'

export default function Services() {
    return (
        <React.Fragment>
            <SEO title="Chanmax" />
            <PageHeader subHead="Services" mainHead='What we do'
            bgImg="/images/team.jpg" 
            des="We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​"/>
        </React.Fragment>
    )
}
