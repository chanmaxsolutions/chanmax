/** @format */

import BlogsData from '../../data/BlogsData';
import SEO from '../../components/SEO';
import Image from 'next/image';
import HomeCallToAction from '../../components/HomeCallToAction';

const BlogDetails = ({ blogData }) => {
	return (
		<div>
			<SEO title={blogData.title} />
			<div
				className='container-fluid blog-details-container-feature-image '
				style={{ backgroundImage: `url(${blogData.image})` }}>
				<div className='row blog-details-row text-center '>
					<div className='col-lg-6 page-header-margin-top'>
						<h3 className='text-white main-head '>{blogData.title}</h3>
						<Image
							src={blogData.authorImage}
							width={60}
							height={60}
							className='img-thumbnail home-blog-author-image'
							alt='...'
						/>
						<div className='ms-2 mt-2'>
							<span className='home-blog-author-name text-white'>
								{blogData.author}{' '}
							</span>
							<p className='home-blog-author-position text-white'>
								{blogData.authorPosition}
							</p>
						</div>
					</div>
				</div>

				{/* <div className='row justify-content-md-center blog-details-row'>
					<div className='col-lg-9 d-flex align-items-center'>
						<div className='text-center'>
							<h1 className='text-white text-center'>{blogData.title}</h1>
							<Image
								src={blogData.authorImage}
								width={60}
								height={60}
								className='img-thumbnail home-blog-author-image'
								alt='...'
							/>
							<div className='ms-2 mt-2'>
								<span className='home-blog-author-name text-white'>
									{blogData.author}{' '}
								</span>
								<p className='home-blog-author-position text-white'>
									{blogData.authorPosition}
								</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>

			<div className='container-fluid bg-white pt-5 pb-5'>
				<div className='row justify-content-md-center'>
					<div className='col-md-7'>
						{blogData.body &&
							blogData.body.map((value, i) => {
								return (
									<div
										key={i}
										className='desc hero-description'
										dangerouslySetInnerHTML={{ __html: value }}
									/>
								);
							})}
					</div>
				</div>
			</div>
			<HomeCallToAction />
		</div>
	);
};

BlogDetails.getInitialProps = async function ({ query }) {
	const { slug } = query;
	const blogData = BlogsData.filter((blog) => blog.slug === slug);
	return { blogData: blogData[0] };
};

export default BlogDetails;
