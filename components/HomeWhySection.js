/** @format */
import Image from 'next/image';
import HomeWhySectionData from './../data/HomeWhySectionData';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const HomeWhySection = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
	});
	const animation = useAnimation();
	const animation2 = useAnimation();

	// useEffect(() => {
	// 	if (inView) {
	// 		animation.start({
	// 			x: 0,
	// 			opacity: 1,
	// 		}) &&
	// 			animation2.start({
	// 				x: 0,
	// 				opacity: 1,
	// 			});
	// 	} else {
	// 		animation.start({
	// 			x: -200,
	// 			opacity: 0,
	// 		}) &&
	// 			animation2.start({
	// 				x: 200,
	// 				opacity: 0,
	// 			});
	// 	}

	// 	console.log(inView);
	// }, [inView]);
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-5 cm-p5'>
					{HomeWhySectionData.map((content, i) => {
						return (
							<div key={i}>
								<p className='home-why-section-sub-title'>{content.subTitle}</p>
								<h4>{content.title}</h4>
								<p className='home-why-section-desc'>{content.desc}</p>
								<Link href={content.ButtonLink}>
									<a className='home-why-section-button'>
										{content.ButtonText}
									</a>
								</Link>
							</div>
						);
					})}
				</div>
				<motion.div animate={animation2} className='col-lg-7'>
					<Image
						src='/images/gif-homepage-getfeedback-graphic.gif'
						width={1000}
						height={1000}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default HomeWhySection;
