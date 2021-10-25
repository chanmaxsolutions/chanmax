/** @format */

import Slider from 'react-slick';
import Image from 'next/image';
import TestimonialData from './../data/TestimonialsData';

const TestimonialCarousel = () => {
	var settings = {
		dots: true,
		arrows: true,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		speed: 200,
		cssEase: 'linear',
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					lazyLoad: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					lazyLoad: true,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					lazyLoad: true,
					dots: false,
				},
			},
		],
	};

	return (
		<div style={{ marginBottom: '50px' }}>
			<div className='container mb-5 to-hide-and-show-testimonial-carousal'>
				<div className='row justify-content-md-center text-center'>
					<div className='col-lg-6 ps-4 pe-4 align-items-center'>
						<p className='sub-head'>Testimonials</p>
						<h3 className='main-head'>
							Listen to what our happy clients have to say and a promise of what
							is to come
						</h3>
					</div>
				</div>
				<Slider {...settings}>
					<div>
						<div className='row  text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ minHeight: '500px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635074949/testimonials/anchale_vw6s71.jpg'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''>Anchale Ayngaranesan</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Founder of For You with Love
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Australia
										</p>
										<p className='card-text'>
											Prashan is very driven to provide the best kind of
											service. He not only does his job perfectly but also makes
											sure you are driven constantly to work towards your
											project. The patience and outcome are explicit making
											working with Chamax a profitable and peaceful experience.
										</p>
										<p className='small fw-bold'>
											(5.0)
											<span style={{ color: '#fbae01' }}>
												&#9733; &#9733; &#9733; &#9733; &#9733;
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ minHeight: '500px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635171351/testimonials/sajeev_ahy4cs.jpg'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''>Sajeevkanth Patricks</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											FOUNDER OF QUIZE SL
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Australia
										</p>
										<p className='card-text'>
											I was seeking an affordable software company to help me
											expand my YouTube business with a new product, and I came
											across Chanmax, who have been very helpful in growing my
											business. Since my business is performing so well, I'm
											expecting to expand it, and I'll be working with Chanmax
											once again.
										</p>
										<p className='small fw-bold'>
											(5.0)
											<span style={{ color: '#fbae01' }}>
												&#9733; &#9733; &#9733; &#9733; &#9733;
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ minHeight: '500px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='/images/testimonial.jpg'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''>Web Development</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											WEB DEVELOPMENT
										</p>
										<p className='card-text'>
											We have always known the power of digital, and we've
											mastered the strategy, tactics, and technology to harness
											it. Now, other departments have had to embrace the digital
											transformation that businesses have been talking about for
											so long.
										</p>
										<p className='small fw-bold'>
											(5.0)
											<span style={{ color: '#fbae01' }}>
												&#9733; &#9733; &#9733; &#9733; &#9733;
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ minHeight: '500px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='/images/testimonial.jpg'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''>Web Development</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											WEB DEVELOPMENT
										</p>
										<p className='card-text'>
											We have always known the power of digital, and we've
											mastered the strategy, tactics, and technology to harness
											it. Now, other departments have had to embrace the digital
											transformation that businesses have been talking about for
											so long.
										</p>
										<p className='small fw-bold'>
											(5.0)
											<span style={{ color: '#fbae01' }}>
												&#9733; &#9733; &#9733; &#9733; &#9733;
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default TestimonialCarousel;
