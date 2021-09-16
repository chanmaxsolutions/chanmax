/** @format */

import Link from 'next/link';
import Image from 'next/image';
import ServiceData from './../data/ServiceData';

const ServiceSection = () => {
	return (
		<div className='container service-container cm-p5 mt-5 mb-5'>
			<div className='row justify-content-md-center text-center'>
				<div className='col-lg-7 align-items-center'>
					<p className='sub-head'>Trusted and endorsed</p>
					<h3 className='pb-5 main-head'>
						Trusted and endorsed by Chanmax and a lot of company around the
						world
					</h3>
				</div>
			</div>
			<div className='row'>
				{ServiceData.slice(-4).map((content, i) => {
					return (
						<div key={i} className='card col-lg-3 mt-3 mb-2'>
							<Image
								src={content.icon}
								className='text-left'
								width={70.5}
								height={72}
								alt='...'
							/>
							<div className='card-body text-center'>
								<p className='card-title'> {content.homeTitle} </p>
								<p className='card-text'>{content.shortExcerpt}</p>
								<Link href={`/services/${content.slug}`}>
									<a className='home-why-section-button'>
										{content.buttonText}
									</a>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ServiceSection;
