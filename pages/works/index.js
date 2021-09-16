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
				subHead='TRUSTED AND ENDORSED'
				mainHead='Trusted and endorsed by Chanmax and a lot of company around the world'
				bgImg='/images/4.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>

			<WorkGrid />
			<HomeCallToAction />
		</React.Fragment>
	);
}
