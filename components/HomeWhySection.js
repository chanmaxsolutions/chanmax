/** @format */
import Image from 'next/image';
import HomeWhySectionData from './../data/HomeWhySectionData';
import { motion } from 'framer-motion';

const HomeWhySection = () => {
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
								</div>
							);
						})}
					</div>
					<motion.div className='col-lg-7 text-center cm-why-us-block-img'>
						<Image
							src='https://res.cloudinary.com/dem8lqxhj/image/upload/v1636062830/Home/home-why-we-want_rhgcpp.webp'
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
