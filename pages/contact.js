import React from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <React.Fragment>
            <SEO title="Chanmax" />
            <PageHeader subHead="Contact" mainHead='Reach us for your enquiry'
            bgImg="/images/team.jpg" 
            des="We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​"/>
            <ContactDetails/>
            <ContactForm/>
        </React.Fragment>
    )
}
