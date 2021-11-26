/** @format */

import WorkData from '../../data/WorkData';
import SEO from '../../components/SEO';
import Link from 'next/link';
import CallToActionSingle from '../../components/CallToActionSingle';
import Image from 'next/image';

const ServiceDetails = ({ WorkDatas }) => {
	return (
		<div className='bg-white'>
			<SEO
				title={`${WorkDatas.product} | ${WorkDatas.title}`}
				desc={WorkDatas.title}
				img={WorkDatas.bgImg}
			/>
			<div
				className='container-fluid service-details-container-feature-image '
				style={{ backgroundColor: `${WorkDatas.bgColor}` }}>
				<div
					className='row blog-details-row text-center '
					style={{ backgroundImage: `url(${WorkDatas.bgImg})` }}>
					<div className='col-lg-6 page-header-margin-top'>
						<p className='text-uppercase text-white'>{WorkDatas.product}</p>
						<h3 className='text-white main-head '>{WorkDatas.title}</h3>
						<Link href={`#${WorkDatas.slug}`}>
							<a className='work-detail-button'>Read More</a>
						</Link>
					</div>
				</div>
			</div>

			<div className='justify-content-center service-data-container mt-5'>
				<div className='align-items-center service-data-container-inside'>
					<div
						className='col-lg-6 text-center p-3 '
						style={{
							backgroundColor: '#fff',
							boxShadow: 'rgb(246 245 245) 0px 0px 20px',
						}}>
						<div>
							<Image
								src={WorkDatas.clientImg}
								width='100'
								height='100'
								width={90}
								height={90}
							/>
							<h3>{WorkDatas.clientName}</h3>
							<p className='sub-head'>{WorkDatas.clientCountry}</p>
						</div>
						<p>
							<em>"{WorkDatas.clientReview}"</em>
						</p>
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

			<CallToActionSingle />
		</div>
	);
};

ServiceDetails.getInitialProps = async function ({ query }) {
	const { slug } = query;
	const WorkDatas = WorkData.filter((work) => work.slug === slug);
	return { WorkDatas: WorkDatas[0] };
};

export default ServiceDetails;
