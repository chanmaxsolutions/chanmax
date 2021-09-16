/** @format */

import Image from 'next/image';
import TestimonialData from './../data/TestimonialsData';

const Testimonial = () => {
	return (
		<div className='container mb-5'>
			<div className='row justify-content-md-center text-center'>
				<div className='col-lg-7 align-items-center'>
					<p className='sub-head'>Trusted and endorsed</p>
					<h3 className=' main-head'>
						Trusted and endorsed by Chanmax and a lot of company around the
						world
					</h3>
				</div>
			</div>
			<div className='row'>
				{TestimonialData.map((content, i) => {
					return (
						<div key={i} className='col-lg-4 text-center mt-4'>
							<div className='card ' style={{ height: '100%' }}>
								<div className='card-body text-center testimonial-card'>
									<Image
										src='/images/testimonial.jpg'
										className='testimonials-img '
										width={100}
										height={100}
										alt='...'
									/>
									<p className='card-title'>{content.title}</p>
									<p
										style={{
											fontSize: '11px',
											color: '#108F64',
											textTransform: 'uppercase',
											fontWeight: '500',
										}}>
										{content.position}
									</p>
									<p className='card-text'>{content.excerpt}</p>
									{[...Array(Math.round(content.rating))].map((data, i) => (
										<span key={i} style={{ color: '#fbae01' }}>
											&#9733;
										</span>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Testimonial;
