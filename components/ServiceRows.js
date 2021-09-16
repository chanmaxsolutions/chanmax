/** @format */

import Link from 'next/link';
import ServiceData from './../data/ServiceData';

const ServiceRow = () => {
	return (
		<div className='cm-p-row'>
			{ServiceData &&
				ServiceData.map((ServiceDataMapped, i) => (
					<div key={i}>
						<div className='container mb-5 service-row-container  mb-md-5 mb-sm-0 '>
							<div className='row'>
								<div
									className='col-md-4 service-row-col-small'
									style={{
										backgroundImage: `url(${ServiceDataMapped.image})`,
									}}></div>
								<div className='col-md-8 d-flex align-items-center p-md-4 p-4 ps-2 pe-2'>
									<div>
										<h3 className='main-head'>{ServiceDataMapped.title}</h3>
										<p className='hero-description'>
											{ServiceDataMapped.excerpt}{' '}
										</p>
										<Link href={`/services/${ServiceDataMapped.slug}`}>
											<a className='button'>Learn More</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ServiceRow;
