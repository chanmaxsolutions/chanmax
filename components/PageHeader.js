/** @format */
import { motion } from 'framer-motion';

const PageHeader = ({ subHead, mainHead, bgImg, bgColor }) => {
	return (
		<div
			className='container-fluid mb-5 page-header-container '
			style={{ backgroundColor: bgColor }}>
			<div className='row justify-content-md-center text-center  align-middle'>
				<div
					className='align-items-center page-header-row'
					style={{
						backgroundImage: `url('${bgImg}')`,
					}}>
					<div className='col-lg-6 page-header-margin-top'>
						<motion.p
							initial={{ y: -200, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className='sub-head text-white text-bg'>
							{subHead}
						</motion.p>
						<motion.h3
							initial={{ y: -200, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className='mb-5 text-white main-head text-bg'>
							{mainHead}
						</motion.h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
