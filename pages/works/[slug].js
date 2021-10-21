/** @format */

import WorkData from '../../data/WorkData';
import HomeCallToAction from '../../components/HomeCallToAction';
import Link from 'next/link';

const ServiceDetails = ({ WorkDatas }) => {
	return (
		<div>
			<div
				className='container-fluid service-details-container-feature-image '
				style={{ backgroundColor: `${WorkDatas.bgColor}` }}>
				<div
					className='row blog-details-row text-center '
					// style={{ backgroundImage: `url(${WorkDatas.image})` }}
				>
					<div className='col-lg-6 page-header-margin-top'>
						<p className='text-uppercase text-white'>{WorkDatas.product}</p>
						<h3 className='text-white main-head '>{WorkDatas.title}</h3>
						<Link href={`#${WorkDatas.slug}`}>
							<a className='work-detail-button'>Read More</a>
						</Link>
					</div>
				</div>
			</div>
			<div
				id={WorkDatas.slug}
				className='container-fluid bg-white pt-5 pb-5 mb-5'>
				<div className='row justify-content-md-center'>
					<div className='col-md-10'>
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
