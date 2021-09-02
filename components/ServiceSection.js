/** @format */

import Link from 'next/link';
import Image from 'next/image';
import ServiceData from './../data/ServiceData';

const ServiceSection = () => {
	return (
		<div className='container service-container  mt-5 mb-5'>
			<h3 className='text-center'>Services</h3>
			<div className='row'>
				{ServiceData.slice(-4).map((content, i) => {
					return (
						<div key={i} className='card col-lg-3 mt-3 mb-2'>
							<Image src={content.icon} className='text-left' width={70.5} height={72} alt='...' />
							<div className='card-body text-center'>
								<p className='card-title'> {content.title} </p>
								<p className='card-text'>{content.shortExcerpt}</p>
								<Link href={`services/${content.id}`}>
									<a className='button large third'>{content.buttonText}</a>
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
