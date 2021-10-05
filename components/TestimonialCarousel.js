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
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					lazyLoad: true,
				},
			},
		],
	};
	return (
		<div>
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
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ height: '100%' }}>
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
										<span style={{ color: '#fbae01' }}>
											&#9733; &#9733; &#9733; &#9733; &#9733;
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ height: '100%' }}>
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
										<span style={{ color: '#fbae01' }}>
											&#9733; &#9733; &#9733; &#9733; &#9733;
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ height: '100%' }}>
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
										<span style={{ color: '#fbae01' }}>
											&#9733; &#9733; &#9733; &#9733; &#9733;
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className='row text-center cm-testimonial-m'>
							<div className='col-lg-12 text-center mt-4 '>
								<div className='card ' style={{ height: '100%' }}>
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
										<span style={{ color: '#fbae01' }}>
											&#9733; &#9733; &#9733; &#9733; &#9733;
										</span>
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
