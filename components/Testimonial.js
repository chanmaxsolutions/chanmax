/** @format */

import Image from 'next/image';
import TestimonialData from './../data/TestimonialsData';

const Testimonial = () => {
	return (
		<div className='container mb-5 to-hide-and-show-testimonial'>
			<div className='row justify-content-md-center text-center'>
				<div className='col-lg-6 align-items-center'>
					<p className='sub-head'>Testimonials</p>
					<h3 className=' main-head'>
						Listen to what our happy clients have to say and a promise of what
						is to come
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
										src={content.image}
										className='testimonials-img '
										width={100}
										height={100}
										alt='...'
									/>
									<h4 className=''>{content.title}</h4>
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
