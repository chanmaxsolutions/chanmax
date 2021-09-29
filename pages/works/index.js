/** @format */

import React from 'react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import WorkGrid from '../../components/WorkGrid';
import HomeCallToAction from '../../components/HomeCallToAction';

export default function Works() {
	return (
		<React.Fragment>
			<SEO title='OUR WORKS | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='Case Studies'
				mainHead='We are problem solvers. Dive into our creative mind of Intelligent Solutions.'
				bgImg='/images/4.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>

			<WorkGrid />
			<HomeCallToAction />
		</React.Fragment>
	);
}
