/** @format */

import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import HomeCallToAction from '../components/HomeCallToAction';

export default function Contact() {
	return (
		<React.Fragment>
			<SEO title='CONTACT US | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='TRUSTED AND ENDORSED'
				mainHead='Trusted and endorsed by Chanmax and a lot of company around the world'
				bgImg='/images/3.jpg'
			/>
			<ContactDetails />
			<ContactForm />
			<HomeCallToAction />
		</React.Fragment>
	);
}
