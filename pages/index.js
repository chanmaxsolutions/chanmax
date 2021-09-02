/** @format */

import React from 'react';
import SEO from '../components/SEO';
import HomeHero from '../components/HomeHero';
import ClientCarousel from '../components/ClientCarousel';
import ServiceSection from '../components/ServiceSection';
import FeatureProject from '../components/FeatureProject';
import Testimonial from '../components/Testimonial';
import HomeTeam from '../components/HomeTeam';
import HomeBlogs from '../components/HomeBlogs';
import HomeCallToAction from '../components/HomeCallToAction';

export default function Home() {
	return (
		<React.Fragment>
			<SEO title='CHANMAX TECHNOLOGIES | FOR FASTEST APPLICATION' />
			<HomeHero />
			{/* <ClientCarousel /> */}
			<ServiceSection />
			<FeatureProject />
			<Testimonial />
			<HomeTeam />
			<HomeBlogs />
			<HomeCallToAction />
		</React.Fragment>
	);
}
