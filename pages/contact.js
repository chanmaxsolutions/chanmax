/** @format */

import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';

export default function Contact() {
	return (
		<React.Fragment>
			<SEO title='CONTACT US | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='Contact'
				mainHead='Reach us for your enquiry'
				bgImg='/images/3.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>
			<ContactDetails />
			<ContactForm />
		</React.Fragment>
	);
}
