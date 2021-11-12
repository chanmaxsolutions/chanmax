/** @format */

import React from 'react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import ServiceRow from '../../components/ServiceRows';
import HomeCallToAction from '../../components/HomeCallToAction';

export default function Services() {
	return (
		<React.Fragment>
			<SEO title='OUR SERVICES | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='Our services '
				mainHead='Conquer Excellence with top-notch digital software solutions'
				bgImg='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634895640/page-header-illustrations/service-illlustrator_jgflqe.svg'
				bgColor='#4187fa'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>

			<ServiceRow />
			<HomeCallToAction />
		</React.Fragment>
	);
}
