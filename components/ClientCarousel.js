/** @format */

import Slider from 'react-slick';
import Image from 'next/image';

const ClientCarousel = () => {
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
				breakpoint: 320,
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
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761309/valvuthyam_b1fjxh.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761309/upcycle_nuxhb0.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761309/space_nfbgio.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761308/paathai_bbc88z.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761307/paragon_vqlmjd.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761307/ovamee_qxhrcm.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761307/noolthettam_xjnsda.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761303/jb_pqjhiz.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761303/iway_fabwuy.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761301/hitbuys_iv1szp.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761301/hdo_lrzcvj.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761299/dreamart_omsxih.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761297/djmgunz_twfah8.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761297/betels_hhn4is.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761297/bb_viv2y3.svg'
						/>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default ClientCarousel;
