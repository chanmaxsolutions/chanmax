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
			<SEO title='CONTACT US | CHANMAX TECHNOLOGIES' desc="Just one call away" img="https://res.cloudinary.com/dem8lqxhj/image/upload/v1634897321/page-header-illustrations/contact-illlustrator_tpq4fp.svg" />
			<PageHeader
				subHead='Just one call away'
				mainHead='We are excitedly looking to fast forward your digital venture
				Here is how you can reach us'
				bgImg='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634897321/page-header-illustrations/contact-illlustrator_tpq4fp.svg'
				bgColor='#ffca38'
			/>
			<ContactDetails />
			<ContactForm />
			<HomeCallToAction />
		</React.Fragment>
	);
}
