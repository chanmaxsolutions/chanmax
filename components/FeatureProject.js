/** @format */

import Image from 'next/image';
import Link from 'next/link';
import WorkData from '../data/WorkData';
import { motion } from 'framer-motion';

const FeatureProject = () => {
	const shuffled = WorkData.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	return (
		<div>
			{shuffled.slice(-1).map((content, i) => {
				return (
					<motion.div
						whileHover={{
							backgroundColor: `${content.bgColor}`,
							color: '#fff',
						}}
						className='container border-radius feature-project-container cm-p5'>
						<div key={i} className='row'>
							<div className='col-lg-6'>
								<Image
									className='feature-project-bg-image'
									src={content.image}
									width={700}
									height={446}
								/>
							</div>
							<div className='col-lg-6 d-flex align-items-center'>
								<div>
									<p
										className='sub-head'
										style={{
											backgroundColor: '#fff',
											display: 'inline-block',
											padding: '3px 8px',
										}}>
										{' '}
										{content.product}
									</p>
									<h3 className='main-head'>{content.title}</h3>
									<p className='card-text'>{content.homeExcerpt}</p>
									<Link href={`/works/${content.slug}`}>
										<a className='button large'>More Details</a>
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default FeatureProject;
