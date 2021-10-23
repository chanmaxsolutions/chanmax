/** @format */

import Link from 'next/link';
import HomeCallToActionData from './../data/HomeCallToActionData';

const HomeCallToAction = () => {
	return (
		<div className='container home-call-to-action-container mb-5'>
			<div className='row justify-content-md-center home-call-to-action-container-row'>
				<div className='col-lg-7 d-flex align-items-center'>
					{HomeCallToActionData.map((content, i) => {
						return (
							<div key={i} className='text-center'>
								<h3 className=' text-white mt-2'>{content.title}</h3>
								<p className='text-white hero-description'>
									{' '}
									{content.excerpt}
								</p>
								<Link href={content.ButtonLink}>
									<a
										className='button  large  '
										style={{ marginLeft: '5px', marginTop: '10px' }}>
										{content.ButtonText}
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HomeCallToAction;
