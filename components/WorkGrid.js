/** @format */

import WorkData from '../data/WorkData';
import Link from 'next/link';
import Image from 'next/image';

const WorkGrid = () => {
	return (
		<div>
			<div className='container cm-p5'>
				<div className='row'>
					{WorkData.map((workContent, i) => {
						return (
							<div key={i} className='col-md-4 mb-5'>
								<Link href={`/works/${workContent.slug}`}>
									<a>
										<div className='cm-link blog-card-div'>
											<Image
												src={workContent.image}
												width={620}
												height={400}
												className='work-grid-image'
											/>
											<h4 className='mt-2'>{workContent.title}</h4>
											<p className='card-text'>{workContent.excerpt}</p>
										</div>
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

export default WorkGrid;
