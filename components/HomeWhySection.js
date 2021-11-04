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
		<div>
			<motion.div
				whileHover={{ backgroundColor: '#FFCA38' }}
				className='container cm-whu-us-block-mt'>
				<div className='row '>
					<div className='col-lg-5 cm-p5'>
						{HomeWhySectionData.map((content, i) => {
							return (
								<div key={i}>
									<p className='home-why-section-sub-title'>
										{content.subTitle}
									</p>
									<h4>{content.title}</h4>
									<p className='home-why-section-desc'>{content.desc}</p>
									{/* <Link href={content.ButtonLink}>
										<a className='home-why-section-button'>
											{content.ButtonText}
										</a>
									</Link> */}
								</div>
							);
						})}
					</div>
					<motion.div
						animate={animation2}
						className='col-lg-7 text-center cm-why-us-block-img'>
						<Image
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636062830/Home/home-why-we-want_rhgcpp.svg'
							width={800}
							height={500}
						/>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default HomeWhySection;
