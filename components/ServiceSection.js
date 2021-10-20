/** @format */

import Link from 'next/link';
import Image from 'next/image';
import ServiceData from './../data/ServiceData';

const ServiceSection = () => {
	return (
		<div>
			<div className='container service-container cm-p5 mt-5 mb-5'>
				<div className='row justify-content-md-center text-center'>
					<div className='col-lg-7 align-items-center'>
						<p className='sub-head'>Our services</p>
						<h3 className='pb-5 main-head'>
							Conquer Excellence with top-notch digital software solutions
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
									<h4 className=''> {content.homeTitle} </h4>
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
		</div>
	);
};

export default ServiceSection;
