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
										{content.title}
									</motion.h1>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className='hero-description text-white'>
										{content.desc}
									</motion.p>
									<Link href={`${content.firstButtonLink}`}>
										<motion.a
											whileHover={{ y: -5 }}
											transition={{
												delay: 1,
												x: { type: 'spring', stiffness: 100 },
												default: { duration: 0.3 },
											}}
											className='button large fifth home-hero-button'>
											{content.firstButton}{' '}
										</motion.a>
									</Link>
									<Link href={`${content.secondButtonLink}`}>
										<motion.a
											whileHover={{ y: -5 }}
											transition={{
												delay: 1,
												x: { type: 'spring', stiffness: 100 },
												default: { duration: 0.3 },
											}}
											className='button large fourth home-hero-button-two'>
											{content.secondButton}
										</motion.a>
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
