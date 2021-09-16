/** @format */

import WorkData from '../../data/WorkData';
import HomeCallToAction from '../../components/HomeCallToAction';

const ServiceDetails = ({ WorkDatas }) => {
	return (
		<div>
			<div
				className='container-fluid service-details-container-feature-image '
				style={{ backgroundImage: `url(${WorkDatas.image})` }}>
				<div className='row blog-details-row text-center '>
					<div className='col-lg-6 page-header-margin-top'>
						<p className='sub-head text-white'>OUR WORKS</p>
						<h3 className='pb-5 text-white main-head '>{WorkDatas.title}</h3>
					</div>
				</div>
			</div>
			<div className='container-fluid bg-white pt-5 pb-5 mb-5'>
				<div className='row justify-content-md-center'>
					<div className='col-md-7'>
						{WorkDatas.body &&
							WorkDatas.body.map((value, i) => {
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
			<HomeCallToAction />
		</div>
	);
};

ServiceDetails.getInitialProps = async function ({ query }) {
	const { slug } = query;
	const WorkDatas = WorkData.filter((work) => work.slug === slug);
	return { WorkDatas: WorkDatas[0] };
};

export default ServiceDetails;
