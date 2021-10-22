/** @format */

const PageHeader = ({ subHead, mainHead, bgImg, bgColor }) => {
	console.log(bgColor, 'zzz');
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
						<p className='sub-head text-white'>{subHead}</p>
						<h3 className='pb-5 text-white main-head '>{mainHead}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
