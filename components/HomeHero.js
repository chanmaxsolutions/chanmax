/** @format */

import Link from 'next/link';
import HomeHeroData from './../data/HomeHeroData';
import { motion } from 'framer-motion';

const HomeHero = () => {
	return (
		<>
			<div className='container-fluid  hero-container'>
				<div className='row justify-content-md-center hero-container-row'>
					<div className='col-lg-10 d-flex align-items-center'>
						{HomeHeroData.map((content, i) => {
							return (
								<div key={i} className='text-center'>
									<motion.h1
										initial={{ y: -200, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										className='hero-header text-white'>
										{' '}
										{content.title}
									</motion.h1>
									<p className='hero-description text-white'>{content.desc}</p>
									<Link href={`${content.firstButtonLink}`}>
										<a className='button large fifth home-hero-button'>
											{content.firstButton}{' '}
										</a>
									</Link>
									<Link href={`${content.secondButtonLink}`}>
										<a className='button large fourth home-hero-button-two'>
											{content.secondButton}
										</a>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeHero;
