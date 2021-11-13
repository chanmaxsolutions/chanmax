/** @format */

import ServiceData from '../../data/ServiceData';
import SEO from '../../components/SEO';
import CallToActionSingle from './../../components/CallToActionSingle';

const ServiceDetails = ({ ServiceDatas }) => {
	return (
		<div className='bg-white'>
			<SEO title={ServiceDatas.title} desc={ServiceDatas.title} img={ServiceDatas.bgImg} />
			<div
				className='container-fluid service-details-container-feature-image'
				style={{ backgroundColor: `${ServiceDatas.bgColor}` }}>
				<div
					className='row blog-details-row text-center '
					style={{ backgroundImage: `url(${ServiceDatas.bgImg})` }}>
					<div className='col-lg-6 page-header-margin-top'>
						<p className='sub-head text-white'>WE DO</p>
						<h3 className='pb-5 text-white main-head '>{ServiceDatas.title}</h3>
					</div>
				</div>
			</div>

			<div className='container-fluid  pt-5 pb-5 mb-5'>
				<div className='row justify-content-md-center'>
					<div className='col-md-10'>
						{ServiceDatas.body &&
							ServiceDatas.body.map((value, i) => {
								return (
									<div
										key={i}
										className='desc hero-description'
										dangerouslySetInnerHTML={{ __html: value }}
									/>
								);
							})}
					</div>
				</div>
			</div>
			<CallToActionSingle />
		</div>
	);
};

ServiceDetails.getInitialProps = async function ({ query }) {
	const { slug } = query;
	const ServiceDatas = ServiceData.filter((service) => service.slug === slug);
	return { ServiceDatas: ServiceDatas[0] };
};

export default ServiceDetails;
