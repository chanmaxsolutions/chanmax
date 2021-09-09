/** @format */

import Image from 'next/image';
import Link from 'next/link';
import WorkData from '../data/WorkData';

const FeatureProject = () => {
	return (
		<section className='container-fluid feature-project-container p-5'>
			<div className='container'>
				{WorkData.slice(-1).map((content, i) => {
					return (
						<div className='row'>
							<div className='col-lg-6'>
								<Image
									className='feature-project-bg-image'
									src={content.image}
									width={700}
									height={446}
								/>
							</div>
							<div className='col-lg-6 d-flex align-items-center p-4'>
								<div>
									<p className='sub-head'> {content.category}</p>
									<h3 className='main-head'>{content.title}</h3>
									<p className='card-text'>{content.homeExcerpt}</p>
									<Link href={`/works/${content.id}`}>
										<a className='button large'>More Details</a>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default FeatureProject;
