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
		pauseOnHover: true,
		pauseOnFocus: true,

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
								<div className='card ' style={{ minHeight: '450px' }}>
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
								<div className='card ' style={{ minHeight: '450px' }}>
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
											Sri Lanka
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635179640/testimonials/seran_vf1cz3.jpg'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''>Seran</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Co-founder of Ovamee Pvt Ltd
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Sri Lanka
										</p>
										<p className='card-text'>
											It was smooth and transparent. The responses we got from
											these folks ease us to create better outcomes. Good with
											communication.
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635325754/testimonials/kevinj_wxja8u.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Kevin J</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Director of Symbioun
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											United Kingdom
										</p>
										<p className='card-text'>
											I am happy that I chose Chanmax as a preferred partner for
											our Logo and branding requirements. The quality of work
											and promptness is exceptional. I am happy to recommend
											them as a one stop shop for all web, mobile app & UI/UX
											work..
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635882942/testimonials/hdo_mdhrkp.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Jesurasa Amirtharaj</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Director of HDO
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Sri Lanka
										</p>
										<p className='card-text'>
											We have been working with Chanmax since 2019 to up to now,
											and we are satisfied with their services. We highly
											recommend choosing them for your next project.
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635454946/testimonials/Mgunz-myu_k95yu7.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Myu Guna</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Owner of MGUNZ
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Australia
										</p>
										<p className='card-text'>
											I recently used Chanmax to create my website as part of my
											rebrand in the business model. These guys were friendly
											and went above and beyond to ensure my vision was met. I
											cannot recommend them enough for your next project!
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635883501/testimonials/ai-4-life_ulsp1t.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Jathujan Mahendran</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Co-founder of Ai 4 Life
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Sri Lanka
										</p>
										<p className='card-text'>
											We recently worked with Chanmax on a logo design project
											for our startup AI 4 LIFE, and their designs were amazing.
											It fulfilled our expectations.
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1635884220/testimonials/sajeev_udd8cg.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Sajeev Punithakaran</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Co-founder of Ai 4 Life
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Sri Lanka
										</p>
										<p className='card-text'>
											First of all, I would like to thank them for the excellent
											logo they created for us. It has been designed very neatly
											than we expected. They put their maximum effort into
											creating the logo according to our needs. Also, we
											frequently receive positive comments from lots of people
											who look at our logo.
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636532677/testimonials/premalooks_yxecpr.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Premalooks K</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Sales Executive at Rhino Roofing Product Ltd
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Sri Lanka
										</p>
										<p className='card-text'>
											They grasped my demand and gave a perfect solution when I
											recently worked with them on a design-related job. I am
											pleased with the results and look forward to collaborating
											with them on future projects.
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636533383/testimonials/selvaraja_xzblsl.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Nadarajah Selvarajah</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Founder Secretary of Noolthettam
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											United Kingdom
										</p>
										<p className='card-text'>
											I wanted to digitize all of my books and book collections
											but didn't know how, so I contacted Chanmax, who quickly
											grasped my requirements and suggested an appropriate
											solution, as well as building a platform for me. The
											service was user-friendly. They come highly recommended by
											me.
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
								<div className='card ' style={{ minHeight: '450px' }}>
									<div className='card-body text-center testimonial-card'>
										<Image
											src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636534259/testimonials/sujan_k6hqka.webp'
											className='testimonials-img '
											width={100}
											height={100}
											alt='...'
										/>
										<h4 className=''> Sujan Selven</h4>
										<p
											style={{
												fontSize: '11px',
												color: '#108F64',
												textTransform: 'uppercase',
												fontWeight: '500',
											}}>
											Director of Space Comms & Civil
										</p>
										<p
											className='small'
											style={{ lineHeight: 0.5, fontWeight: 500 }}>
											Australia
										</p>
										<p className='card-text'>
											I've been working with Chanmax on various projects for
											several years, and they've done some incredible work for
											me. I loved working with Chanmax since they have both
											creative UX designers and talented coders.
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
