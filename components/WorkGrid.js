/** @format */

import WorkData from '../data/WorkData';
import Link from 'next/link';
import Image from 'next/image';

const WorkGrid = () => {
	return (
		<div>
			<div className='container'>
				<div className='row'>
					{WorkData.map((workContent, i) => {
						return (
							<div key={i} className='col-md-4 mb-5'>
								<Image
									src={workContent.image}
									width={620}
									height={400}
									className='work-grid-image'
								/>
								<h4 className='mt-2'>{workContent.title}</h4>
								<p className='hero-description'>{workContent.excerpt}</p>
								<Link href={`/works/${workContent.slug}`}>
									<a className='button small'>Learn More</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default WorkGrid;
