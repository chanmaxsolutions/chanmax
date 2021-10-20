/** @format */

import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import HomeCallToAction from '../components/HomeCallToAction';
import AboutDetails from '../components/AboutDetails';

export default function About() {
	return (
		<React.Fragment>
			<SEO title='ABOUT US | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='TRUSTED AND ENDORSED'
				mainHead='Trusted and endorsed by Chanmax and a lot of company around the world'
				bgImg='/images/2.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>
			<AboutDetails />
			<HomeCallToAction />
		</React.Fragment>
	);
}
