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
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761309/client-logos/valvuthyam_b1fjxh.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761309/client-logos/upcycle_nuxhb0.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761309/client-logos/space_nfbgio.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761308/client-logos/paathai_bbc88z.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761307/client-logos/paragon_vqlmjd.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761307/client-logos/ovamee_qxhrcm.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761307/client-logos/noolthettam_xjnsda.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761303/client-logos/jb_pqjhiz.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761303/client-logos/iway_fabwuy.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761301/client-logos/hitbuys_iv1szp.svg'
						/>
					</div>
					<div>
						<Image
							width={174}
							height={32}
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1634761301/client-logos/hdo_lrzcvj.svg'
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
