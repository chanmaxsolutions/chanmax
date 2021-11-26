/** @format */

import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import HomeCallToAction from '../components/HomeCallToAction';
import ApproachDetails from '../components/ApproachDetails';

export default function About() {
	return (
		<React.Fragment>
			<SEO
				title='Our Approach | Chanmax'
				desc='We use an agile software development technique that is both streamlined and efficient.'
				img='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636898356/page-header-illustrations/approach-illlustrator_rtrbgx.jpg'
			/>
			<PageHeader
				subHead='Our Approach'
				mainHead='We use an agile software development technique that is both streamlined and efficient.'
				bgImg='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636898356/page-header-illustrations/approach-illlustrator_rtrbgx.svg'
				bgColor='#f4a553'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>
			<ApproachDetails />
			<HomeCallToAction />
		</React.Fragment>
	);
}
