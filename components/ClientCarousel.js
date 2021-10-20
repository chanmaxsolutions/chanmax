/** @format */

import Slider from 'react-slick';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

const ClientCarousel = () => {
	// const { ref, inView } = useInView({
	// 	threshold: 0.9,
	// });
	// const animation = useAnimation();

	// useEffect(() => {
	// 	if (inView) {
	// 		animation.start({
	// 			opacity: 1,
	// 		});
	// 	}
	// 	if (!inView) {
	// 		animation.start({
	// 			opacity: 0,
	// 		});
	// 	}

	// 	console.log(inView);
	// }, [inView]);

	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 3,
		initialSlide: 0,
		autoplay: true,
		speed: 200,
		cssEase: 'linear',
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
					lazyLoad: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					lazyLoad: true,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					lazyLoad: true,
				},
			},
		],
	};
	return (
		<div className='bg-white '>
			<div className='container cm-p5'>
				<div className='row justify-content-md-center text-center'>
					<div className='col-lg-6 align-items-center'>
						<p className='sub-head'>Trusted and endorsed</p>
						<h3 className='pb-5 main-head'>
							Esteemed Clients partnered from across the borders
						</h3>
					</div>
				</div>
				<Slider {...settings}>
					<div>
						<img src='/images/svg/jb.svg' width='100%' height='100%' />
					</div>
					<div>
						<img
							className='client-logo'
							src='/images/svg/djmgunz.svg'
							width='100%'
							height='100%'
						/>
					</div>
					<div>
						<img src='/images/svg/space.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/bb.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/betels.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/noolthettam.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/hitbuys.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/upcycle.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/hdo.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/valvuthyam.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/dreamart.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/paragon.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/ovamee.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/paathai.svg' width='100%' height='100%' />
					</div>
					<div>
						<img src='/images/svg/iway.svg' width='100%' height='100%' />
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default ClientCarousel;
