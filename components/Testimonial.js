/** @format */

import Image from 'next/image';
import TestimonialData from './../data/TestimonialsData';

const Testimonial = () => {
	return (
		<div className="container mb-5">
			<p className="card-title text-center text-uppercase">Logo & Branding</p>
			<h3 className="text-center text-uppercase">Testimonials</h3>
			<div className="row">
				<div className="col-sm-4 text-center mt-4">
					<div className="card ">
						{TestimonialData.map((content, i) => {
							return (
								<div ke className="card-body text-center testimonial-card">
									<Image src="/images/testimonial.jpg" className="testimonials-img " width={100} height={100} alt="..." />
									<p className="card-title">{content.title}</p>
									<p style={{ fontSize: '13px', color: '#108F64' }}>{content.position}</p>
									<p className="card-text">{content.excerpt}</p>
									{[...Array(Math.round(content.rating))].map(() => (
										<span style={{ color: '#fbae01' }}>&#9733;</span>
									))}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
