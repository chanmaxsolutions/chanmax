/** @format */

import React from 'react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import ServiceRow from '../../components/ServiceRows';

export default function Services() {
	return (
		<React.Fragment>
			<SEO title='OUR SERVICES | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='Services'
				mainHead='What we do'
				bgImg='/images/5.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>

			<ServiceRow />
		</React.Fragment>
	);
}
