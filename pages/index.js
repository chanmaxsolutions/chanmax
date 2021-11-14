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
import HomeWhySection from '../components/HomeWhySection';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Home() {
	return (
		<div>
			<SEO title='CHANMAX | BUILDING APPS FOR STARTUPS TO CORPORATES' />
			<HomeHero />
			<ClientCarousel />
			<HomeWhySection />
			<ServiceSection />
			<HomeTeam />
			<Testimonial />
			<TestimonialCarousel />
			<FeatureProject />
			<HomeCallToAction />
		</div>
	);
}
