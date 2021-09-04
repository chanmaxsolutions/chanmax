/** @format */

import Slider from 'react-slick';

const ClientCarousel = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6,
		initialSlide: 0,
		autoplay: true,
		speed: 200,
		cssEase: 'linear',
		autoplaySpeed: 5000,

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
					slidesToShow: 3,
					slidesToScroll: 3,
					lazyLoad: true,
				},
			},
		],
	};
	return (
		<div className='bg-white '>
			<div className='container p-5'>
				<div className='row justify-content-md-center text-center'>
					<div className='col-lg-7 align-items-center'>
						<p className='sub-head'>Trusted and endorsed</p>
						<h3 className='pb-5 main-head'>Trusted and endorsed by Chanmax and a lot of company around the world</h3>
					</div>
				</div>
				<Slider {...settings}>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/adams-1.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/adams-1.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/Infosys_logo.svg'></img>
					</div>
					<div>
						<img src='https://staging2.awsm.in/awsm-v3/wp-content/uploads/2020/07/adams-1.svg'></img>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default ClientCarousel;
