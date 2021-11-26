/** @format */

import React from 'react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import WorkGrid from '../../components/WorkGrid';
import HomeCallToAction from '../../components/HomeCallToAction';

export default function Works() {
	return (
		<React.Fragment>
			<SEO title='Our Works | Chanmax' />
			<PageHeader
				subHead='Case Studies'
				mainHead='We are problem solvers. Dive into our creative mind of Intelligent Solutions.'
				bgImg='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634895207/page-header-illustrations/works-illlustrator_rsiaej.svg'
				bgColor='#a93fe8'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>

			<WorkGrid />
			<HomeCallToAction />
		</React.Fragment>
	);
}
