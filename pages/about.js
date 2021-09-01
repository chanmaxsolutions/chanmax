/** @format */

import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

export default function About() {
	return (
		<React.Fragment>
			<SEO title='ABOUT US | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='About'
				mainHead='Read our story'
				bgImg='/images/2.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>
		</React.Fragment>
	);
}
