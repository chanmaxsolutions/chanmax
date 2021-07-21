import React from 'react'
import SEO from '../../components/SEO'
import PageHeader from '../../components/PageHeader'
import WorkGrid from '../../components/WorkGrid'

export default function Works() {
    return (
        <React.Fragment>
            <SEO title="Chanmax" />
            <PageHeader subHead="Works" mainHead='So far we have done'
            bgImg="/images/4.jpg" 
            des="We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​"/>

            <WorkGrid/>
        </React.Fragment>
    )
}
