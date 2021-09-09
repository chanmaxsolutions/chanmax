/** @format */

import Link from 'next/link';
import ServiceData from './../data/ServiceData';

const ServiceRow = () => {
	return (
		<div>
			{ServiceData &&
				ServiceData.map((ServiceDataMapped, i) => (
					<div key={i}>
						{i % 2 === 0 ? (
							<div className='container service-row-container  mb-md-5 mb-sm-0'>
								<div className='row'>
									<div
										className='col-md-4 service-row-col-small-1'
										style={{
											backgroundImage: `url(${ServiceDataMapped.image})`,
										}}></div>
									<div className='col-md-8 d-flex align-items-center p-4'>
										<div>
											<h3>{ServiceDataMapped.title}</h3>
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
						) : (
							// <div className='container service-row-container-2 mb-5'>
							// 	<div className='row flex-sm-row-reverse'>
							// 		<div
							// 			className='col-md-4 service-row-col-small-2'
							// 			style={{
							// 				backgroundImage: `url(${ServiceDataMapped.image})`,
							// 			}}></div>
							// 		<div className='col-md-8 d-flex align-items-center p-4'>
							// 			<div>
							// 				<h3 className='text-white main-head'>
							// 					{ServiceDataMapped.title}
							// 				</h3>
							// 				<p className='text-white hero-description'>
							// 					{' '}
							// 					{ServiceDataMapped.excerpt}{' '}
							// 				</p>
							// 				<Link href={`/services/${ServiceDataMapped.slug}`}>
							// 					<a className='button fourth '>Learn More</a>
							// 				</Link>
							// 			</div>
							// 		</div>
							// 	</div>
							// </div>
							<div className='container service-row-container  mb-md-5 mb-sm-0'>
								<div className='row'>
									<div
										className='col-md-4 service-row-col-small-1'
										style={{
											backgroundImage: `url(${ServiceDataMapped.image})`,
										}}></div>
									<div className='col-md-8 d-flex align-items-center p-4'>
										<div>
											<h3>{ServiceDataMapped.title}</h3>
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
						)}
					</div>
				))}
		</div>
	);
};

export default ServiceRow;
