/** @format */

import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import BlogComponent from '../../components/Blog';

const Blog = () => {
	return (
		<div className='bg-white'>
			<SEO title='OUR BLOG | CHANMAX TECHNOLOGIES' />
			<PageHeader
				subHead='TRUSTED AND ENDORSED'
				mainHead='Trusted and endorsed by Chanmax and a lot of company around the world'
				bgImg='/images/6.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>
			<BlogComponent />
		</div>
	);
};

export default Blog;
