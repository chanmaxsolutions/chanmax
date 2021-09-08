/** @format */

import ServiceData from '../../data/ServiceData';
import CallToAction from '../../components/CallToAction';
import SEO from '../../components/SEO';

const ServiceDetails = ({ ServiceDatas }) => {
	return (
		<div>
			<SEO title={ServiceDatas.title} />
			<div
				className='container-fluid service-details-container-feature-image '
				style={{ backgroundImage: `url(${ServiceDatas.image})` }}>
				<div className='row blog-details-row'>
					<div className='col-md-4 cm-mt-page-header align-items-center offset-md-4'>
						<div className='text-center'>
							<span className='text-white text-uppercase '>Our Services</span>
							<h1 className='text-white '>{ServiceDatas.title}</h1>
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid bg-white pt-5 pb-5'>
				<div className='row justify-content-md-center'>
					<div className='col-md-7'>
						{ServiceDatas.body &&
							ServiceDatas.body.map((value, i) => {
								return <div key={i} className='desc' dangerouslySetInnerHTML={{ __html: value }} />;
							})}
					</div>
				</div>
			</div>

			<CallToAction />
		</div>
	);
};

ServiceDetails.getInitialProps = async function ({ query }) {
	const { slug } = query;
	const ServiceDatas = ServiceData.filter((service) => service.slug === slug);
	return { ServiceDatas: ServiceDatas[0] };
};

export default ServiceDetails;
